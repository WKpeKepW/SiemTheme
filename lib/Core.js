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
        for (let i = 0, sheets = document.styleSheets; i<sheets.length;i++){
            for(let j = 0, styles = sheets[i].cssRules; j<styles.length;j++){
                if(!('style' in styles[j]))
                    continue
                arr.forEach(e => {
                    if(styles[j].style[e.element] == e.previous)
                        styles[j].style[e.element] = e.new
                });
            }
        }
        checkReturn(()=>{
            
            if(document.querySelector('iframe')?.contentWindow.document.styleSheets[this.IframeSheetInitialize]){
                for (let i = 0, sheets = document.querySelector('iframe').contentWindow.document.styleSheets; i<sheets.length;i++){
                    for(let j = 0, styles = sheets[i].cssRules; j<styles.length;j++){
                        if(!('style' in styles[j]))
                            continue
                        arr.forEach(e => {
                            if(styles[j].style[e.element] == e.previous)
                                styles[j].style[e.element] = e.new
                        });
                    }
                }
             return true
            }
        },this.Timer,this.TimeOut)
    }
    RulesChangerCallBack(arr, timer = this.Timer){
        console.log('RulesChangerCallBack:start')
        setInterval(()=>{
            arr.forEach((e)=>{
                if(!e.iframe)
                    for(let i = 0; i < document.getElementsByClassName(e.selector).length; i++)
                        document.getElementsByClassName(e.selector)[i].style[e.element] = e.new
                if(!e.iframe && e.tagname)
                    for(let i = 0; i < document.getElementsByTagName(e.selector).length; i++)
                        document.getElementsByTagName(e.selector)[i].style[e.element] = e.new
                    
                else if(e.iframe && e.tagname && document.querySelector('iframe')?.contentWindow.document.getElementsByTagName(e.selector))
                    for(let i = 0; i < document.querySelector('iframe').contentWindow.document.getElementsByTagName(e.selector).length; i++)
                        document.querySelector('iframe').contentWindow.document.getElementsByTagName(e.selector)[i].style[e.element] = e.new
                
                else if(e.iframe && document.querySelector('iframe')?.contentWindow.document.getElementsByClassName(e.selector))
                        for(let i = 0; i < document.querySelector('iframe').contentWindow.document.getElementsByClassName(e.selector).length; i++)
                            document.querySelector('iframe').contentWindow.document.getElementsByClassName(e.selector)[i].style[e.element] = e.new
            })
        },timer)
    }
    NewRule(arrSelectors){
        arrSelectors.forEach((e)=>{
            document.styleSheets[0].insertRule(e.selector)
            checkReturn(()=>{
                if(document.querySelector('iframe')?.contentWindow.document.styleSheets[0]){
                    document.querySelector('iframe').contentWindow.document.styleSheets[0].insertRule(e.selector)
                    return true
                }
            })
        },this.Timer,this.TimeOut)
    }
}