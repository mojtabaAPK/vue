const plugin = require('tailwindcss/plugin');

module.exports = plugin(
    ({ matchVariant, addVariant }) => {
        matchVariant(
            'selector',
            (value) => {
                return `& > ${value}`;
            },
            {
                values: {
                    p:'p',
                    a:'a',
                    div:'div',
                    span:'span',
                    b:'b',
                    canvas:'canvas',
                    button:'button',
                    lable:'lable',
                    form:'form',
                    footer:'footer',
                    hr:'hr',
                    img:'img',
                    iframe:'iframe',
                    input:'input',
                    i:'i',
                    nav:'nav',
                    option:'option',
                    object:'object',
                    select:'select',
                    span:'span',
                    strong:'strong',
                    svg:'svg',
                    table:'table',
                    textarea:'textarea',
                    td:'td',
                    tr:'tr',
                    tbody:'tbody',
                    ul:'ul',
                    li:'li',
                    video:'video',
                    h1:'h1',
                    h2:'h2',
                    h3:'h3',
                    h4:'h4',
                    h5:'h5',
                    h6:'h6',
                    pre:'pre',
                    audio:'audio',
                }
            }
        )

        matchVariant(
            'theme',
            (value) => {
                return `[data-theme=${value}] &`;
            },
            {
                values: {
                    dracula:'dracula',
                    light:'light',
                }
            }
        )
    }
)