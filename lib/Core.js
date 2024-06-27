function checkReturn(func, timer, timeOutLoop){
    let timeOut = 0
    let Interval = setInterval(() =>{
        out = func()//должен получить true чтобы завершится
        if(out) {
            clearInterval(Interval)
        }
        else if (timeOut >= timeOutLoop){
            console.log("TimeOut:checkReturn")
            clearInterval(Interval)
        }
        else
            timeOut+=timer
    }, timer)
}

class CoreClass{
    ArrayRules
    Timer
    TimeOut
    IframeSheetInitialize
    constructor(arr,timer = 100, timeOut = 10000, iframeSheetInitialize = 3){
        this.ArrayRules = arr
        this.Timer = timer
        this.TimeOut = timeOut
        this.IframeSheetInitialize = iframeSheetInitialize//Магическое число нужно чтобы iframe успел инициализироваться
    }
    RulesChanger(arr = this.ArrayRules){

        function infuncChanger(sheet) {
            for(let j = 0, styles = sheet.cssRules; j<styles.length;j++){
                if(!('style' in styles[j]))
                    continue
                arr.forEach(e => {
                    if(styles[j].style[e.element] == e.previous)
                        styles[j].style[e.element] = e.new
                });
            }
        }

        //обычные элементы
        for (let i = 0, sheets = document.styleSheets; i<sheets.length;i++){
            infuncChanger(sheets[i])
        }

        //iframe
        checkReturn(()=>{
            let iframeready=0
            let len = document.querySelectorAll('iframe').length
            document.querySelectorAll('iframe').forEach(doc=>{
                if(doc?.contentWindow.document.styleSheets[this.IframeSheetInitialize]){
                    iframeready++
                    for (let i = 0, sheets = doc.contentWindow.document.styleSheets; i<sheets.length;i++)
                        infuncChanger(sheets[i])
                    if(iframeready>=len)
                        return true
                    }
                })
        //изменили и закончили
            
        },this.Timer,this.TimeOut)

        //shadowroot
        checkReturn(()=>{
            if(document.querySelector('legacy-events-page')?.shadowRoot){
                for (let i = 0, sheets = document.querySelector('legacy-events-page').shadowRoot.styleSheets; i<sheets.length;i++){
                    infuncChanger(sheets[i])
                }
                return true //изменили и закончили
            }
        },this.Timer,this.TimeOut)   
    }

    RulesChangerCallBack(arr, timer = this.Timer){
        console.log('RulesChangerCallBack:start')
        setInterval(()=>{
            arr.forEach((e)=>{
                //обычные элементы
                if(!e.iframe && !e.shadow && e.tagname)
                    for(let i = 0; i < document.getElementsByTagName(e.selector).length; i++)
                        document.getElementsByTagName(e.selector)[i].style[e.element] = e.new

                else if(!e.iframe && !e.shadow)
                    for(let i = 0; i < document.getElementsByClassName(e.selector).length; i++)
                        document.getElementsByClassName(e.selector)[i].style[e.element] = e.new
                
                //iframe
                document.querySelectorAll('iframe').forEach(doc=>{
                if(e.iframe && e.tagname && doc.contentWindow.document.getElementsByTagName(e.selector))
                {
                    for(let i = 0; i < doc.contentWindow.document.getElementsByTagName(e.selector).length; i++)
                        doc.contentWindow.document.getElementsByTagName(e.selector)[i].style[e.element] = e.new
                }

                else if(e.iframe && doc.contentWindow.document.getElementsByClassName(e.selector))
                    {
                        for(let i = 0; i < doc.contentWindow.document.getElementsByClassName(e.selector).length; i++)
                            doc.contentWindow.document.getElementsByClassName(e.selector)[i].style[e.element] = e.new
                    }
                })

                //shadowroot
                if(document.querySelector('legacy-events-page')?.shadowRoot)
                for(let i = 0; i < document.querySelector('legacy-events-page').shadowRoot.children.length; i++){
                    if(e.shadow && e.tagname && document.querySelector('legacy-events-page').shadowRoot.children[i].getElementsByTagName(e.selector))
                        for(let i = 0; i < document.querySelector('legacy-events-page').shadowRoot.children[i].getElementsByTagName(e.selector).length; i++)
                            document.querySelector('legacy-events-page').shadowRoot.children[i].getElementsByTagName(e.selector)[i].style[e.element] = e.new
                
                    else if(e.shadow && document.querySelector('legacy-events-page').shadowRoot.children[i].getElementsByClassName(e.selector))
                        for(let i = 0; i < document.querySelector('legacy-events-page').shadowRoot.children[i].getElementsByClassName(e.selector).length; i++)
                            document.querySelector('legacy-events-page').shadowRoot.children[i].getElementsByClassName(e.selector)[i].style[e.element] = e.new
                }
            })
        },timer)
    }
    NewRule(arrSelectors){
        arrSelectors.forEach((e)=>{
            //обычные элементы
            document.styleSheets[0].insertRule(e.selector)

            //iframe
            checkReturn(()=>{
                    if(document.querySelectorAll('iframe').length){
                        document.querySelectorAll('iframe').forEach(elem =>{
                            elem.contentWindow.document.styleSheets[0].insertRule(e.selector)//не робит на странице чеклист доля просроченных уязвимостей на сибири
                        })
                        return true
                    }
                },this.Timer,this.TimeOut)

            //shadowroot
            checkReturn(()=>{
                if(document.querySelector('legacy-events-page')?.shadowRoot){
                    document.querySelector('legacy-events-page').shadowRoot.styleSheets[0].insertRule(e.selector)
                    return true
                }
            },this.Timer,this.TimeOut)
        })
    }
}