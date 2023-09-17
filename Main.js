async function checkSiem(func){
    await checkReturn(()=>{
        if($('.pt-root').length || $('.pt-container').length || $('.pt-navbar-icon').length){
            func()
            return true
        }
    })
}
async function main(){
    let ct
    await chrome.storage.local.get("currentTheme").then((obj)=> ct = obj.currentTheme)
    switch(ct){
        case 'InvertTheme':
        checkSiem(InvertTheme)
        break
    }
}
main()
//InvertTheme()