const PinkbackgroundColorOne = '43, 8, 36'//darkgray
const PinkbackgroundColorTwo = '122, 0, 77'//Pinkwhitegray
const PinkbackgroundColorThree = '82, 0, 52'//blue
const PinkbackgroundColorFour = '30, 2, 79'//yellow
const PinkbackgroundColorFive = '73, 0, 199'//active four
const PinkborderColor = '209, 0, 125'//Pinkwhitegrayx2
const PinkcolorColorOne = '204, 51, 117'//bluetext
const PinkcolorColorTwo = '226, 226, 226'//darkPinkwhite
const PinkcolorColorThree = '119, 119, 119'//gray
const PinkcolorColorFour = '255, 84, 209'//activeBlue
const PinkcolorCodeKBOne = '172, 0, 196'//code in kb purple
const PinkcolorCodeKBTwo = '224, 0, 20'//code in kb red
const Pinkwhite = '255, 255, 255'//Pinkwhite

function Pink(version){
    let Core = new CoreClass([
        {element:'background-image',   previous:'url(\"/assets/images/navbar-icon.svg\")',new:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFxEAABcRAcom8z8AAAM4SURBVFhHxZddSJNRGMf/583ED2RZzTRXIiUlGasMoggimVEaQTmULN1Fd9VFWayLLrrJCAcRSAhJFJhNS2ujpNDCD6ISGkGKfRiK2Ycfy2aaYzr39p6z45jbtNfa9AcPez4G/2fnfc55zwgkKlQpBwnE4yBEvQhYRnOhwgXRJoK0AaTsaO/HanI7MeUQEVDL6/PG/V9DYu3wjyMCiPTL55kHbnG6+icEArLRnZ4fqHiNW5ySJjUgxvIg5PiIUwSBOyHHNPITPuKMoDUQFh2N5Pw8Zsrt23jWDRW/Z7PyaDpBayB8aSzSzuuZqQ5k8yxgnkWcErQG/NZWgorfnUWcErIZkCNOIXdUa8dFQhbz2INiQyoiV8Qxf/BlK8IVCqzctweR8fH4/bkX3x7XwzE0xOqU6FUqZDwxM7/tVSuull9nPkUURdTU1PBoGiMzNrClpBiJ2XuZ311hRFJeDoTwcBZTnGNjaC8uQa/pIYu9G/BlcnISsbEBd/uIrEeQXHB4mjglLCoKmy5eQIJmN8/8G7IacE040X7JgKeabLTk5KOvsdldIASpZ0+xzxf2UXdOwmKxQKvVeiw3N5dX/JHVwKcbt9BdWQX79z4Mv/8Ay+lzGPvyldXo0jcvV0zbaoODg6ivr/dYQ0MDr/gjq4G+Z03cc+OamEB/y3MeSQ0uieHe3JG3DaUp9sMr53Q64XK5eDQ3ZDXgO2gkLAxxO3fwCOjp6WFNTKFUKrn3d2Q1sOaYTtqGWkTEKaFYvw5br1xGdNJqVuvs7GQNWK1WOBwOlktPT4fBYEBWVhYyMzOh0WhYPhCyzoHZKCwshMlkYn5paSl0Oh3zvfnvc6C7shqu8XEeubHb7SgqKvKIU/R6PaqqquY0D7JWoHH/IdRZ+xEhzUJCQgK6urpgNpsxMDDA6r7Q76jVasTExLDZoEexd6NeyDuKz+zKQPmb18wPMvIeQdPoMPeCj7xzIITM+Ag6NqdhKDGe+UajETabjflBJvAMPJIuE0YZl4kg4D8Dkrg4T+IMwQXiudZw8UDXu1AhSn9M8JZ6CyBOeSdAEMvrFkacUjYlWiDZScnSJAv11qTv8Q7JrgG4+Qcp4leLMYeLXQAAAABJRU5ErkJggg==')"},
        
        {element:'background-color',   previous:'rgb(17, 78, 119)',new:`rgb(${PinkbackgroundColorTwo})`},
        {element:'background-color',   previous:'rgb(17, 79, 120)',new:`rgb(${PinkbackgroundColorTwo})`},
        {element:'background-color',   previous:'rgb(32, 110, 162)',new:`rgb(${PinkbackgroundColorThree})`},
        {element:'background-color',   previous:'rgb(7, 48, 75)',new:`rgb(${PinkbackgroundColorThree})`},
        
        {element:'background-color',   previous:'rgb(255, 255, 255)',new:`rgb(${PinkbackgroundColorTwo})`},
        {element:'background-color',   previous:'rgb(240, 240, 240)',new:`rgb(${PinkbackgroundColorOne})`},
        {element:'background-color',   previous:'rgb(234, 244, 251)',new:`rgb(${PinkbackgroundColorOne})`},
        {element:'background-color',   previous:'rgb(235, 235, 235)',new:`rgb(${PinkbackgroundColorThree})`},//kb
        {element:'background-color',   previous:'rgb(200, 226, 244)',new:`rgb(${PinkbackgroundColorThree})`},
        {element:'background-color',   previous:'rgb(237, 237, 237)',new:`rgb(${PinkbackgroundColorThree})`},
        {element:'background-color',   previous:'rgb(187, 220, 241)',new:`rgb(${PinkbackgroundColorOne})`},
        {element:'background-color',   previous:'rgb(236, 248, 232)',new:`rgb(${PinkbackgroundColorThree})`},
        {element:'background-color',   previous:'rgb(227, 227, 227)',new:`rgb(${PinkbackgroundColorOne})`},

        {element:'background-color',   previous:'rgb(237, 248, 233)',new:`rgb(${PinkbackgroundColorThree})`},
        {element:'background-color',   previous:'var(--ag-background-color,#fff)',new:`rgb(${PinkbackgroundColorTwo})`},//mc
        {element:'background-color',   previous:'var(--ag-header-background-color,#fff)',new:`rgb(${PinkbackgroundColorTwo})`},
        {element:'background-color',   previous:'var(--ag-odd-row-background-color,#fff)',new:`rgb(${PinkbackgroundColorTwo})`},
        {element:'background-color',   previous:'var(--ag-selected-row-background-color,#d8eaf7)',new:`rgb(${PinkbackgroundColorThree})`},
        {element:'background-color',   previous:'var(--ag-header-foreground-color, var(--ag-secondary-foreground-color, #999999))',new:`rgb(${PinkbackgroundColorTwo})`},
        {element:'background-color',   previous:'var(--ag-background-color, Pinkwhite)',new:`rgb(${PinkbackgroundColorTwo})`},
        {element:'background-color',   previous:'var(--ag-header-background-color, Pinkwhite)',new:`rgb(${PinkbackgroundColorTwo})`},
        {element:'background-color',   previous:'var(--ag-odd-row-background-color, Pinkwhite)',new:`rgb(${PinkbackgroundColorTwo})`},
        {element:'background-color',   previous:'var(--ag-selected-row-background-color, #d8eaf7)',new:`rgb(${PinkbackgroundColorThree})`},
        {element:'background-color',   previous:'rgb(252, 245, 232)',new:`rgb(${PinkbackgroundColorFour})`},
        {element:'box-shadow',         previous:'rgb(230, 230, 230) -1px 0px inset, rgb(230, 230, 230) 0px 1px inset, rgb(230, 230, 230) 0px -1px inset',new:`none`},

        {element:'background-color',   previous:'rgb(252, 246, 232)',new:`rgb(${PinkbackgroundColorFour})`},
        {element:'background-color',   previous:'rgb(217, 235, 247)',new:`rgb(${PinkbackgroundColorThree})`},
        {element:'background-color',   previous:'rgb(230, 230, 230)',new:`rgb(${PinkbackgroundColorThree})`},
        {element:'background-color',   previous:'rgb(252, 239, 237)',new:`rgb(${PinkbackgroundColorFour})`},
        {element:'background-color',   previous:'rgb(247, 247, 247)',new:`rgb(${PinkbackgroundColorTwo})`},
        {element:'background-color',   previous:'rgb(216, 234, 247)',new:`rgb(${PinkbackgroundColorThree})`},
        {element:'background-color',   previous:'rgb(242, 242, 242)',new:`rgb(${PinkbackgroundColorThree})`},
        {element:'background-color',   previous:'rgb(204, 204, 204)',new:`rgb(${PinkbackgroundColorOne})`},
        {element:'background-color',   previous:'rgb(245, 245, 245)',new:`rgb(${PinkbackgroundColorOne})`},
        {element:'background-color',   previous:'rgb(204, 228, 245)',new:`rgb(${PinkbackgroundColorOne})`},
        {element:'background-color',   previous:'rgb(254, 247, 246)',new:`rgb(${PinkbackgroundColorFour})`},
        {element:'background-color',   previous:'rgb(240, 211, 153)',new:`rgb(${PinkbackgroundColorFive})`},
        {element:'background-color',   previous:'rgba(255, 255, 255, 0.9)',new:`rgba(${PinkbackgroundColorTwo}, 0.9)`},//PinkbackgroundColorTwo
        {element:'background-image',   previous:'linear-gradient(rgb(255, 255, 255), rgb(240, 240, 240))',new:`linear-gradient(rgb(${PinkborderColor}), rgb(${PinkbackgroundColorOne}))`},//
        {element:'background-image',   previous:'linear-gradient(rgb(204, 204, 204), rgb(230, 230, 230))',new:`linear-gradient(rgb(${PinkborderColor}), rgb(${PinkbackgroundColorOne}))`},//
        {element:'background',         previous:'linear-gradient(rgb(240, 240, 240), rgb(230, 230, 230))',new:`linear-gradient(rgb(${PinkborderColor}), rgb(${PinkbackgroundColorOne}))`},//
        {element:'background-color',   previous:'rgba(217, 235, 247, 0.8)',new:`rgba(${PinkbackgroundColorThree}, 0.8)`},
        {element:'color',              previous:'rgb(77, 77, 77)',new:`rgb(${PinkcolorColorTwo})`},
        
        {element:'color',              previous:'rgb(85, 85, 85)',new:`rgb(${PinkcolorColorTwo})`},
        {element:'color',              previous:'rgb(17, 79, 120)',new:`rgb(${PinkcolorColorFour})`},
        {element:'color',              previous:'rgb(119, 0, 136)',new:`rgb(${PinkcolorCodeKBOne})`},
        {element:'color',              previous:'rgb(170, 17, 17)',new:`rgb(${PinkcolorCodeKBTwo})`},
        {element:'color',              previous:'rgb(0, 0, 0)',new:`rgb(${Pinkwhite})`},
        {element:'color',              previous:'inherit',new:`rgb(${Pinkwhite}})`},

        {element:'color',              previous:'rgb(51, 51, 51)',new:`rgb(${Pinkwhite})`},
        {element:'color',              previous:'rgb(80, 80, 80)',new:`rgb(${Pinkwhite})`},
        {element:'color',              previous:'rgb(204, 204, 204)',new:`rgb(${PinkcolorColorTwo})`},
        {element:'color',              previous:'rgb(128, 128, 128)',new:`rgb(${PinkcolorColorTwo})`},
        {element:'fill',               previous:'rgb(51, 51, 51)',new:`rgb(${PinkcolorColorTwo})`},
        {element:'border-color',       previous:'rgba(217, 235, 247, 0.8)',new:`rgba(${PinkbackgroundColorThree}, 0.8)`},

        {element:'border-bottom-color',previous:'rgb(240, 211, 153)',new:`rgba(${PinkbackgroundColorFour})`},
        {element:'border-left-color',  previous:'rgb(240, 211, 153)',new:`rgba(${PinkbackgroundColorFour})`},
        {element:'border-right-color', previous:'rgb(240, 211, 153)',new:`rgba(${PinkbackgroundColorFour})`},
        {element:'border-top-color',   previous:'rgb(240, 211, 153)',new:`rgba(${PinkbackgroundColorFour})`},

        {element:'border-color',       previous:'rgb(172, 210, 236)',new:`rgba(${PinkborderColor})`},
        {element:'border-color',       previous:'rgb(240, 240, 240)',new:`rgba(${PinkborderColor})`},

        {element:'border-bottom-color',previous:'rgb(240, 240, 240)',new:`rgba(${PinkborderColor})`},
        {element:'border-left-color',  previous:'rgb(240, 240, 240)',new:`rgba(${PinkborderColor})`},
        {element:'border-right-color', previous:'rgb(240, 240, 240)',new:`rgba(${PinkborderColor})`},
        {element:'border-top-color',   previous:'rgb(240, 240, 240)',new:`rgba(${PinkborderColor})`},

        {element:'border-bottom-color',previous:'rgb(180, 223, 165)',new:`rgba(${PinkborderColor})`},
        {element:'border-left-color',  previous:'rgb(180, 223, 165)',new:`rgba(${PinkborderColor})`},
        {element:'border-right-color', previous:'rgb(180, 223, 165)',new:`rgba(${PinkborderColor})`},
        {element:'border-top-color',   previous:'rgb(180, 223, 165)',new:`rgba(${PinkborderColor})`},

        {element:'border-bottom-color',previous:'rgb(244, 184, 174)',new:`rgba(${PinkbackgroundColorFour})`},
        {element:'border-left-color',  previous:'rgb(244, 184, 174)',new:`rgba(${PinkbackgroundColorFour})`},
        {element:'border-right-color', previous:'rgb(244, 184, 174)',new:`rgba(${PinkbackgroundColorFour})`},
        {element:'border-top-color',   previous:'rgb(244, 184, 174)',new:`rgba(${PinkbackgroundColorFour})`},

        {element:'border-bottom-color',previous:'rgb(224, 224, 224)',new:`rgba(${PinkborderColor})`},//наводка на основные контейнеры
        {element:'border-left-color',  previous:'rgb(224, 224, 224)',new:`rgba(${PinkborderColor})`},
        {element:'border-right-color', previous:'rgb(224, 224, 224)',new:`rgba(${PinkborderColor})`},
        {element:'border-top-color',   previous:'rgb(224, 224, 224)',new:`rgba(${PinkborderColor})`},

        {element:'border-bottom-color',previous:'rgb(212, 212, 212)',new:`rgba(${PinkborderColor})`},
        {element:'border-left-color',  previous:'rgb(212, 212, 212)',new:`rgba(${PinkborderColor})`},
        {element:'border-right-color', previous:'rgb(212, 212, 212)',new:`rgba(${PinkborderColor})`},
        {element:'border-top-color',   previous:'rgb(212, 212, 212)',new:`rgba(${PinkborderColor})`},

        {element:'border-bottom-color',previous:'rgb(255, 255, 255)',new:`rgba(${PinkborderColor})`},
        {element:'border-left-color',  previous:'rgb(255, 255, 255)',new:`rgba(${PinkborderColor})`},
        {element:'border-right-color', previous:'rgb(255, 255, 255)',new:`rgba(${PinkborderColor})`},
        {element:'border-top-color',   previous:'rgb(255, 255, 255)',new:`rgba(${PinkborderColor})`},

        {element:'border-bottom-color',previous:'rgb(179, 179, 179)',new:`rgba(${PinkborderColor})`},
        {element:'border-left-color',  previous:'rgb(179, 179, 179)',new:`rgba(${PinkborderColor})`},
        {element:'border-right-color', previous:'rgb(179, 179, 179)',new:`rgba(${PinkborderColor})`},
        {element:'border-top-color',   previous:'rgb(179, 179, 179)',new:`rgba(${PinkborderColor})`},

        {element:'border-bottom-color',previous:'rgb(222, 222, 222)',new:`rgba(${PinkborderColor})`},
        {element:'border-left-color',  previous:'rgb(222, 222, 222)',new:`rgba(${PinkborderColor})`},
        {element:'border-right-color', previous:'rgb(222, 222, 222)',new:`rgba(${PinkborderColor})`},
        {element:'border-top-color',   previous:'rgb(222, 222, 222)',new:`rgba(${PinkborderColor})`},

        {element:'border-bottom-color',previous:'rgb(230, 230, 230)',new:`rgba(${PinkborderColor})`},
        {element:'border-left-color',  previous:'rgb(230, 230, 230)',new:`rgba(${PinkborderColor})`},
        {element:'border-right-color', previous:'rgb(230, 230, 230)',new:`rgba(${PinkborderColor})`},
        {element:'border-top-color',   previous:'rgb(230, 230, 230)',new:`rgba(${PinkborderColor})`},

        {element:'border-bottom-color',previous:'rgb(177, 177, 177)',new:`rgba(${PinkborderColor})`},
        {element:'border-left-color',  previous:'rgb(177, 177, 177)',new:`rgba(${PinkborderColor})`},
        {element:'border-right-color', previous:'rgb(177, 177, 177)',new:`rgba(${PinkborderColor})`},
        {element:'border-top-color',   previous:'rgb(177, 177, 177)',new:`rgba(${PinkborderColor})`},

        {element:'border-bottom-color',previous:'rgb(204, 204, 204)',new:`rgba(${PinkborderColor})`},
        {element:'border-left-color',  previous:'rgb(204, 204, 204)',new:`rgba(${PinkborderColor})`},
        {element:'border-right-color', previous:'rgb(204, 204, 204)',new:`rgba(${PinkborderColor})`},
        {element:'border-top-color',   previous:'rgb(204, 204, 204)',new:`rgba(${PinkborderColor})`},

        {element:'border-bottom-color',previous:'rgb(240, 212, 155)',new:`rgba(${PinkbackgroundColorFive})`},//mc
        {element:'border-left-color',  previous:'rgb(240, 212, 155)',new:`rgba(${PinkbackgroundColorFive})`},
        {element:'border-right-color', previous:'rgb(240, 212, 155)',new:`rgba(${PinkbackgroundColorFive})`},
        {element:'border-top-color',   previous:'rgb(240, 212, 155)',new:`rgba(${PinkbackgroundColorFive})`},
    ])
        Core.RulesChanger()
        Core.NewRule([
            {selector:`body {
                color: rgb(${Pinkwhite})
            }`},
            {selector:`::-webkit-scrollbar {
                width: 10px;
                height: 10px;
                box-shadow: inset 1px 1px #0000001f;
                -webkit-transition: all .5s cubic-bezier(.35,0,.25,1);
                transition: all .5s cubic-bezier(.35,0,.25,1);
                background-color: rgb(${PinkbackgroundColorThree})
            }`},
            {selector:`::-webkit-scrollbar:hover {
                box-shadow: inset 1px 1px #0000000e,inset 0 -1px #0000000a;
                background-color: rgb(${PinkcolorColorOne})
            }`},
            {selector:`::-webkit-scrollbar-button {
                display: none
            }`},
            {selector:`::-webkit-scrollbar-corner {
                background-color: transparent
            }`},
            {selector:`::-webkit-scrollbar-thumb {
                background-color: rgb(${PinkborderColor});
                box-shadow: inset 1px 1px #0000000e,inset 0 -1px #00000016;
                -webkit-transition: all .5s cubic-bezier(.35,0,.25,1);
                transition: all .5s cubic-bezier(.35,0,.25,1)
            }`}
        ])
        Core.RulesChangerCallBack([
            {selector:'text', element:'fill', new:`rgb(${PinkcolorColorTwo})`,tagname:true},
            {selector:'text', element:'fill', new:`rgb(${PinkcolorColorTwo})`,tagname:true, iframe:true},
            {selector:'ui-menu ui-widget ui-widget-content ui-autocomplete ui-front', element:'background', new:`rgb(${PinkbackgroundColorTwo})`},
            {selector:'ui-menu ui-widget ui-widget-content ui-autocomplete ui-front', element:'color', new:`rgb(${PinkcolorColorTwo})`},
            {selector:'highcharts-background', element:'fill', new:`rgb(${PinkbackgroundColorTwo})`},
            {selector:'highcharts-background', element:'fill', new:`rgb(${PinkbackgroundColorTwo})`, iframe:true},
            {selector:'highcharts-text-outline', element:'stroke', new:`rgb(${PinkbackgroundColorTwo})`},
            {selector:'highcharts-text-outline', element:'stroke', new:`rgb(${PinkbackgroundColorTwo})`, iframe:true},
            {selector:'mc-body content-container__without-images', element:'color', new:`rgb(${PinkcolorColorTwo})`,iframe:true},
        ])
}
