const iframe = '#legacyApplicationFrame'
const selectTimeOut = 5000
const background = 'background'
const backgroundColorOne = 'rgb(24,24,24)'
const backgroundColorTwo = 'rgb(42,42,42)'
const backgroundColorThree = 'rgb(32 59 77)'//изначально прозрачный на 80%
const backgroundColorFour = '#261e0d'
const backgroundColorFive = '#393939'
const border = 'border'
const borderColor = '1px solid #393939'
const color = 'color'
const colorColorOne = '#338fcc'
const colorColorTwo = '#e2e2e2'
const colorColorThree = '#777777'

function Dark(version){
    let Core = new CoreClass([
        {element:'background-color',   previous:'rgb(255, 255, 255)',new:backgroundColorTwo},
        {element:'background-color',   previous:'rgb(240, 240, 240)',new:backgroundColorOne},
        {element:'background-color',   previous:'rgb(234, 244, 251)',new:backgroundColorOne},

        {element:'background-color',   previous:'rgb(235, 235, 235)',new:backgroundColorThree},//kb
        {element:'background-color',   previous:'rgb(200, 226, 244)',new:backgroundColorThree},
        {element:'background-color',   previous:'rgb(237, 237, 237)',new:backgroundColorThree},
        {element:'background-color',   previous:'rgb(187, 220, 241)',new:backgroundColorOne},
        {element:'background-color',   previous:'rgb(227, 227, 227)',new:backgroundColorOne},

        {element:'background-color',   previous:'var(--ag-background-color,#fff)',new:backgroundColorTwo},//mc
        {element:'background-color',   previous:'var(--ag-header-background-color,#fff)',new:backgroundColorTwo},
        {element:'background-color',   previous:'var(--ag-odd-row-background-color,#fff)',new:backgroundColorTwo},
        {element:'background-color',   previous:'var(--ag-selected-row-background-color,#d8eaf7)',new:backgroundColorThree},

        {element:'background-color',   previous:'rgb(252, 246, 232)',new:backgroundColorFour},
        {element:'background-color',   previous:'rgb(217, 235, 247)',new:backgroundColorThree},
        {element:'background-color',   previous:'rgb(230, 230, 230)',new:backgroundColorThree},
        {element:'background-color',   previous:'rgb(252, 239, 237)',new:backgroundColorFour},
        {element:'background-color',   previous:'rgb(247, 247, 247)',new:backgroundColorTwo},
        {element:'background-color',   previous:'rgb(216, 234, 247)',new:backgroundColorThree},
        {element:'background-color',   previous:'rgb(242, 242, 242)',new:backgroundColorThree},
        {element:'background-color',   previous:'rgb(204, 204, 204)',new:backgroundColorOne},
        {element:'background-color',   previous:'rgb(245, 245, 245)',new:backgroundColorOne},
        {element:'background-color',   previous:'rgb(204, 228, 245)',new:backgroundColorOne},
        {element:'background-color',   previous:'rgb(254, 247, 246)',new:backgroundColorFour},
        {element:'background-color',   previous:'rgb(240, 211, 153)',new:'rgb(97, 76, 33)'},
        {element:'background-color',   previous:'rgba(255, 255, 255, 0.9)',new:'rgba(42, 42, 42, 0.9)'},
        {element:'background-image',   previous:'linear-gradient(rgb(255, 255, 255), rgb(240, 240, 240))',new:'linear-gradient(rgb(57, 57, 57), rgb(24, 24, 24))'},
        {element:'background-image',   previous:'linear-gradient(rgb(204, 204, 204), rgb(230, 230, 230))',new:'linear-gradient(rgb(57, 57, 57), rgb(24, 24, 24))'},
        {element:'background',   previous:'linear-gradient(rgb(240, 240, 240), rgb(230, 230, 230))',new:'linear-gradient(rgb(50, 50, 50), rgb(24, 24, 24))'},
        {element:'background-color',   previous:'rgba(217, 235, 247, 0.8)',new:'rgba(32, 59, 77, 0.8)'},
        {element:'color',              previous:'rgb(77, 77, 77)',new:'rgb(226, 226, 226)'},
        
        {element:'color',              previous:'rgb(85, 85, 85)',new:'rgb(200, 200, 200)'},
        {element:'color',              previous:'rgb(17, 79, 120)',new:'rgb(84, 187, 255)'},
        {element:'color',              previous:'rgb(119, 0, 136)',new:'rgb(172, 0, 196)'},
        {element:'color',              previous:'rgb(170, 17, 17)',new:'rgb(224, 0, 20)'},
        {element:'color',              previous:'inherit',new:'white'},

        {element:'color',              previous:'rgb(51, 51, 51)',new:'rgb(255, 255, 255)'},
        {element:'color',              previous:'rgb(80, 80, 80)',new:'rgb(255, 255, 255)'},
        {element:'color',              previous:'rgb(204, 204, 204)',new:'rgb(226, 226, 226)'},
        {element:'color',              previous:'rgb(128, 128, 128)',new:'rgb(200, 200, 200)'},
        {element:'fill',              previous:'rgb(51, 51, 51)',new:'rgb(200, 200, 200)'},
        {element:'border-color',       previous:'rgba(217, 235, 247, 0.8)',new:'rgba(32, 59, 77, 0.8)'},

        {element:'border-bottom-color',   previous:'rgb(240, 211, 153)',new:backgroundColorFour},
        {element:'border-left-color',   previous:'rgb(240, 211, 153)',new:backgroundColorFour},
        {element:'border-right-color',   previous:'rgb(240, 211, 153)',new:backgroundColorFour},
        {element:'border-top-color',   previous:'rgb(240, 211, 153)',new:backgroundColorFour},

        {element:'border-color',       previous:'rgb(172, 210, 236)',new:'rgb(57, 57, 57)'},
        {element:'border-color',       previous:'rgb(240, 240, 240)',new:'rgb(57, 57, 57)'},

        {element:'border-bottom-color',previous:'rgb(240, 240, 240)',new:'rgb(57, 57, 57)'},
        {element:'border-left-color',  previous:'rgb(240, 240, 240)',new:'rgb(57, 57, 57)'},
        {element:'border-right-color', previous:'rgb(240, 240, 240)',new:'rgb(57, 57, 57)'},
        {element:'border-top-color',   previous:'rgb(240, 240, 240)',new:'rgb(57, 57, 57)'},

        {element:'border-bottom-color',previous:'rgb(244, 184, 174)',new:backgroundColorFour},
        {element:'border-left-color',  previous:'rgb(244, 184, 174)',new:backgroundColorFour},
        {element:'border-right-color', previous:'rgb(244, 184, 174)',new:backgroundColorFour},
        {element:'border-top-color',   previous:'rgb(244, 184, 174)',new:backgroundColorFour},

        {element:'border-bottom-color',previous:'rgb(224, 224, 224)',new:'rgb(57, 57, 57)'},//наводка на основные контейнеры
        {element:'border-left-color',  previous:'rgb(224, 224, 224)',new:'rgb(57, 57, 57)'},
        {element:'border-right-color', previous:'rgb(224, 224, 224)',new:'rgb(57, 57, 57)'},
        {element:'border-top-color',   previous:'rgb(224, 224, 224)',new:'rgb(57, 57, 57)'},

        {element:'border-bottom-color',previous:'rgb(212, 212, 212)',new:'rgb(57, 57, 57)'},
        {element:'border-left-color',  previous:'rgb(212, 212, 212)',new:'rgb(57, 57, 57)'},
        {element:'border-right-color', previous:'rgb(212, 212, 212)',new:'rgb(57, 57, 57)'},
        {element:'border-top-color',   previous:'rgb(212, 212, 212)',new:'rgb(57, 57, 57)'},
        
        {element:'border-bottom-color',previous:'rgb(255, 255, 255)',new:'rgb(57, 57, 57)'},
        {element:'border-left-color',  previous:'rgb(255, 255, 255)',new:'rgb(57, 57, 57)'},
        {element:'border-right-color', previous:'rgb(255, 255, 255)',new:'rgb(57, 57, 57)'},
        {element:'border-top-color',   previous:'rgb(255, 255, 255)',new:'rgb(57, 57, 57)'},

        {element:'border-bottom-color',previous:'rgb(179, 179, 179)',new:'rgb(57, 57, 57)'},
        {element:'border-left-color',  previous:'rgb(179, 179, 179)',new:'rgb(57, 57, 57)'},
        {element:'border-right-color', previous:'rgb(179, 179, 179)',new:'rgb(57, 57, 57)'},
        {element:'border-top-color',   previous:'rgb(179, 179, 179)',new:'rgb(57, 57, 57)'},

        {element:'border-bottom-color',previous:'rgb(222, 222, 222)',new:'rgb(57, 57, 57)'},
        {element:'border-left-color',  previous:'rgb(222, 222, 222)',new:'rgb(57, 57, 57)'},
        {element:'border-right-color', previous:'rgb(222, 222, 222)',new:'rgb(57, 57, 57)'},
        {element:'border-top-color',   previous:'rgb(222, 222, 222)',new:'rgb(57, 57, 57)'},

        {element:'border-bottom-color',previous:'rgb(230, 230, 230)',new:'rgb(57, 57, 57)'},
        {element:'border-left-color',  previous:'rgb(230, 230, 230)',new:'rgb(57, 57, 57)'},
        {element:'border-right-color', previous:'rgb(230, 230, 230)',new:'rgb(57, 57, 57)'},
        {element:'border-top-color',   previous:'rgb(230, 230, 230)',new:'rgb(57, 57, 57)'},

        {element:'border-bottom-color',previous:'rgb(177, 177, 177)',new:'rgb(57, 57, 57)'},
        {element:'border-left-color',  previous:'rgb(177, 177, 177)',new:'rgb(57, 57, 57)'},
        {element:'border-right-color', previous:'rgb(177, 177, 177)',new:'rgb(57, 57, 57)'},
        {element:'border-top-color',   previous:'rgb(177, 177, 177)',new:'rgb(57, 57, 57)'},

        {element:'border-bottom-color',previous:'rgb(204, 204, 204)',new:'rgb(57, 57, 57)'},
        {element:'border-left-color',  previous:'rgb(204, 204, 204)',new:'rgb(57, 57, 57)'},
        {element:'border-right-color', previous:'rgb(204, 204, 204)',new:'rgb(57, 57, 57)'},
        {element:'border-top-color',   previous:'rgb(204, 204, 204)',new:'rgb(57, 57, 57)'},
    ])
        Core.RulesChanger()
        Core.NewRule([
            {selector:`::-webkit-scrollbar {
                width: 10px;
                height: 10px;
                box-shadow: inset 1px 1px #0000001f;
                -webkit-transition: all .5s cubic-bezier(.35,0,.25,1);
                transition: all .5s cubic-bezier(.35,0,.25,1);
                background-color: ${backgroundColorFive}
            }`},
            {selector:`::-webkit-scrollbar:hover {
                box-shadow: inset 1px 1px #0000000e,inset 0 -1px #0000000a;
                background-color: ${backgroundColorThree}
            }`},
            {selector:`::-webkit-scrollbar-button {
                display: none
            }`},
            {selector:`::-webkit-scrollbar-corner {
                background-color: transparent
            }`},
            {selector:`::-webkit-scrollbar-thumb {
                background-color: ${colorColorOne};
                box-shadow: inset 1px 1px #0000000e,inset 0 -1px #00000016;
                -webkit-transition: all .5s cubic-bezier(.35,0,.25,1);
                transition: all .5s cubic-bezier(.35,0,.25,1)
            }`}
        ])
        Core.RulesChangerCallBack([
            {selector:'ui-menu ui-widget ui-widget-content ui-autocomplete ui-front', element:'background', new:backgroundColorTwo},
            {selector:'ui-menu ui-widget ui-widget-content ui-autocomplete ui-front', element:'color', new:'rgb(200, 200, 200)'},
            {selector:'highcharts-background', element:'fill', new:backgroundColorTwo},
            {selector:'highcharts-text-outline', element:'stroke', new:backgroundColorTwo},
            {selector:'mc-body content-container__without-images', element:'color', new:'rgb(200, 200, 200)',iframe:true},
            {selector:'text', element:'fill', new:'rgb(226, 226, 226)',tagname:true}
        ])
}
