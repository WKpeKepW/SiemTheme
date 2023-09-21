async function checkSiem(func){
    await checkReturn(()=>{
        //if($('.pt-root').length || $('.pt-container').length || $('.pt-navbar-icon').length){//siem?
        if($('.pt-navbar-icon').length || $('.mc-navbar-logo')){//siem?
            if($('#legacyApplicationFrame').length || $('mc-web-app-root').length || $('pt-siem-knowledge-base-root').length || $('.pt-root').length){//version
                func(25)
                console.log('version:'+25)
            }
            else{
                func(24)
                console.log('version:'+24)
            }
            return true
        }
    })
}
async function main(){
    let ct
    await chrome.storage.local.get("currentTheme").then((obj)=> ct = obj.currentTheme)
    switch(ct){//добавление темы, так же в манифест добавить скрипт
        case 'InvertTheme':
        checkSiem(InvertTheme)
        break
        case 'InvertThemeBeta':
        checkSiem(InvertThemeBeta)
        break
    }
}
main()
//InvertTheme()