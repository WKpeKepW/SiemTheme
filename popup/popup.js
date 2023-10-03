function styleSelect() {
    // $('select').css('background-color',$('select option[value='+$('select').val()+']').css('background-color'))
    // $('select').css('color',$('select option[value='+$('select').val()+']').css('color'))
    //alert(document.querySelector('select').options[document.querySelector('select').selectedIndex].style['background-color'])
    document.querySelector('select').style['background-color'] = document.querySelector('select').options[document.querySelector('select').selectedIndex].style['background-color']
    document.querySelector('select').style['color'] = document.querySelector('select').options[document.querySelector('select').selectedIndex].style['color']
}
function changeTheme(){
    //console.log($('select').val())
    //alert(document.querySelector('select').options[document.querySelector('select').selectedIndex].value)
    chrome.storage.local.set({"currentTheme":document.querySelector('select').options[document.querySelector('select').selectedIndex].value})
    //chrome.storage.local.set({"currentTheme":$('select').val()})
}

    chrome.storage.local.get("currentTheme").then((obj)=>{
        if(obj.currentTheme == undefined)
            chrome.storage.local.set({"currentTheme":"default"})
        else{
            document.querySelector('select').value = obj.currentTheme
            //$('select').val(obj.currentTheme).change()
            styleSelect()
        }  
    })
document.querySelector('select').addEventListener('click',()=>{
    //alert('click')
    styleSelect()
    changeTheme()
})

// $(document).ready(()=>{
//     chrome.storage.local.get("currentTheme").then((obj)=>{
//         if(obj.currentTheme == undefined)
//             chrome.storage.local.set({"currentTheme":"default"})
//         else{
//             $('select').val(obj.currentTheme).change()
//             styleSelect()
//         }  
//     })
// })