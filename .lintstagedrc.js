module.exports = {
    './src/**/*.{ts,tsx}': [
        'prettier --config ./.prettierrc.json --write',
        'eslint --fix',
        'tsc --noEmit --listFiles --jsx "react" --esModuleInterop --skipLibCheck',
        'git add'
    ],
    './src/**/*.{js}': [
        'prettier --config ./.prettierrc.json --write',
        'eslint --fix',
        'git add'
    ]
};
