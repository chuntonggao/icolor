import { WithStyles, withStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import React, { Component, ComponentType } from 'react';
import { Link } from 'react-router-dom';

import { ColorFormat, ColorIntensity } from '../../types';
import ColorSlider from '../ColorSlider';
import styles from './styles';

type NavBarProps = {
    intensity: ColorIntensity | null;
    changeIntensity: ((intensity: ColorIntensity) => void) | null;
    changeFormat: (format: ColorFormat) => void;
};

type NavBarState = {
    format: ColorFormat;
    isSnackBarOpen: boolean;
};

export class NavBar extends Component<
    NavBarProps & WithStyles<typeof styles>,
    NavBarState
> {
    constructor(props: NavBarProps & WithStyles<typeof styles>) {
        super(props);
        this.state = { format: ColorFormat.HEX, isSnackBarOpen: false };
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.closeSnackBar = this.closeSnackBar.bind(this);
    }

    handleSelectChange(e: React.FormEvent<HTMLSelectElement>): void {
        const target: HTMLSelectElement = e.target as HTMLSelectElement;
        const format: ColorFormat = target.value as ColorFormat;
        this.setState({ format, isSnackBarOpen: true });
        this.props.changeFormat(format);
    }

    closeSnackBar(): void {
        this.setState({ isSnackBarOpen: false });
    }

    render(): JSX.Element {
        const { intensity, changeIntensity } = this.props;
        const { format, isSnackBarOpen } = this.state;
        return (
            <header className={this.props.classes.NavBar}>
                <div className={this.props.classes.logo}>
                    <Link to="/">iColor</Link>
                </div>
                {changeIntensity && intensity && (
                    <ColorSlider
                        intensity={intensity}
                        changeIntensity={changeIntensity}
                    />
                )}
                <div className={this.props.classes.select}>
                    <Select
                        value={format}
                        onChange={this.handleSelectChange}
                        style={{ fontFamily: `"Poppins", sans-serif` }}
                    >
                        <MenuItem value="hex">HEX - #FFFFFF</MenuItem>
                        <MenuItem value="rgb">RGB - RGB(255,255,255)</MenuItem>
                        <MenuItem value="rgba">
                            RGBA - RGBA(255,255,255,1.0)
                        </MenuItem>
                    </Select>
                </div>
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    open={isSnackBarOpen}
                    autoHideDuration={3000}
                    message={
                        <span id="message-id">
                            Format Changed To {format.toUpperCase()}
                        </span>
                    }
                    ContentProps={{ 'aria-describedby': 'message-id' }}
                    onClose={this.closeSnackBar}
                    action={[
                        <IconButton
                            onClick={this.closeSnackBar}
                            color="inherit"
                            key="close"
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    ]}
                />
            </header>
        );
    }
}

export default withStyles(styles)(NavBar) as ComponentType<NavBarProps>;
