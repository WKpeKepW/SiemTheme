function Pink(version){
    const backgroundColorOne = '136, 60, 143'//darkgray
    const backgroundColorTwo = '252, 210, 237'//Pinkwhitegray
    const backgroundColorThree = '78, 34, 82'//blue
    const backgroundColorFour = '173, 61, 154'//yellow
    const backgroundColorFive = '199, 0, 179'//active four
    const borderColor = 'transparent'//Pinkwhitegrayx2
    const colorColorOne = '0, 169, 191'//bluetext
    const colorColorTwo = '0, 0, 0'//darkPinkwhite
    const colorColorThree = '255, 255, 255'//gray
    const colorColorFour = '2, 199, 224'//activeBlue
    const colorCodeKBOne = '172, 0, 196'//code in kb purple
    const colorCodeKBTwo = '224, 0, 20'//code in kb red
    const white = '255, 255, 255'//Pinkwhite
    let Core = new CoreClass([
        {element:'background-image',   previous:'url(\"/assets/images/navbar-icon.svg\")',new:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFxEAABcRAcom8z8AAAM4SURBVFhHxZddSJNRGMf/583ED2RZzTRXIiUlGasMoggimVEaQTmULN1Fd9VFWayLLrrJCAcRSAhJFJhNS2ujpNDCD6ISGkGKfRiK2Ycfy2aaYzr39p6z45jbtNfa9AcPez4G/2fnfc55zwgkKlQpBwnE4yBEvQhYRnOhwgXRJoK0AaTsaO/HanI7MeUQEVDL6/PG/V9DYu3wjyMCiPTL55kHbnG6+icEArLRnZ4fqHiNW5ySJjUgxvIg5PiIUwSBOyHHNPITPuKMoDUQFh2N5Pw8Zsrt23jWDRW/Z7PyaDpBayB8aSzSzuuZqQ5k8yxgnkWcErQG/NZWgorfnUWcErIZkCNOIXdUa8dFQhbz2INiQyoiV8Qxf/BlK8IVCqzctweR8fH4/bkX3x7XwzE0xOqU6FUqZDwxM7/tVSuull9nPkUURdTU1PBoGiMzNrClpBiJ2XuZ311hRFJeDoTwcBZTnGNjaC8uQa/pIYu9G/BlcnISsbEBd/uIrEeQXHB4mjglLCoKmy5eQIJmN8/8G7IacE040X7JgKeabLTk5KOvsdldIASpZ0+xzxf2UXdOwmKxQKvVeiw3N5dX/JHVwKcbt9BdWQX79z4Mv/8Ay+lzGPvyldXo0jcvV0zbaoODg6ivr/dYQ0MDr/gjq4G+Z03cc+OamEB/y3MeSQ0uieHe3JG3DaUp9sMr53Q64XK5eDQ3ZDXgO2gkLAxxO3fwCOjp6WFNTKFUKrn3d2Q1sOaYTtqGWkTEKaFYvw5br1xGdNJqVuvs7GQNWK1WOBwOlktPT4fBYEBWVhYyMzOh0WhYPhCyzoHZKCwshMlkYn5paSl0Oh3zvfnvc6C7shqu8XEeubHb7SgqKvKIU/R6PaqqquY0D7JWoHH/IdRZ+xEhzUJCQgK6urpgNpsxMDDA6r7Q76jVasTExLDZoEexd6NeyDuKz+zKQPmb18wPMvIeQdPoMPeCj7xzIITM+Ag6NqdhKDGe+UajETabjflBJvAMPJIuE0YZl4kg4D8Dkrg4T+IMwQXiudZw8UDXu1AhSn9M8JZ6CyBOeSdAEMvrFkacUjYlWiDZScnSJAv11qTv8Q7JrgG4+Qcp4leLMYeLXQAAAABJRU5ErkJggg==')"},
        {element:'background-image',   previous:'url(\"images/navbar-icon.png\")',new:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFxEAABcRAcom8z8AAAM4SURBVFhHxZddSJNRGMf/583ED2RZzTRXIiUlGasMoggimVEaQTmULN1Fd9VFWayLLrrJCAcRSAhJFJhNS2ujpNDCD6ISGkGKfRiK2Ycfy2aaYzr39p6z45jbtNfa9AcPez4G/2fnfc55zwgkKlQpBwnE4yBEvQhYRnOhwgXRJoK0AaTsaO/HanI7MeUQEVDL6/PG/V9DYu3wjyMCiPTL55kHbnG6+icEArLRnZ4fqHiNW5ySJjUgxvIg5PiIUwSBOyHHNPITPuKMoDUQFh2N5Pw8Zsrt23jWDRW/Z7PyaDpBayB8aSzSzuuZqQ5k8yxgnkWcErQG/NZWgorfnUWcErIZkCNOIXdUa8dFQhbz2INiQyoiV8Qxf/BlK8IVCqzctweR8fH4/bkX3x7XwzE0xOqU6FUqZDwxM7/tVSuull9nPkUURdTU1PBoGiMzNrClpBiJ2XuZ311hRFJeDoTwcBZTnGNjaC8uQa/pIYu9G/BlcnISsbEBd/uIrEeQXHB4mjglLCoKmy5eQIJmN8/8G7IacE040X7JgKeabLTk5KOvsdldIASpZ0+xzxf2UXdOwmKxQKvVeiw3N5dX/JHVwKcbt9BdWQX79z4Mv/8Ay+lzGPvyldXo0jcvV0zbaoODg6ivr/dYQ0MDr/gjq4G+Z03cc+OamEB/y3MeSQ0uieHe3JG3DaUp9sMr53Q64XK5eDQ3ZDXgO2gkLAxxO3fwCOjp6WFNTKFUKrn3d2Q1sOaYTtqGWkTEKaFYvw5br1xGdNJqVuvs7GQNWK1WOBwOlktPT4fBYEBWVhYyMzOh0WhYPhCyzoHZKCwshMlkYn5paSl0Oh3zvfnvc6C7shqu8XEeubHb7SgqKvKIU/R6PaqqquY0D7JWoHH/IdRZ+xEhzUJCQgK6urpgNpsxMDDA6r7Q76jVasTExLDZoEexd6NeyDuKz+zKQPmb18wPMvIeQdPoMPeCj7xzIITM+Ag6NqdhKDGe+UajETabjflBJvAMPJIuE0YZl4kg4D8Dkrg4T+IMwQXiudZw8UDXu1AhSn9M8JZ6CyBOeSdAEMvrFkacUjYlWiDZScnSJAv11qTv8Q7JrgG4+Qcp4leLMYeLXQAAAABJRU5ErkJggg==')"},
        {element:'background-color',   previous:'rgb(255, 255, 255)',new:`rgb(${backgroundColorTwo})`},
        {element:'background-color',   previous:'rgb(240, 240, 240)',new:`rgb(${backgroundColorOne})`},
        {element:'background-color',   previous:'rgb(234, 244, 251)',new:`rgb(${backgroundColorOne})`},
        {element:'background-color',   previous:'white',new:`rgb(${backgroundColorTwo})`},
        {element:'background',   previous:'linear-gradient(to right, rgb(240, 240, 240) 0%, rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0) 80%, rgb(240, 240, 240) 100%), url(\"/assets/images/login-bg.png\") 50% 40% repeat-x',new:`linear-gradient(to right, rgb(${backgroundColorOne}) 0%, rgba(${backgroundColorOne}, 0) 20%, rgba(${backgroundColorOne}, 0) 80%, rgb(${backgroundColorOne}) 100%), url(\"/assets/images/login-bg.png\") 50% 40% repeat-x`},
        
        {element:'background-color',   previous:'rgb(17, 78, 119)',new:`rgb(${backgroundColorOne})`},//pink
        {element:'background-color',   previous:'rgb(17, 79, 120)',new:`rgb(${backgroundColorOne})`},
        {element:'background-color',   previous:'rgb(32, 110, 162)',new:`rgb(${backgroundColorThree})`},
        {element:'background-color',   previous:'rgb(7, 48, 75)',new:`rgb(${backgroundColorThree})`},

        {element:'background-color',   previous:'rgb(252, 239, 236)',new:`rgb(${backgroundColorFour})`},
        {element:'background-color',   previous:'rgb(235, 244, 251)',new:`rgb(${backgroundColorThree})`},

        {element:'background-color',   previous:'rgb(235, 235, 235)',new:`rgb(${backgroundColorThree})`},//kb
        {element:'background-color',   previous:'rgb(200, 226, 244)',new:`rgb(${backgroundColorThree})`},
        {element:'background-color',   previous:'rgb(237, 237, 237)',new:`rgb(${backgroundColorThree})`},
        {element:'background-color',   previous:'rgb(187, 220, 241)',new:`rgb(${backgroundColorOne})`},
        {element:'background-color',   previous:'rgb(236, 248, 232)',new:`rgb(${backgroundColorThree})`},
        {element:'background-color',   previous:'rgb(227, 227, 227)',new:`rgb(${backgroundColorOne})`},

        {element:'background-color',   previous:'rgb(237, 248, 233)',new:`rgb(${backgroundColorThree})`},
        {element:'background-color',   previous:'var(--ag-background-color,#fff)',new:`rgb(${backgroundColorTwo})`},//mc
        {element:'background-color',   previous:'var(--ag-header-background-color,#fff)',new:`rgb(${backgroundColorTwo})`},
        {element:'background-color',   previous:'var(--ag-odd-row-background-color,#fff)',new:`rgb(${backgroundColorTwo})`},
        {element:'background-color',   previous:'var(--ag-selected-row-background-color,#d8eaf7)',new:`rgb(${backgroundColorThree})`},
        {element:'background-color',   previous:'var(--ag-header-foreground-color, var(--ag-secondary-foreground-color, #999999))',new:`rgb(${backgroundColorTwo})`},
        {element:'background-color',   previous:'var(--ag-background-color, white)',new:`rgb(${backgroundColorTwo})`},
        {element:'background-color',   previous:'var(--ag-header-background-color, white)',new:`rgb(${backgroundColorTwo})`},
        {element:'background-color',   previous:'var(--ag-odd-row-background-color, white)',new:`rgb(${backgroundColorTwo})`},
        {element:'background-color',   previous:'var(--ag-selected-row-background-color, #d8eaf7)',new:`rgb(${backgroundColorThree})`},
        {element:'background-color',   previous:'rgb(252, 245, 232)',new:`rgb(${backgroundColorFour})`},
        {element:'box-shadow',         previous:'rgb(230, 230, 230) -1px 0px inset, rgb(230, 230, 230) 0px 1px inset, rgb(230, 230, 230) 0px -1px inset',new:`none`},

        {element:'background-color',   previous:'rgb(252, 246, 232)',new:`rgb(${backgroundColorFour})`},
        {element:'background-color',   previous:'rgb(217, 235, 247)',new:`rgb(${backgroundColorThree})`},
        {element:'background-color',   previous:'rgb(230, 230, 230)',new:`rgb(${backgroundColorThree})`},
        {element:'background-color',   previous:'rgb(252, 239, 237)',new:`rgb(${backgroundColorFour})`},
        {element:'background-color',   previous:'rgb(247, 247, 247)',new:`rgb(${backgroundColorTwo})`},
        {element:'background-color',   previous:'rgb(216, 234, 247)',new:`rgb(${backgroundColorThree})`},
        {element:'background-color',   previous:'rgb(242, 242, 242)',new:`rgb(${backgroundColorThree})`},
        {element:'background-color',   previous:'rgb(204, 204, 204)',new:`rgb(${backgroundColorOne})`},
        {element:'background-color',   previous:'rgb(245, 245, 245)',new:`rgb(${backgroundColorOne})`},
        {element:'background-color',   previous:'rgb(204, 228, 245)',new:`rgb(${backgroundColorOne})`},
        {element:'background-color',   previous:'rgb(254, 247, 246)',new:`rgb(${backgroundColorFour})`},
        {element:'background-color',   previous:'rgb(240, 211, 153)',new:`rgb(${backgroundColorFive})`},
        {element:'background-color',   previous:'rgba(255, 255, 255, 0.9)',new:`rgba(${backgroundColorTwo}, 0.9)`},//backgroundColorTwo
        {element:'background-image',   previous:'linear-gradient(rgb(255, 255, 255), rgb(240, 240, 240))',new:`linear-gradient(rgb(${borderColor}), rgb(${backgroundColorOne}))`},//
        {element:'background-image',   previous:'linear-gradient(rgb(204, 204, 204), rgb(230, 230, 230))',new:`linear-gradient(rgb(${borderColor}), rgb(${backgroundColorOne}))`},//
        {element:'background',         previous:'linear-gradient(rgb(240, 240, 240), rgb(230, 230, 230))',new:`linear-gradient(rgb(${borderColor}), rgb(${backgroundColorOne}))`},//
        {element:'background-color',   previous:'rgba(217, 235, 247, 0.8)',new:`rgba(${backgroundColorThree}, 0.8)`},
        {element:'color',              previous:'rgb(77, 77, 77)',new:`rgb(${colorColorTwo})`},
        
        // {element:'color',              previous:'rgb(85, 85, 85)',new:`rgb(${colorColorTwo})`},
        {element:'color',              previous:'rgb(17, 79, 120)',new:`rgb(${colorColorFour})`},
        {element:'color',              previous:'rgb(119, 0, 136)',new:`rgb(${colorCodeKBOne})`},
        {element:'color',              previous:'rgb(170, 17, 17)',new:`rgb(${colorCodeKBTwo})`},
        // {element:'color',              previous:'rgb(0, 0, 0)',new:`rgb(${white})`},
        // {element:'color',              previous:'inherit',new:`rgb(${white}})`},
        {element:'color',              previous:'rgb(51, 143, 204)',new:`rgb(${colorColorOne})`},//pink
        {element:'color',              previous:'rgb(153, 153, 153)',new:`rgb(200,200,200))`},
        {element:'color',              previous:'rgb(51, 51, 51)',new:`rgb(${white})`},//pink
        // {element:'color',              previous:'rgb(80, 80, 80)',new:`rgb(${white})`},
        // {element:'color',              previous:'rgb(204, 204, 204)',new:`rgb(${colorColorTwo})`},
        // {element:'color',              previous:'rgb(128, 128, 128)',new:`rgb(${colorColorTwo})`},
        {element:'border-color',       previous:'rgba(217, 235, 247, 0.8)',new:`rgba(${backgroundColorThree}, 0.8)`},

        {element:'border-bottom-color',previous:'rgb(240, 211, 153)',new:`rgba(${backgroundColorFour})`},
        {element:'border-left-color',  previous:'rgb(240, 211, 153)',new:`rgba(${backgroundColorFour})`},
        {element:'border-right-color', previous:'rgb(240, 211, 153)',new:`rgba(${backgroundColorFour})`},
        {element:'border-top-color',   previous:'rgb(240, 211, 153)',new:`rgba(${backgroundColorFour})`},

        {element:'border-color',       previous:'rgb(172, 210, 236)',new:`rgba(${borderColor})`},
        {element:'border-color',       previous:'rgb(240, 240, 240)',new:`rgba(${borderColor})`},

        {element:'border-bottom-color',previous:'rgb(240, 240, 240)',new:`rgba(${borderColor})`},
        {element:'border-left-color',  previous:'rgb(240, 240, 240)',new:`rgba(${borderColor})`},
        {element:'border-right-color', previous:'rgb(240, 240, 240)',new:`rgba(${borderColor})`},
        {element:'border-top-color',   previous:'rgb(240, 240, 240)',new:`rgba(${borderColor})`},

        {element:'border-bottom-color',previous:'rgb(180, 223, 165)',new:`rgba(${borderColor})`},
        {element:'border-left-color',  previous:'rgb(180, 223, 165)',new:`rgba(${borderColor})`},
        {element:'border-right-color', previous:'rgb(180, 223, 165)',new:`rgba(${borderColor})`},
        {element:'border-top-color',   previous:'rgb(180, 223, 165)',new:`rgba(${borderColor})`},

        {element:'border-bottom-color',previous:'rgb(244, 184, 174)',new:`rgba(${backgroundColorFour})`},
        {element:'border-left-color',  previous:'rgb(244, 184, 174)',new:`rgba(${backgroundColorFour})`},
        {element:'border-right-color', previous:'rgb(244, 184, 174)',new:`rgba(${backgroundColorFour})`},
        {element:'border-top-color',   previous:'rgb(244, 184, 174)',new:`rgba(${backgroundColorFour})`},

        {element:'border-bottom-color',previous:'rgb(224, 224, 224)',new:`rgba(${borderColor})`},//наводка на основные контейнеры
        {element:'border-left-color',  previous:'rgb(224, 224, 224)',new:`rgba(${borderColor})`},
        {element:'border-right-color', previous:'rgb(224, 224, 224)',new:`rgba(${borderColor})`},
        {element:'border-top-color',   previous:'rgb(224, 224, 224)',new:`rgba(${borderColor})`},

        {element:'border-bottom-color',previous:'rgb(212, 212, 212)',new:`rgba(${borderColor})`},
        {element:'border-left-color',  previous:'rgb(212, 212, 212)',new:`rgba(${borderColor})`},
        {element:'border-right-color', previous:'rgb(212, 212, 212)',new:`rgba(${borderColor})`},
        {element:'border-top-color',   previous:'rgb(212, 212, 212)',new:`rgba(${borderColor})`},

        {element:'border-bottom-color',previous:'rgb(255, 255, 255)',new:`rgba(${borderColor})`},
        {element:'border-left-color',  previous:'rgb(255, 255, 255)',new:`rgba(${borderColor})`},
        {element:'border-right-color', previous:'rgb(255, 255, 255)',new:`rgba(${borderColor})`},
        {element:'border-top-color',   previous:'rgb(255, 255, 255)',new:`rgba(${borderColor})`},

        {element:'border-bottom-color',previous:'rgb(179, 179, 179)',new:`rgba(${borderColor})`},
        {element:'border-left-color',  previous:'rgb(179, 179, 179)',new:`rgba(${borderColor})`},
        {element:'border-right-color', previous:'rgb(179, 179, 179)',new:`rgba(${borderColor})`},
        {element:'border-top-color',   previous:'rgb(179, 179, 179)',new:`rgba(${borderColor})`},

        {element:'border-bottom-color',previous:'rgb(222, 222, 222)',new:`rgba(${borderColor})`},
        {element:'border-left-color',  previous:'rgb(222, 222, 222)',new:`rgba(${borderColor})`},
        {element:'border-right-color', previous:'rgb(222, 222, 222)',new:`rgba(${borderColor})`},
        {element:'border-top-color',   previous:'rgb(222, 222, 222)',new:`rgba(${borderColor})`},

        {element:'border-bottom-color',previous:'rgb(230, 230, 230)',new:`rgba(${borderColor})`},
        {element:'border-left-color',  previous:'rgb(230, 230, 230)',new:`rgba(${borderColor})`},
        {element:'border-right-color', previous:'rgb(230, 230, 230)',new:`rgba(${borderColor})`},
        {element:'border-top-color',   previous:'rgb(230, 230, 230)',new:`rgba(${borderColor})`},

        {element:'border-bottom-color',previous:'rgb(177, 177, 177)',new:`rgba(${borderColor})`},
        {element:'border-left-color',  previous:'rgb(177, 177, 177)',new:`rgba(${borderColor})`},
        {element:'border-right-color', previous:'rgb(177, 177, 177)',new:`rgba(${borderColor})`},
        {element:'border-top-color',   previous:'rgb(177, 177, 177)',new:`rgba(${borderColor})`},

        {element:'border-bottom-color',previous:'rgb(204, 204, 204)',new:`rgba(${borderColor})`},
        {element:'border-left-color',  previous:'rgb(204, 204, 204)',new:`rgba(${borderColor})`},
        {element:'border-right-color', previous:'rgb(204, 204, 204)',new:`rgba(${borderColor})`},
        {element:'border-top-color',   previous:'rgb(204, 204, 204)',new:`rgba(${borderColor})`},

        {element:'border-bottom-color',previous:'rgb(240, 212, 155)',new:`rgba(${backgroundColorFive})`},//mc
        {element:'border-left-color',  previous:'rgb(240, 212, 155)',new:`rgba(${backgroundColorFive})`},
        {element:'border-right-color', previous:'rgb(240, 212, 155)',new:`rgba(${backgroundColorFive})`},
        {element:'border-top-color',   previous:'rgb(240, 212, 155)',new:`rgba(${backgroundColorFive})`},
    ])
        Core.RulesChanger()
        Core.NewRule([
            // {selector:`body {
            //     color: rgb(${white})
            // }`},
            {selector:`::-webkit-scrollbar {
                width: 10px;
                height: 10px;
                box-shadow: inset 1px 1px #0000001f;
                -webkit-transition: all .5s cubic-bezier(.35,0,.25,1);
                transition: all .5s cubic-bezier(.35,0,.25,1);
                background-color: rgb(${backgroundColorTwo})
            }`},
            {selector:`::-webkit-scrollbar:hover {
                box-shadow: inset 1px 1px #0000000e,inset 0 -1px #0000000a;
                background-color: rgb(${backgroundColorTwo})
            }`},
            {selector:`::-webkit-scrollbar-button {
                display: none
            }`},
            {selector:`::-webkit-scrollbar-corner {
                background-color: transparent
            }`},
            {selector:`::-webkit-scrollbar-thumb {
                background-color: rgb(${backgroundColorFour});
                box-shadow: inset 1px 1px #0000000e,inset 0 -1px #00000016;
                -webkit-transition: all .5s cubic-bezier(.35,0,.25,1);
                transition: all .5s cubic-bezier(.35,0,.25,1)
            }`}
        ])
        Core.RulesChangerCallBack([
            {selector:'body', element:'color', new:`rgb(${white})`,tagname:true, iframe:true},
            {selector:'text', element:'fill', new:`rgb(${colorColorThree})`,tagname:true},
            {selector:'text', element:'fill', new:`rgb(${colorColorThree})`,tagname:true, iframe:true},
            {selector:'content-container', element:'color', new:`rgb(${white})`,tagname:true,iframe:true},
            {selector:'content-container', element:'color', new:`rgb(${white})`,tagname:true},
            {selector:'ui-menu ui-widget ui-widget-content ui-autocomplete ui-front', element:'background', new:`rgb(${backgroundColorTwo})`},
            {selector:'ui-menu ui-widget ui-widget-content ui-autocomplete ui-front', element:'color', new:`rgb(${colorColorTwo})`},
            {selector:'highcharts-background', element:'fill', new:`rgb(${backgroundColorTwo})`},
            {selector:'highcharts-background', element:'fill', new:`rgb(${backgroundColorTwo})`, iframe:true},
            {selector:'highcharts-text-outline', element:'stroke', new:`rgb(${backgroundColorTwo})`},
            {selector:'highcharts-text-outline', element:'stroke', new:`rgb(${backgroundColorTwo})`, iframe:true},
            {selector:'mc-body content-container__without-images', element:'color', new:`rgb(${colorColorTwo})`,iframe:true},
        ])
}
