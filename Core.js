let Timer = 100
let TimeOut = 10000

function checkReturn(func, timer = Timer, timeOutLoop = TimeOut ){
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

function checkSelector(selector, func){
    let timeOut = 0
    let Interval = setInterval(() =>{
        if($(selector).hasClass(selector.slice(1)) || $(selector).css('background') != 'none') {
            console.log("Confirm check:"+selector)
            clearInterval(Interval)
            func()
        }
        else if (timeOut >= TimeOut){
            console.log('TimeOut:checkSelector= '+ selector)
            clearInterval(Interval)
        }
        else
            timeOut+=Timer
    }, Timer)
}
function checkSelectorLoop(selector, func, timer = Timer, timeOutLoop=0){
    let timeOut = 0
    let Interval = setInterval(() =>{
        if($(selector).hasClass(selector.slice(1))) {
            func()
        }
        if(timeOutLoop != 0){
            timeOut+=timer
            if(timeOut >= timeOutLoop){
                console.log('TimeOut:checkSelectorLoop= '+ selector)
                clearInterval(Interval)
            }
        }
    }, timer)
}
function checkSelector2(iframe, selector, func){
    let timeOut = 0
    let Interval = setInterval(() =>{
        if($(iframe).contents().find('*').find(selector).hasClass(selector.slice(1))) {
            console.log("Confirm check:"+$(iframe).contents().find('*').find(selector).hasClass(selector.slice(1)))
            clearInterval(Interval)
            func()
        }
        else if (timeOut >= TimeOut){
            console.log('TimeOut:checkSelector= '+ selector)
            clearInterval(Interval)
        }
        else
            timeOut+=Timer
    }, Timer)
}
function checkSelector2Loop(iframe, selector, func, timer = Timer){
    setInterval(() =>{
        if($(iframe).contents().find('*').find(selector).hasClass(selector.slice(1))) { //изменить условие нахождение 
            func()
        }
    }, timer)
}
function Change(selector,attr,value,loop = false, iframe = null, timeOutLoop = 0, timer = Timer){
    if(iframe!=null && loop){
        checkSelector2Loop(iframe,selector,()=>{
            if($(iframe).contents().find('*').find(selector).css(attr) != value)
                $(iframe).contents().find('*').find(selector).css(attr,value)
        }, timer)}
    else if(iframe!=null && !loop){
        checkSelector2(iframe,selector,()=>{
            $(iframe).contents().find('*').find(selector).css(attr,value)
        })}
    else if(iframe==null && loop){
        checkSelectorLoop(selector,()=>{
            if($(selector).css(attr)!= value)
                $(selector).css(attr,value)
        },timer, timeOutLoop)}
    else if(iframe==null && !loop){
        checkSelector(selector,()=>{
            $(selector).css(attr,value)
        })}
    else
        console.log('Function Change Error: '+selector+attr+value+loop+iframe);
}
//Примеры

// checkReturn(()=>{
//     if($('body').css('background'))
//         console.log('Eas')
// })