$(document).ready(()=>{
    chrome.storage.local.get("currentTheme").then((obj)=>{
        if(obj.currentTheme == undefined)
            chrome.storage.local.set({"currentTheme":"default"})
        else{
            $('select').val(obj.currentTheme).change()
            styleSelect()
        }  
    })
})

$(document).on('click','select',()=>{
    styleSelect()
    changeTheme()
})

function styleSelect(){
    $('select').css('background-color',$('select option[value='+$('select').val()+']').css('background-color'))
    $('select').css('color',$('select option[value='+$('select').val()+']').css('color'))
}

function changeTheme(){
    console.log($('select').val())
    chrome.storage.local.set({"currentTheme":$('select').val()})
}