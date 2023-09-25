//Единный таймер
//запрос сразу на изменение в переменную а переменную уже менять

class NewCoreClass {
    Timer = 100
    ArrStyles
    constructor(arrStyles){//получаем массив стилей на изменение
        this.ArrStyles = arrStyles
        this.Interval(arrStyles)
    }

    Interval(arrStyles) {//возможно стоит изменять не каждый тик а только тогда когда на странице что то происходит, но для этого нужно разобраться с событиями
        let interval = setInterval(()=>{//интервал в котором изменяються все условия
            arrStyles.forEach((e, index) => {//проходимся по списку стилей для изменения
                
                if(element.Iframe = null){
                    $(e.Selector).css(e.Attr,e.Value)
                }
                else if(element.Iframe != null){
                    $(e.Iframe).contents().find('*').find(e.Selector).css(e.Attr,e.Value)
                }
                else{
                    throw new Error("Interval newCore error")
                }
                if(e.Loop){//если стиль нужно изменить один раз удаляем его из списка стилей на изменение
                    arrStyles[index].splice(index, 1)
                }
            });
            clearInterval(interval)
        },Timer)
    }
}


class Style {//класс описывающий изменение атрибутов
    Selector
    Attr
    Value
    Iframe = null
    Loop = false
}