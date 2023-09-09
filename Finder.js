let Timer = 5000
let TimeOut = 10000;

function checkReturn(func, timeOut = 0){
    let Interval = setInterval(() =>{
        out = func()
        if(out) {
            clearInterval(Interval)
        }
        else if (timeOut >= TimeOut){
            console.log("TimeOut:checkReturn")
            clearInterval(Interval)
        }
        else
            timeOut+=Timer
    }, Timer)
}

function checkSelector(selector, func){
    let timeOut = 0
    let Interval = setInterval(() =>{                                       //Костыль с бэкгроунтом чтобы искать body
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
function checkSelectorLoop(selector, func){
    setInterval(() =>{
        if($(selector).hasClass(selector.slice(1))) {
            func()
        }
    }, Timer)
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
function checkSelector2Loop(iframe, selector, func){
    setInterval(() =>{
        if($(iframe).contents().find('*').find(selector).hasClass(selector.slice(1))) {
            func()
        }
    }, Timer)
}
function Change(selector,attr,value,loop = false, iframe = null){
    if(iframe!=null && loop){
        checkSelector2Loop(iframe,selector,()=>{
            $(iframe).contents().find('*').find(selector).css(attr,value)
        })}
    else if(iframe!=null && loop == false){
        checkSelector2(iframe,selector,()=>{
            $(iframe).contents().find('*').find(selector).css(attr,value)
        })}
    else if(iframe=null && loop){
        checkSelectorLoop(selector,()=>{
            $(selector).css(attr,value)
        })}
    else {//loop false iframe null
        checkSelector(selector,()=>{
            $(selector).css(attr,value)
        })}
}






console.log("Rabotaem")

//Примеры
// Change('body','filter','invert(1)')

// Change('.mc-danger-icon','filter','invert(1)',true,'#legacyApplicationFrame')

// checkReturn(()=>{
//     if($('body').css('background'))
//         console.log('Eas')
// })