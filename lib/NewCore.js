//Единный таймер
//запрос сразу на изменение в переменную а переменную уже менять

class NewCoreClass {
    Timer = 100
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

    StylesInterval(arrStyles = this.ArrStyles) {//возможно стоит изменять не каждый тик а только тогда когда на странице что то происходит, но для этого нужно разобраться с событиями
        let timeOut = 0
        let interval = setInterval(()=>{//интервал в котором изменяються все условия
            //console.log(this.Timer)
            arrStyles.forEach((e, index) => {//проходимся по списку стилей для изменения
                if(e.selector != null && e.iframe == null){
                    //console.log(e.iframe)
                    document.querySelectorAll(e.selector).forEach(elem => elem.style[e.attr] = e.value)
                    //$(e.selector).css(e.attr,e.value)
                }
                else if(e.selector != null && e.iframe != null){
                    document.querySelector(e.iframe).contentWindow.document.body.querySelectorAll(e.selector).forEach(elem => elem.style[e.attr] = e.value)
                    //$(e.iframe).contents().find('*').find(e.selector).css(e.attr,e.value)
                }
                else{
                    throw new Error('Interval newCore error')
                }
                if(!e.loop){//если стиль нужно изменить один раз удаляем его из списка стилей на изменение
                    arrStyles.splice(index, 1)
                }
            });
            if(this.TimeOut != 0){
                if (timeOut >= this.TimeOut){
                    console.log('TimeOut:StylesInterval')
                    clearInterval(interval)
                }
                else
                    timeOut+=this.Timer
            } 
        },this.Timer)
    }
}


// class Style {//класс описывающий изменение атрибутов
//     Selector = ""
//     Attr
//     Value
//     Iframe = null
//     Loop = false
// }