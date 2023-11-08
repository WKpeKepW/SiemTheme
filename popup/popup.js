function styleSelect() {
    document.querySelector('select').style['background-color'] = document.querySelector('select').options[document.querySelector('select').selectedIndex].style['background-color']
    document.querySelector('select').style['color'] = document.querySelector('select').options[document.querySelector('select').selectedIndex].style['color']
}
function changeTheme(){
    chrome.storage.local.set({"currentTheme":document.querySelector('select').options[document.querySelector('select').selectedIndex].value})
}

    chrome.storage.local.get("currentTheme").then((obj)=>{
        if(obj.currentTheme == undefined)
            chrome.storage.local.set({"currentTheme":"default"})
        else{
            document.querySelector('select').value = obj.currentTheme
            styleSelect()
        }  
    })
document.querySelector('select').addEventListener('click',()=>{
    styleSelect()
    changeTheme()
})