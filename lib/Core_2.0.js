//Как вариант либо удалять и вставлять свои правила везде, либо искать все цвета во всех селекторах и менять их

class NewCoreClass {
    Timer = 50
    TimeOut = 10000
    ArrStyles = null
    constructor(arrStyles,timeOut = null,timer = null){//получаем массив стилей на изменение
        //alert(ArrStyles)
        //alert(this.ArrStyles)
        this.ArrStyles = arrStyles
        if(timer)
            this.Timer = timer
        if(timeOut == 0 || timer != null)
            this.TimeOut = timeOut
    }
                    
    //Обьект массива может состоять из selector,attr,value,iframe,loop,timeoutloop

    StylesInterval(arrStyles = this.ArrStyles) {//возможно стоит изменять не каждый тик а только тогда когда на странице что то происходит, но для этого нужно разобраться с событиями
        let timeOut = 0
        let interval = setInterval(()=>{//интервал в котором изменяються все условия
            //console.log(this.Timer)
            arrStyles.forEach((e, index) => {//проходимся по списку стилей для изменения

                if(e.selector != null && e.iframe == null)
                    //console.log(e.iframe)
                    document.querySelectorAll(e.selector).forEach(elem => elem.style[e.attr] = e.value)
                    //$(e.selector).css(e.attr,e.value)
                else if(e.selector != null && e.iframe != null)
                    document.querySelector(e.iframe).contentWindow.document.querySelectorAll(e.selector).forEach(elem => elem.style[e.attr] = e.value)
                    //$(e.iframe).contents().find('*').find(e.selector).css(e.attr,e.value)
                else
                    throw new Error('Interval newCore error')

                //удаление из массива селекторов
                if(!e.loop)//если стиль нужно изменить один раз удаляем его из списка стилей на изменение
                    arrStyles.splice(index, 1)

                else if(e.timeoutloop && e.timeoutloop <= timeOut) //если это цикл и у него есть таймаут то удаляем селектор на изменение из массива
                    arrStyles.splice(index, 1)

            });
                if (this.TimeOut != 0 && timeOut >= this.TimeOut){
                    console.log('TimeOut:StylesInterval')
                    clearInterval(interval)
                }
                timeOut+=this.Timer//переполнение типа данных мб
        },this.Timer)
    }

    NewRule(arrSelectors){
        arrSelectors.forEach((e)=>{
            document.styleSheets[0].insertRule(e.selector)
            if(e.iframe)
            document.querySelector(e.iframe).contentWindow.document.styleSheets[0].insertRule(e.selector)
        })
    }
}

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

// var all = document.getElementsByTagName("*");

// for (var i=0, max=all.length; i < max; i++) {
//  all[i].style.color = "red";
// }
// const background_color = 'background-color'
// const background_color_white = 'black'
// const background_color_Lightblue = 'black'

function RulesChanger(arr){
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
}
function RulesChangerCallBack(arr){
    console.log('RulesChangerCallBack:start')
    let interval = setInterval(()=>{
        arr.forEach((e,i) => {
            if(document.getElementsByClassName(e.selector).length)
                for(let i = 0; i<document.getElementsByClassName(e.selector).length;i++)
                        document.getElementsByClassName(e.selector)[i].style[e.element] = e.new
            // if(document.getElementsByClassName(e.selector).length){
            //     document.getElementsByClassName(e.selector)[0].style[e.element] = e.new
            //     arr.splice(i, 1)
            // }
            // if(arr.length == 0){
            //     clearInterval(interval)
            //     console.log('RulesChangerCallBack:clear')
            // }
        });
    },100)
}

function NewRule(arrSelectors){
    arrSelectors.forEach((e)=>{
        document.styleSheets[0].insertRule(e.selector)
        if(e.iframe)
        document.querySelector(e.iframe).contentWindow.document.styleSheets[0].insertRule(e.selector)
    })
}
// function Changer(Style){
//     if(!('style' in Style))
//         return

//     if(Style.style[background_color]){
//         switch(Style.style[background_color]){
//             case 'rgb(255, 255, 255)':
//             Style.style[background_color] = background_color_white
//             break
//             case 'rgb(217, 235, 247)':
//             Style.style[background_color] = background_color_white
//             break
//         }
//         //Style.style['background-color'] = 'black'
//     }

// }

// function RulesChanger(){
//     let sum = 0;
//     for (let i = 0, sheets = document.styleSheets; i<sheets.length;i++){
//         //console.log(sheets[i].cssRules.length)
//         for(let j = 0, styles = sheets[i].cssRules; j<styles.length;j++){
//             //console.log(styles[j])
//             if(styles[j].selectorText == '.view-container')
//                 if(styles[j].style['background-color'] != ''){
                    
//                 }
//                     //styles[j].style['background-color'] = 'black'
//                     //console.log(styles[j].style['color'])//rgb
//         }
//     }
//     //console.log(sum)
// }