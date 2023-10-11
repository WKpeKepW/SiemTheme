//Как вариант либо удалять и вставлять свои правила везде, либо искать все цвета во всех селекторах и менять их

// class NewCoreClass {
//     Timer = 50
//     TimeOut = 10000
//     ArrStyles = null
//     constructor(arrStyles,timeOut = null,timer = null){//получаем массив стилей на изменение
//         //alert(ArrStyles)
//         //alert(this.ArrStyles)
//         this.ArrStyles = arrStyles
//         if(timer)
//             this.Timer = timer
//         if(timeOut == 0 || timer != null)
//             this.TimeOut = timeOut
//     }
                    
//     //Обьект массива может состоять из selector,attr,value,iframe,loop,timeoutloop

//     StylesInterval(arrStyles = this.ArrStyles) {//возможно стоит изменять не каждый тик а только тогда когда на странице что то происходит, но для этого нужно разобраться с событиями
//         let timeOut = 0
//         let interval = setInterval(()=>{//интервал в котором изменяються все условия
//             //console.log(this.Timer)
//             arrStyles.forEach((e, index) => {//проходимся по списку стилей для изменения

//                 if(e.selector != null && e.iframe == null)
//                     //console.log(e.iframe)
//                     document.querySelectorAll(e.selector).forEach(elem => elem.style[e.attr] = e.value)
//                     //$(e.selector).css(e.attr,e.value)
//                 else if(e.selector != null && e.iframe != null)
//                     document.querySelector(e.iframe).contentWindow.document.querySelectorAll(e.selector).forEach(elem => elem.style[e.attr] = e.value)
//                     //$(e.iframe).contents().find('*').find(e.selector).css(e.attr,e.value)
//                 else
//                     throw new Error('Interval newCore error')

//                 //удаление из массива селекторов
//                 if(!e.loop)//если стиль нужно изменить один раз удаляем его из списка стилей на изменение
//                     arrStyles.splice(index, 1)

//                 else if(e.timeoutloop && e.timeoutloop <= timeOut) //если это цикл и у него есть таймаут то удаляем селектор на изменение из массива
//                     arrStyles.splice(index, 1)

//             });
//                 if (this.TimeOut != 0 && timeOut >= this.TimeOut){
//                     console.log('TimeOut:StylesInterval')
//                     clearInterval(interval)
//                 }
//                 timeOut+=this.Timer//переполнение типа данных мб
//         },this.Timer)
//     }

//     NewRule(arrSelectors){
//         arrSelectors.forEach((e)=>{
//             document.styleSheets[0].insertRule(e.selector)
//             if(e.iframe)
//             document.querySelector(e.iframe).contentWindow.document.styleSheets[0].insertRule(e.selector)
//         })
//     }
// }

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
//проверять на цвета цеклично все селекторы, и в случае если нужный цвет в этом селекторе, сохранять содержимое, удалять и менять background и добавлять свойство того что это кастомный селектор чтобы цикл его пропускал

// function eventHandler(){

// }

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
                    //if(styles[j].selectorText == '.mc-btn-default, .mc-btn_gray')//debugg
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
                // document.querySelectorAll('iframe').forEach((e)=>{
                //     for (let i = 0, sheets = e.contentWindow.document.styleSheets; i<sheets.length;i++){
                //             for(let j = 0, styles = sheets[i].cssRules; j<styles.length;j++){
                //                 if(!('style' in styles[j]))
                //                     continue
                //                 arr.forEach(e => {
                //                     if(styles[j].style[e.element] == e.previous)
                //                         styles[j].style[e.element] = e.new
                //                 });
                //             }
                //         }
                //})
                
             return true
            }
        },this.Timer,this.TimeOut)
    }
    RulesChangerCallBack(arr, timer = this.Timer){
        console.log('RulesChangerCallBack:start')
        let interval = setInterval(()=>{
            arr.forEach((e,i) => {
                if(document.getElementsByClassName(e.selector).length)
                    for(let i = 0; i<document.getElementsByClassName(e.selector).length;i++)
                            document.getElementsByClassName(e.selector)[i].style[e.element] = e.new
            });
        },timer)
        if(document.querySelector('iframe')){
            let interval = setInterval(()=>{
                arr.forEach((e) => {
                    if(document.querySelector('iframe').contentWindow.document.getElementsByClassName(e.selector).length)
                        for(let i = 0; i<document.querySelector('iframe').contentWindow.document.getElementsByClassName(e.selector).length;i++)
                            document.querySelector('iframe').contentWindow.document.getElementsByClassName(e.selector)[i].style[e.element] = e.new
                });
            },this.Timer,this.TimeOut)
        }
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


// function RulesChanger(arr, iframe = null){
//     for (let i = 0, sheets = document.styleSheets; i<sheets.length;i++){
//         for(let j = 0, styles = sheets[i].cssRules; j<styles.length;j++){
//             if(!('style' in styles[j]))
//                 continue
//             arr.forEach(e => {
//                 //if(styles[j].selectorText == '.mc-btn-default, .mc-btn_gray')//debugg
//                 if(styles[j].style[e.element] == e.previous)
//                     styles[j].style[e.element] = e.new
//             });
//         }
//     }
//     if(iframe){
//         for (let i = 0, sheets = document.querySelector(iframe).contentWindow.document.styleSheets; i<sheets.length;i++){
//             for(let j = 0, styles = sheets[i].cssRules; j<styles.length;j++){
//                 if(!('style' in styles[j]))
//                     continue
//                 arr.forEach(e => {
//                     //if(styles[j].selectorText == '.mc-btn-default, .mc-btn_gray')//debugg
//                     if(styles[j].style[e.element] == e.previous)
//                         styles[j].style[e.element] = e.new
//                 });
//             }
//         }
//     }
// }
// function RulesChangerCallBack(iframe = null, timer = this.Timer, arr = this.ArrStyles){
//     console.log('RulesChangerCallBack:start')
//     let interval = setInterval(()=>{
//         arr.forEach((e,i) => {
//             if(document.getElementsByClassName(e.selector).length)
//                 for(let i = 0; i<document.getElementsByClassName(e.selector).length;i++)
//                         document.getElementsByClassName(e.selector)[i].style[e.element] = e.new
//         });
//     },timer)
//     if(iframe){
//         let interval = setInterval(()=>{
//             arr.forEach((e,i) => {
//                 if(document.querySelector(iframe).contentWindow.document.getElementsByClassName(e.selector).length)
//                     for(let i = 0; i<document.querySelector(iframe).contentWindow.document.getElementsByClassName(e.selector).length;i++)
//                         document.querySelector(iframe).contentWindow.document.getElementsByClassName(e.selector)[i].style[e.element] = e.new
//             });
//         },timer)
//     }
// }

// function NewRule(arrSelectors, iframe = null){
//     arrSelectors.forEach((e)=>{
//         document.styleSheets[0].insertRule(e.selector)
//         if(iframe)
//         document.querySelector(iframe).contentWindow.document.styleSheets[0].insertRule(e.selector)
//     })
// }