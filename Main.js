async function checkSiem(func){
    await checkReturn(()=>{
        //if($('.pt-root').length || $('.pt-container').length || $('.pt-navbar-icon').length){//siem?
        if(document.querySelector('.pt-navbar-icon') || document.querySelector('.mc-navbar-logo')){//siem?
            if(document.querySelector('#legacyApplicationFrame') || document.querySelector('mc-web-app-root') || document.querySelector('pt-siem-knowledge-base-root') || document.querySelector('.pt-root')){//version
                func(25)
                console.log('version:'+25)
            }
            else{
                func(24)
                console.log('version:'+24)
            }
            return true
        }
    },100,10000)//timer,timeOut
}
async function main(){
    let ct
    await chrome.storage.local.get("currentTheme").then((obj)=> ct = obj.currentTheme)
    switch(ct){//добавление темы, так же в манифест добавить скрипт
        case 'Invert':
        checkSiem(Invert)
        break
        case 'Dark':
        checkSiem(Dark)
        break
    }
}
main()
//InvertTheme()