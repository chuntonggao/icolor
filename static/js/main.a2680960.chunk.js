(this.webpackJsonpicolor=this.webpackJsonpicolor||[]).push([[0],{402:function(e,a,t){e.exports=t(864)},407:function(e,a,t){},864:function(e,a,t){"use strict";t.r(a);var o=t(46),r=t(0),n=t.n(r),l=t(9),c=t.n(l),i=(t(407),t(25)),s=t(27),m=t(30),p=t(28),d=t(31),h=t(37),u=t(58),f=t(99),b=t(318),g=t(26),v=t(32),y=t(310),C=t.n(y),O=t(309),E=t.n(O),j=t(7),x=t.n(j),k=t(307),S=Object(h.createStyles)({root:{width:"20%",height:"25%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px"}}),B=Object(h.withStyles)(S)((function(e){return n.a.createElement("div",{className:e.classes.root,style:{backgroundColor:e.color}},e.color)}));function w(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function F(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?w(t,!0).forEach((function(a){Object(f.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var N=function(e){return Object(h.createStyles)({root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(400,"px)"),marginLeft:400,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},hide:{display:"none"},drawer:{width:400,flexShrink:0},drawerPaper:{width:400},drawerHeader:F({display:"flex",alignItems:"center",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{height:"calc(100vh - 64px)",flexGrow:1,padding:3*e.spacing.unit,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-400},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}})},P=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(p.a)(a).call(this,e))).state={open:!0,currentColor:"teal",colors:["purple","#915764"]},t.handleDrawerOpen=t.handleDrawerOpen.bind(Object(g.a)(t)),t.handleDrawerClose=t.handleDrawerClose.bind(Object(g.a)(t)),t.updateCurrentColor=t.updateCurrentColor.bind(Object(g.a)(t)),t.addNewColor=t.addNewColor.bind(Object(g.a)(t)),t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"handleDrawerOpen",value:function(){this.setState({open:!0})}},{key:"handleDrawerClose",value:function(){this.setState({open:!1})}},{key:"updateCurrentColor",value:function(e){var a=e.hex;this.setState({currentColor:a})}},{key:"addNewColor",value:function(){this.setState({colors:[].concat(Object(b.a)(this.state.colors),[this.state.currentColor])})}},{key:"render",value:function(){var e=this.props.classes,a=this.state.open;return n.a.createElement("div",{className:e.root},n.a.createElement(v.c,null),n.a.createElement(v.a,{position:"fixed",className:x()(e.appBar,Object(f.a)({},e.appBarShift,a))},n.a.createElement(v.g,{disableGutters:!a},n.a.createElement(v.f,{color:"inherit","aria-label":"Open drawer",onClick:this.handleDrawerOpen,className:x()(e.menuButton,a&&e.hide)},n.a.createElement(E.a,null)),n.a.createElement(v.h,{variant:"h6",color:"inherit",noWrap:!0},"Persistent drawer"))),n.a.createElement(v.e,{className:e.drawer,variant:"persistent",anchor:"left",open:a,classes:{paper:e.drawerPaper}},n.a.createElement("div",{className:e.drawerHeader},n.a.createElement(v.f,{onClick:this.handleDrawerClose},n.a.createElement(C.a,null))),n.a.createElement(v.d,null),n.a.createElement(v.h,{variant:"h4"},"Design Your Palette"),n.a.createElement("div",null,n.a.createElement(v.b,{variant:"contained",color:"secondary"},"Clear Palette"),n.a.createElement(v.b,{variant:"contained",color:"primary"},"Random Color")),n.a.createElement(k.ChromePicker,{color:this.state.currentColor,onChangeComplete:this.updateCurrentColor}),n.a.createElement(v.b,{variant:"contained",color:"primary",style:{backgroundColor:this.state.currentColor},onClick:this.addNewColor},"Add Color")),n.a.createElement("main",{className:x()(e.content,Object(f.a)({},e.contentShift,a))},n.a.createElement("div",{className:e.drawerHeader}),this.state.colors.map((function(e){return n.a.createElement(B,{color:e})}))))}}]),a}(r.Component),D=Object(h.withStyles)(N)(P),A=t(15),G=t(83),L=t.n(G),I=function e(){Object(i.a)(this,e),this[50]=void 0,this[100]=void 0,this[200]=void 0,this[300]=void 0,this[400]=void 0,this[500]=void 0,this[600]=void 0,this[700]=void 0,this[800]=void 0,this[900]=void 0,this[50]=[],this[100]=[],this[200]=[],this[300]=[],this[400]=[],this[500]=[],this[600]=[],this[700]=[],this[800]=[],this[900]=[]},M=function e(a){var t=a.paletteName,o=a.id,r=a.emoji;Object(i.a)(this,e),this.paletteName=void 0,this.id=void 0,this.emoji=void 0,this.colors=void 0,this.paletteName=t,this.id=o,this.emoji=r,this.colors=new I};function R(e,a){return L.a.scale(function(e){return[L()(e).darken(1.4).hex(),e,"#fff"]}(e)).mode("lab").colors(a)}var T=function(e){var a=new M({paletteName:e.paletteName,id:e.id,emoji:e.emoji}),t=Object.keys(new I),o=!0,r=!1,n=void 0;try{for(var l,c=e.colors[Symbol.iterator]();!(o=(l=c.next()).done);o=!0)for(var i=l.value,s=R(i.color,10).reverse(),m=0;m<s.length;m++)a.colors[t[m]].push({name:"".concat(i.name," ").concat(t[m]),id:i.name.toLowerCase().replace(/ /g,"-"),hex:s[m],rgb:L()(s[m]).css(),rgba:L()(s[m]).css().replace("rgb","rgba").replace(")",",1.0)")})}catch(p){r=!0,n=p}finally{try{o||null==c.return||c.return()}finally{if(r)throw n}}return a},z=function(e){return L()(e).luminance()>=.5?"rgba(0, 0, 0, 0.5)":"white"},H=t(311),U=t.n(H),W=Object(A.a)({ColorBox:{width:"20%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-7.5px","&:hover button":{opacity:1}},seeMore:{background:"rgba(255, 255, 255, 0.3)",position:"absolute",border:"none",right:"0px",bottom:"0px",width:"60px",height:"30px",textAlign:"center",lineHeight:"30px",textTransform:"uppercase"},copyButton:{width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none",cursor:"pointer",opacity:0,fontFamily:'"Poppins", sans-serif'},boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:"black",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px"},copyOverlay:{opacity:0,zIndex:0,width:"100%",height:"100%",transition:"transform 0.6s ease-in-out",transform:"scale(0.1)"},showOverlay:{opacity:1,transform:"scale(50)",zIndex:10,position:"absolute"},copyMessage:{fontFamily:'"Poppins", sans-serif',position:"fixed",left:0,right:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",fontSize:"4rem",transform:"scale(0.1)",opacity:0,"& h1":{fontWeight:400,textShadow:"1px 2px black",background:"rgba(255, 255, 255, 0.2)",width:"100%",textAlign:"center",marginBottom:0,padding:"1rem",textTransform:"uppercase"},"& p":{fontSize:"2rem",fontWeight:100}},showMessage:{opacity:1,transform:"scale(1)",zIndex:25,transition:"all 0.4s ease-in-out",transitionDelay:"0.3s"}}),J=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(p.a)(a).call(this,e))).state={copied:!1},t.changeCopyState=t.changeCopyState.bind(Object(g.a)(t)),t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"changeCopyState",value:function(){var e=this;this.setState({copied:!0},(function(){setTimeout((function(){return e.setState({copied:!1})}),1500)}))}},{key:"render",value:function(){var e=this.props,a=e.name,t=e.background,r=e.moreUrl,l=e.textColor,c=this.state.copied;return n.a.createElement(U.a,{text:t,onCopy:this.changeCopyState},n.a.createElement("div",{style:{background:t,height:r?"25%":"50%"},className:this.props.classes.ColorBox},n.a.createElement("div",{style:{background:t},className:"".concat(this.props.classes.copyOverlay," ").concat(c&&this.props.classes.showOverlay)}),n.a.createElement("div",{className:"".concat(this.props.classes.copyMessage," ").concat(c&&this.props.classes.showMessage)},n.a.createElement("h1",{style:{color:l}},"copied!"),n.a.createElement("p",{style:{color:l}},t)),n.a.createElement("div",null,n.a.createElement("div",{className:this.props.classes.boxContent},n.a.createElement("span",{style:{color:l}},a)),n.a.createElement("button",{style:{color:l},className:this.props.classes.copyButton},"Copy")),r&&n.a.createElement(o.b,{to:r,onClick:function(e){return e.stopPropagation()}},n.a.createElement("span",{style:{color:l},className:this.props.classes.seeMore},"MORE"))))}}]),a}(r.Component),q=Object(A.b)(W)(J),V=t(130),Y=t.n(V),K=t(81),Q=t.n(K),X=t(132),Z=t.n(X),$=t(133),_=t.n($),ee=t(316),ae=t.n(ee),te=(t(793),t(317)),oe=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props,a=e.level,t=e.changeLevel,o={handleStyle:{backgroundColor:"green",outline:"none",border:"2px solid green",boxShadow:"none",width:"13px",height:"13px",marginLeft:"-7px",marginTop:"-3px"},trackStyle:{backgroundColor:"transparent"},railStyle:{height:"8px"}};return n.a.createElement("div",{className:"slider-container"},n.a.createElement("span",null,"Level: ",a),n.a.createElement("div",{className:"slider",style:{width:"340px",margin:"0 10px",display:"inline-block"}},n.a.createElement(te.a,Object.assign({defaultValue:a,min:100,max:900,step:100,onAfterChange:t},o))))}}]),a}(r.Component),re=Object(A.a)({NavBar:{display:"flex",alignItems:"center",justifyContent:"flex-start",height:"6vh"},logo:{marginRight:"15px",padding:"0 13px",fontSize:"22px",backgroundColor:"#eceff1",fontFamily:"Poppins",height:"100%",display:"flex",alignItems:"center","& a":{textDecoration:"none",color:"black"}},select:{marginLeft:"auto",marginRight:"1rem"}}),ne=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(p.a)(a).call(this,e))).state={format:"hex",isSnackBarOpen:!1},t.handleSelectChange=t.handleSelectChange.bind(Object(g.a)(t)),t.closeSnackBar=t.closeSnackBar.bind(Object(g.a)(t)),t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"handleSelectChange",value:function(e){var a=e.target.value;this.setState({format:a,isSnackBarOpen:!0}),this.props.changeFormat(a)}},{key:"closeSnackBar",value:function(){this.setState({isSnackBarOpen:!1})}},{key:"render",value:function(){var e=this.props,a=e.level,t=e.changeLevel,r=this.state,l=r.format,c=r.isSnackBarOpen;return n.a.createElement("header",{className:this.props.classes.NavBar},n.a.createElement("div",{className:this.props.classes.logo},n.a.createElement(o.b,{to:"/"},"iColor")),t&&n.a.createElement(oe,{level:a,changeLevel:t}),n.a.createElement("div",{className:this.props.classes.select},n.a.createElement(Z.a,{value:l,onChange:this.handleSelectChange,style:{fontFamily:'"Poppins", sans-serif'}},n.a.createElement(Q.a,{value:"hex"},"HEX - #FFFFFF"),n.a.createElement(Q.a,{value:"rgb"},"RGB - RGB(255,255,255)"),n.a.createElement(Q.a,{value:"rgba"},"RGBA - RGBA(255,255,255,1.0)"))),n.a.createElement(_.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:c,autoHideDuration:3e3,message:n.a.createElement("span",{id:"message-id"},"Format Changed To ",l.toUpperCase()),ContentProps:{"aria-describedby":"message-id"},onClose:this.closeSnackBar,action:[n.a.createElement(Y.a,{onClick:this.closeSnackBar,color:"inherit",key:"close","aria-label":"close"},n.a.createElement(ae.a,null))]}))}}]),a}(r.Component),le=Object(A.b)(re)(ne),ce=Object(A.a)({footer:{backgroundColor:"white",height:"5vh",display:"flex",justifyContent:"flex-end",alignItems:"center",fontWeight:"bold"},emoji:{fontSize:"1.5rem",margin:"0 1rem"}}),ie=Object(A.b)(ce)((function(e){return n.a.createElement("footer",{className:e.classes.footer},e.paletteName,n.a.createElement("span",{className:e.classes.emoji},e.emoji))})),se=Object(A.a)({Palette:{height:"100vh",display:"flex",flexDirection:"column"},colors:{height:"90%"}}),me=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(p.a)(a).call(this,e))).state={level:500,format:"hex"},t.changeLevel=t.changeLevel.bind(Object(g.a)(t)),t.changeFormat=t.changeFormat.bind(Object(g.a)(t)),t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"changeLevel",value:function(e){this.setState({level:e})}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.props.palette,a=e.colors,t=e.paletteName,o=e.emoji,r=e.id,l=this.state,c=l.level,i=l.format,s=a[c].map((function(e){return n.a.createElement(q,{textColor:z(e[i]),background:e[i],name:e.name,key:e.id,moreUrl:"/palette/".concat(r,"/").concat(e.id)})}));return n.a.createElement("div",{className:this.props.classes.Palette},n.a.createElement(le,{level:c,changeLevel:this.changeLevel,changeFormat:this.changeFormat}),n.a.createElement("div",{className:this.props.classes.colors},s),n.a.createElement(ie,{paletteName:t,emoji:o}))}}]),a}(r.Component),pe=Object(A.b)(se)(me),de=Object(A.a)({root:{backgroundColor:"white",border:"1px solid black",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden","&:hover":{cursor:"pointer"}},colors:{backgroundColor:"white",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0px",color:"black",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColorBox:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-7.5px"}}),he=Object(A.b)(de)((function(e){var a=e.paletteName,t=e.emoji,o=e.colors,r=e.handleClick,l=o.map((function(a){return n.a.createElement("div",{className:e.classes.miniColorBox,style:{backgroundColor:a.color},key:a.name})}));return n.a.createElement("div",{className:e.classes.root,onClick:r},n.a.createElement("div",{className:e.classes.colors},l),n.a.createElement("h5",{className:e.classes.title},a," ",n.a.createElement("span",{className:e.classes.emoji},t)))})),ue=Object(A.a)({root:{backgroundColor:"blue",height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center"},container:{width:"50%",display:"flex",alignItems:"flex-start",flexDirection:"column"},nav:{display:"flex",width:"100%",justifyContent:"space-between",color:"white",alignItems:"center","& a":{color:"white",textDecoration:"none"}},palettes:{boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3, 30%)",gridGap:"5%"}}),fe=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"goToPalette",value:function(e){this.props.history.push("/palette/".concat(e))}},{key:"render",value:function(){var e=this,a=this.props.palettes;return n.a.createElement("div",{className:this.props.classes.root},n.a.createElement("div",{className:this.props.classes.container},n.a.createElement("nav",{className:this.props.classes.nav},n.a.createElement("h1",null,"iColor"),n.a.createElement(o.b,{to:"/palette/new"},"Create Palette")),n.a.createElement("div",{className:this.props.classes.palettes},a.map((function(a){return n.a.createElement(he,Object.assign({},a,{key:a.id,handleClick:function(){return e.goToPalette(a.id)}}))})))))}}]),a}(r.Component),be=Object(A.b)(ue)(fe),ge=Object(A.a)({Palette:{height:"100vh",display:"flex",flexDirection:"column"},colors:{height:"90%"},goBack:{width:"20%",height:"50%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-7.5px",opacity:1,backgroundColor:"black","& a":{color:"white",width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none"}}}),ve=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(p.a)(a).call(this,e))).state={format:"hex"},t.changeFormat=t.changeFormat.bind(Object(g.a)(t)),t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.props,a=e.palette,t=e.shades,r=this.state.format,l=a.paletteName,c=a.emoji,i=a.id,s=t.map((function(e){return n.a.createElement(q,{textColor:z(e[r]),key:e.name,name:e.name,background:e[r],moreUrl:null})}));return n.a.createElement("div",{className:this.props.classes.Palette},n.a.createElement(le,{changeFormat:this.changeFormat,changeLevel:null,level:null}),n.a.createElement("div",{className:this.props.classes.colors},s,n.a.createElement("div",{className:this.props.classes.goBack},n.a.createElement(o.b,{to:"/palette/".concat(i)},"GO BACK"))),n.a.createElement(ie,{paletteName:l,emoji:c}))}}]),a}(r.Component),ye=Object(A.b)(ge)(ve),Ce=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],Oe=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"findPalette",value:function(e){return Ce.find((function(a){return a.id===e}))}},{key:"render",value:function(){var e=this,a=Object(h.createMuiTheme)({typography:{fontFamily:['"Poppins"','"Helvetica Neue"',"sans-serif"].join(",")}});return n.a.createElement(h.MuiThemeProvider,{theme:a},n.a.createElement(u.c,null,n.a.createElement(u.a,{exact:!0,path:"/palette/new",render:function(){return n.a.createElement(D,null)}}),n.a.createElement(u.a,{exact:!0,path:"/",render:function(e){return n.a.createElement(be,Object.assign({palettes:Ce},e))}}),n.a.createElement(u.a,{exact:!0,path:"/palette/:id",render:function(a){return n.a.createElement(pe,{palette:T(e.findPalette(a.match.params.id))})}}),n.a.createElement(u.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(a){var t=T(e.findPalette(a.match.params.paletteId)),o=a.match.params.colorId,r=function(e,a){var t=[],o=e.colors;for(var r in o)t=t.concat(o[r].filter((function(e){return e.id===a})));return t.slice(1)}(t,o);return n.a.createElement(ye,{colorId:o,palette:t,shades:r})}})))}}]),a}(r.Component);c.a.render(n.a.createElement(o.a,null,n.a.createElement(Oe,null)),document.getElementById("root"))}},[[402,1,2]]]);
//# sourceMappingURL=main.a2680960.chunk.js.map