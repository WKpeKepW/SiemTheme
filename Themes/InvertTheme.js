//alert("Работаю")
// инвертим цвета

titleBackgroundColor = "black"
background = "black"
invert = 'invert(1)'



function getStyle(className_) {
    var styleSheets = window.document.styleSheets;
    var styleSheetsLength = styleSheets.length;
    for(var i = 0; i < styleSheetsLength; i++){
        var classes = styleSheets[i].rules || styleSheets[i].cssRules;
        if (!classes)
            continue;
        var classesLength = classes.length;
        for (var x = 0; x < classesLength; x++) {
            if (classes[x].selectorText == className_) {
                var ret;
                if(classes[x].cssText){
                    ret = classes[x].cssText;
                } else {
                    ret = classes[x].style.cssText;
                }
                if(ret.indexOf(classes[x].selectorText) == -1){
                    ret = classes[x].selectorText + "{" + ret + "}";
                }
                return [ret, i, x];
            }
        }
    }
}

function addAttributeToStyle(cssRule, attribute, value) {
    cssRule=cssRule.replace("}", attribute + ":" + value + ";}")
    return cssRule
}

function addCSSRule(className, attributes){
    var items = getStyle(className)
    var cssRule = items[0]
    Object.keys(attributes).forEach((elem)=>{
        cssRule = addAttributeToStyle(cssRule, elem, attributes[elem])
    })
    document.styleSheets[items[1]].deleteRule(items[2])
    document.styleSheets[items[1]].insertRule(cssRule, items[2])
}

// var css = ".mc-navbar-item.mc-active, .mc-navbar-brand.mc-active, .mc-navbar-toggle.mc-active {background: grey;}"
// document.styleSheets[0].insertRule(css, 0)


//document.styleSheets[0].insertRule(addAttributeToStyle('.pt-icons', "filter", "invert(1)"))
function awaitElements(selector, lambdaFunction){
    var checkExist = setInterval(function() {
        if (document.querySelector(selector)) {
           lambdaFunction()
           clearInterval(checkExist);
        }
     }, 100)
}

function trySetAtrributes(lambda) {
    try {
        lambda()
    } catch (error) {
        
    }
}


async function isSiemCheck() {
    return await new Promise(resolve => {
        var retry = 0
        var checkExist = setInterval(function() {
            // if (document.querySelector("#legacyApplicationFrame") || document.querySelector("mc-web-app-root") 
            //     || document.querySelector("pt-siem-knowledge-base-root") || document.querySelector(".pt-root")  //for v.25
            //     || document.querySelector(".view-container") || document.querySelector("knowledge-base-root") || document.querySelector("app-root")) //fov v.24
            if(document.querySelector(".pt-navbar-icon") || document.querySelector(".mc-navbar-logo"))
            {
                clearInterval(checkExist);
                resolve(true)
            }

            if (retry >= 30) { //await 30 sec.
                clearInterval(checkExist)
                resolve(false)
            }
            retry += 1
        }, 1000)
    
    })
}



async function checkVersion() {
    return await new Promise(resolve => {
        var checkExist = setInterval(function() {
            if (document.querySelector("#legacyApplicationFrame") || document.querySelector("mc-web-app-root") || document.querySelector("pt-siem-knowledge-base-root") || document.querySelector(".pt-root")) {
                resolve("25");
                clearInterval(checkExist);
            }
            else{
                resolve("24");
                clearInterval(checkExist)
            }
        }, 100)
    })
}


function setDarkThemeSiemV24(){
    var css = "::selection{	background-color: #B8B8B8;}" //selected text
    document.styleSheets[0].insertRule(css, 0)

    setInterval(function() {
        trySetAtrributes(()=> { document.querySelector("section").style.fontWeight='bold' }) //all letter have bold
        trySetAtrributes(()=> { document.querySelector("#TimerangeTimeWindowForm > section > mc-radio-group").style.fontWeight='bold' }) //for table selected time
        trySetAtrributes(()=>{ document.querySelector("body > events-group-popover").style.fontWeight='bold' }) // for form filter
        trySetAtrributes(()=>{ document.querySelector(".mc-navbar").style.background='white'}) //общий хедер сиема
        document.querySelectorAll('.mc-navbar.navbar-blue .mc-navbar__button, .mc-navbar.navbar-blue .mc-navbar__link').forEach((elem)=>{elem.style.filter='invert(1)'}) //все кнопки
        document.querySelectorAll(".mc-navbar .mc-icon, .mc-navbar .mc-navbar-title").forEach((elem)=>{elem.style.filter='invert(1)'})

        trySetAtrributes(()=>{ document.querySelector(".pt-navbar-icon").style.filter='invert(1)'})
        trySetAtrributes(()=>{
            document.querySelector("mc-navbar-brand > mc-navbar-title").style.filter='invert(0)'
        })


        trySetAtrributes(()=> {
            document.querySelector(".mc-navbar").querySelectorAll('.pt-icons').forEach((elem)=>{elem.style.filter='invert(0)'})
        })
        trySetAtrributes(()=>{ //change logo in mc
            document.querySelector("nav-bar > mc-navbar > nav > mc-navbar-container.mc-navbar-left > mc-navbar-brand > mc-navbar-logo > div").style.filter='invert(0)'
        })
        trySetAtrributes(()=>{ //только в кб подсвечиваем эти кнопки
            document.querySelector("knowledge-base-root > ng-component > navbar > mc-navbar > nav > mc-navbar-container.mc-navbar-left > database-select > mc-navbar-item > i.pt-icons.db-icon").style.filter='invert(1)'
        })
        trySetAtrributes(()=>{
            document.querySelector("knowledge-base-root > ng-component > navbar > mc-navbar > nav > mc-navbar-container.mc-navbar-left > mc-navbar-item:nth-child(4) > span").style.filter='invert(1)'
        })

        trySetAtrributes(()=>{
            //body > section > nav-bar > nav > div > div.mc-navbar__left.layout-row > div.mc-navbar__header.pt-text-overflow.flex-nogrow.ng-isolate-scope
            document.querySelector("div.mc-navbar__header.pt-text-overflow.flex-nogrow.ng-isolate-scope").style.filter='invert(1)'
        })
        trySetAtrributes(()=>{
            document.querySelector('.mc-navbar.navbar-blue .mc-navbar__item.mc-active, .mc-navbar.navbar-blue .mc-navbar__item.mc-navbar__item_active, .mc-navbar.navbar-blue .mc-navbar__item.open').style.backgroundColor='grey'
            document.querySelector('.mc-navbar.navbar-blue .mc-navbar__item.mc-active, .mc-navbar.navbar-blue .mc-navbar__item.mc-navbar__item_active, .mc-navbar.navbar-blue .mc-navbar__item.open').style.background='grey'
        })

        trySetAtrributes(()=>{ document.querySelector("mc-navbar-brand").style.filter='invert(1)'})
        trySetAtrributes(()=> document.querySelectorAll('assets-vulnerabilities-stat-indicator').forEach(elem=>elem.style.filter='invert(1)'))
        trySetAtrributes(()=> document.querySelectorAll('counter-progress-bar').forEach(elem=>elem.style.filter='invert(1)')) //checklist
        

        trySetAtrributes(()=>{ 
            document.querySelector("body > knowledge-base-root > ng-component > div").querySelectorAll('.pt-icons').forEach((elem)=>{ elem.style.filter='invert(1)'})
        })

        trySetAtrributes(()=>{ document.querySelector("body > section > div").querySelectorAll('.pt-icons').forEach((elem)=>{ elem.style.filter='invert(1)'}) })
        trySetAtrributes(()=>{ document.querySelector("body > section > div").querySelectorAll('.mc-label').forEach((elem)=>{ elem.style.filter='invert(1)'}) })
        trySetAtrributes(()=>{ document.querySelector("body > section > div").querySelectorAll('.mc').forEach((elem)=>{ elem.style.filter='invert(1)'}) })
        trySetAtrributes(()=>{ document.querySelector("body > section > div").querySelectorAll('.mc, .pt-icons').forEach((elem)=>{ elem.style.filter='invert(1)'}) })

        trySetAtrributes(()=> document.querySelectorAll(".mc-switch.mc-switch_sm small").forEach((elem)=>{ elem.style.filter='invert(1)'}))

        //charts
        document.querySelectorAll(".highcharts-point").forEach((elem)=>{elem.style.filter='invert(1)'})

        //health monitor
        document.querySelectorAll("div.notifications__item").forEach((elem=>{ 
            elem.style.filter='invert(1)'
            elem.style.fontWeight='bold'
        }))
        document.querySelectorAll('.notifications__message').forEach((elem=>{ 
            elem.style.filter='invert(1)' 
            elem.style.fontWeight='bold'
        }))

        //notifications SIEM around health monitor
        document.querySelectorAll(".mc-ntn-items").forEach((elem)=>{ elem.style.filter='invert(1)' })
        document.querySelectorAll(".flex.layout-fill_x").forEach((elem)=>{ 
            elem.style.filter='invert(1)' 
            elem.style.fontWeight='bold'
        })
        trySetAtrributes(()=>{ //text kb
            document.querySelector("iframe").contentWindow.document.body.style.fontWeight='bold'
        })
        trySetAtrributes(()=>{ //text mc
            document.querySelectorAll('tree-grid.roles .tree-item-privilege').forEach(elem => elem.style.fontWeight='bold')
            document.querySelectorAll('.pt-text-nowrap, .pt-text-overflow').forEach(elem => elem.style.fontWeight='bold')
        })
        trySetAtrributes(()=> document.querySelectorAll('.ag-cell').forEach(elem=>elem.style.fontWeight='bold'))
        trySetAtrributes(()=> document.querySelectorAll('.mc-button.mc-second, .mc-icon-button.mc-second').forEach(elem=>elem.style.fontWeight='bold'))
        trySetAtrributes(()=> document.querySelectorAll('.layout-row').forEach(elem=>elem.style.fontWeight='bold'))
        trySetAtrributes(()=> document.querySelectorAll("tbody > tr > th > div > span").forEach(elem=>elem.style.fontWeight='bold'))


        trySetAtrributes(()=>{ document.querySelectorAll('td, th').forEach(elem=>elem.style.fontWeight='bold') })

        //white title 
        trySetAtrributes(()=> document.querySelector("search-filter > div > div").style.color='black') //groups
        trySetAtrributes(()=> document.querySelector("span.mc-sidebar-header__title.ng-scope").style.color='black') //filters
        trySetAtrributes(()=> document.querySelector("div.layout-row.flex > div > div").style.color='black') //time

        //for drop down list in kb
        trySetAtrributes(()=> document.querySelectorAll(".mc-dropdown__content > div > a > div").forEach(elem=>elem.style.fontWeight='bold'))
        trySetAtrributes(()=> document.querySelectorAll(".mc-dropdown__item > div").forEach(elem=>elem.style.fontWeight='bold'))
        trySetAtrributes(()=> document.querySelector("div.pdql-fast-filter__popover-title").style.fontWeight='bold')

        //rules text in mc
        trySetAtrributes(()=> document.querySelectorAll(".mc-body").forEach(elem=>elem.style.fontWeight='bold'))
        trySetAtrributes(()=> document.querySelectorAll(".mc-body_strong").forEach(elem=>elem.style.fontWeight='bold'))
        trySetAtrributes(()=> document.querySelectorAll(".ag-header-cell-text").forEach(elem=>elem.style.fontWeight='bold'))
        trySetAtrributes(()=> document.querySelector("iframe").contentWindow.document.body.querySelectorAll(".pt-icons").forEach(elem=>elem.style.filter='invert(1)'))
        trySetAtrributes(()=> document.querySelector("iframe").contentWindow.document.body.querySelectorAll(".mc").forEach(elem=>elem.style.filter='invert(1)'))
        trySetAtrributes(()=> document.querySelector("iframe").contentWindow.document.body.querySelectorAll("deploy-status .status-text").forEach(elem=>elem.style.filter='invert(1)'))

        //left dropdown menu in (kb mc) and other
        trySetAtrributes(()=> document.querySelectorAll("div > div > div > div > mc-list-selection > mc-list-option > div > div > a > span").forEach(elem=>elem.style.fontWeight='bold'))
        trySetAtrributes(()=> document.querySelectorAll("a > span > span").forEach(elem=>elem.style.fontWeight='bold'))


        trySetAtrributes(()=> document.querySelectorAll(".mc-btn_action-bar, assets-report-modal>report-from-section>.mc-btn").forEach(elem=>elem.style.fontWeight='bold'))
        trySetAtrributes(()=> document.querySelector("body > events-filter-popover").style.fontWeight='bold')

        trySetAtrributes(()=> document.querySelectorAll("knowledge-base-root > ng-component > div > about-system > div > div > div").forEach(elem=>elem.style.fontWeight='bold'))
        //servers errors
        //trySetAtrributes(()=> document.querySelector("section > server-errors > div").style.filter='invert(0)')
        
    }, 100)
}


function setDarkThemeSiemV25() {
    //инвертим header health monitora
    awaitElements("mc-navbar", ()=>{
        document.querySelector("mc-navbar").style.background=titleBackgroundColor
        document.querySelector("mc-navbar").style.filter=invert 
    })
    //Select field in navbar
    //addCSSRule(".mc-navbar-item.mc-active, .mc-navbar-brand.mc-active, .mc-navbar-toggle.mc-active", {"-webkit-filter": "invert(1)"})

    document.styleSheets[0].insertRule("::selection{	background-color: #B8B8B8;}", 0) //selected text
    trySetAtrributes(()=> addCSSRule(".mc-navbar-item.mc-active, .mc-navbar-brand.mc-active, .mc-navbar-toggle.mc-active", {"background": "grey"}))

    setInterval(function() {
        trySetAtrributes(()=> document.querySelector("#legacyApplicationFrame").contentWindow.document.body.querySelector(".view-container").style.fontWeight='bold')
        trySetAtrributes(()=> document.querySelector("#legacyApplicationFrame").contentWindow.document.body.querySelectorAll(".mc-sidebar mc-sidebar-opened .mc-sidebar-header .mc-sidebar-header__title, mc-sidebar mc-sidebar-opened .mc-sidebar-header .mc-sidebar-header__title").forEach(elem=>elem.style.color='black'))
        trySetAtrributes(()=> document.querySelectorAll('.mc-dropdown__panel > div > a').forEach(elem=>elem.style.fontWeight='bold'))

        trySetAtrributes(()=> document.querySelector("#legacyApplicationFrame").contentWindow.document.body.querySelectorAll('.pt-icons').forEach(elem => elem.style.filter='invert(1)' ))
        trySetAtrributes(()=> document.querySelector("#legacyApplicationFrame").contentWindow.document.body.querySelectorAll('.mc-label').forEach((elem)=>{ elem.style.filter='invert(1)'}) )
        trySetAtrributes(()=> document.querySelector("#legacyApplicationFrame").contentWindow.document.body.querySelectorAll('.mc').forEach((elem)=>{ elem.style.filter='invert(1)'}) )
        trySetAtrributes(()=> document.querySelector("#legacyApplicationFrame").contentWindow.document.body.querySelectorAll('.mc, .pt-icons').forEach((elem)=>{ elem.style.filter='invert(1)'}) )
     
        trySetAtrributes(()=> document.querySelector("pt-siem-main").querySelectorAll(".pt-icons").forEach(elem=>elem.style.filter='invert(1)'))
 
        //about system
        trySetAtrributes(()=> document.querySelector("pt-siem-main").querySelectorAll(".pt-entity-parameters__value").forEach(elem=>elem.style.fontWeight='bold'))
        trySetAtrributes(()=> document.querySelectorAll(".license-info__value").forEach(elem=>elem.style.fontWeight='bold'))
        trySetAtrributes(()=> document.querySelectorAll(".system-info__value").forEach(elem=>elem.style.fontWeight='bold'))
        trySetAtrributes(()=> document.querySelectorAll(".mc-tree-option .mc-option-text > a").forEach(elem=>elem.style.fontWeight='bold'))
 
        trySetAtrributes(()=> document.querySelectorAll(".ng-star-inserted").forEach(elem=>elem.style.fontWeight='bold'))
        trySetAtrributes(()=> document.querySelectorAll(".mc-tree-option > span > span > span").forEach(elem=>elem.style.fontWeight='bold'))
        trySetAtrributes(()=> document.querySelectorAll(".ag-cell-value").forEach(elem=>elem.style.fontWeight='bold'))
 
 
        trySetAtrributes(()=> document.querySelector("pt-siem-management-checks-page").querySelectorAll('.mc').forEach((elem)=>{ elem.style.filter='invert(1)'}))
        trySetAtrributes(()=> document.querySelectorAll("span > div > pt-siem-counter-progress-bar > div").forEach((elem)=>{ elem.style.filter='invert(1)'}))
        trySetAtrributes(()=> document.querySelector("iframe").contentWindow.document.body.querySelectorAll(".mc-body").forEach(elem=>elem.style.fontWeight='bold'))

        //health monitor notifications
        trySetAtrributes(()=> document.querySelectorAll("pt-health-monitoring-notification").forEach(elem=> elem.style.filter='invert(1)'))
        trySetAtrributes(()=> document.querySelectorAll(".health-monitoring-notification").forEach(elem=>elem.style.background='black'))
        trySetAtrributes(()=> document.querySelectorAll("div.health-monitoring-notification__content").forEach(elem=>elem.style.filter='invert(1)'))
 
        //system notifications
        trySetAtrributes(()=> document.querySelectorAll("div.health-monitoring-notification__content").forEach(elem=>elem.style.filter='invert(1)'))
        trySetAtrributes(()=> document.querySelectorAll("pt-notification").forEach(elem=>elem.style.filter='invert(1)'))
        trySetAtrributes(()=> document.querySelectorAll("pt-notification .notification").forEach(elem=>elem.style.background='black'))
        trySetAtrributes(()=> document.querySelectorAll("div.notification__content").forEach(elem=>elem.style.filter='invert(1)'))
 
        trySetAtrributes(()=> document.querySelectorAll('.mc-dropdown-item-wrapper').forEach(elem=>elem.style.fontWeight='bold'))
 
        //комент потому что жирные значки в корреляциях
        //trySetAtrributes(()=> document.querySelector("#legacyApplicationFrame").contentWindow.document.body.querySelector("events-page > div > section > section").querySelectorAll('.ng-scope').forEach(elem=>elem.style.fontWeight='bold'))
        trySetAtrributes(()=> document.querySelector("#legacyApplicationFrame").contentWindow.document.body.querySelectorAll('.mc-switch small').forEach(elem=>elem.style.filter='invert(1)'))

        //left-up menu
        trySetAtrributes(()=> document.querySelector("#legacyApplicationFrame").contentWindow.document.body.querySelector('.mc-popover').style.fontWeight='bold')
        trySetAtrributes(()=> document.querySelectorAll(".mc-link__text").forEach(elem=>elem.style.fontWeight='bold'))

        //tasks, all text bold
        trySetAtrributes(()=> document.querySelector("#legacyApplicationFrame").querySelectorAll('.ng-scope').forEach(elem=>elem.style.fontWeight='bold'))
        trySetAtrributes(()=> document.querySelector('.mc-action-bar').querySelectorAll('.ng-scope').forEach(elem=>elem.style.fontWeight='bold'))
        trySetAtrributes(()=> document.querySelectorAll("div.mc-button-wrapper > span").forEach(elem=>elem.style.fontWeight='bold'))
        trySetAtrributes(()=> document.querySelector("#legacyApplicationFrame").contentWindow.document.body.querySelector('.mc-action-bar').querySelectorAll("span").forEach(elem=>elem.style.fontWeight='bold'))
        
        trySetAtrributes(()=> document.querySelector("#legacyApplicationFrame").contentWindow.document.body.querySelector("scan-tables-page > div > section > section").querySelectorAll("span").forEach(elem=>elem.style.fontWeight='bold'))
        
        //mc
        trySetAtrributes(()=> document.querySelector("mc-web-app-root .mc-navbar-logo").style.filter='invert(0)')
        trySetAtrributes(()=> document.querySelectorAll("mc-web-app-root span").forEach(elem=>elem.style.fontWeight='bold'))

        //kb
        trySetAtrributes(()=> document.querySelector("#frameOutlet").contentWindow.document.body.querySelector("section").querySelectorAll(".ng-binding").forEach(elem=>elem.style.fontWeight='bold'))
        trySetAtrributes(()=> document.querySelector("#frameOutlet").contentWindow.document.body.querySelector("section").querySelectorAll(".ng-scope").forEach(elem=>elem.style.fontWeight='bold'))
        trySetAtrributes(()=> {
            document.querySelector("#frameOutlet").contentWindow.document.body.querySelectorAll(".pt-icons").forEach(elem=>{ 
                elem.style.filter='invert(1)'
                elem.style.fontWeight='normal'
            })
        })
        trySetAtrributes(()=> {
            document.querySelector("#frameOutlet").contentWindow.document.body.querySelectorAll(".mc").forEach(elem=>{ 
                elem.style.filter='invert(1)'
                elem.style.fontWeight='normal'
            })
        })
        trySetAtrributes(()=> document.querySelector("#frameOutlet").contentWindow.document.body.querySelectorAll("deploy-status").forEach(elem=>elem.style.filter='invert(1)'))
        

        //grafiki
        trySetAtrributes(()=> document.querySelector("#legacyApplicationFrame").contentWindow.document.body.querySelectorAll(".highcharts-point").forEach(elem=>elem.style.filter='invert(1)'))
        trySetAtrributes(()=> document.querySelector("#legacyApplicationFrame").contentWindow.document.body.querySelectorAll("assets-vulnerabilities-stat-indicator > div").forEach(elem=>elem.style.filter='invert(1)'))

        trySetAtrributes(()=> document.querySelectorAll(".pt-text-overflow > span").forEach(elem=>elem.style.filter='invert(1)'))
        trySetAtrributes(()=> document.querySelectorAll('.mc-form-group .mc-form-group_row .mc-form-label').forEach(elem=>elem.style.fontWeight='bold'))
        
        trySetAtrributes(()=> document.querySelectorAll(".ng-star-inserted").forEach(elem => elem.style.fontWeight='bold'))
        trySetAtrributes(()=> document.querySelector("#legacyApplicationFrame").contentWindow.document.body.querySelectorAll('.pt__dashboard__table__span').forEach(elem=>elem.style.fontWeight='bold'))
        trySetAtrributes(()=> document.querySelector("#legacyApplicationFrame").contentWindow.document.body.querySelectorAll(".pt-icons-external-link_16").forEach(elem=>elem.style.filter='invert(0)'))
        trySetAtrributes(()=> document.querySelector("#legacyApplicationFrame").contentWindow.document.body.querySelectorAll(".pt-text-overflow").forEach(elem=>elem.style.fontWeight='bold'))
        trySetAtrributes(()=> document.querySelector("#legacyApplicationFrame").contentWindow.document.body.querySelectorAll(".ng-scope.ng-binding").forEach(elem=>elem.style.fontWeight='bold'))

        
        //history queries
        trySetAtrributes(()=> document.querySelectorAll(".text-less-contrast").forEach(elem=>elem.style.fontWeight='bold'))
        trySetAtrributes(()=> document.querySelectorAll(".pdql-text").forEach(elem=>elem.style.fontWeight='bold'))
        trySetAtrributes(()=> document.querySelectorAll(".mc-info_16").forEach(elem=>elem.style.filter='invert(1)'))
        trySetAtrributes(()=> document.querySelectorAll("div.flex.layout-row.layout-align-center-center.ng-star-inserted > div").forEach(elem=>elem.style.fontWeight='bold'))

    }, 100)
}

function InvertTheme(){
isSiemCheck().then((isSiem)=>{
    console.log("isSiem: " + isSiem)
    if(!isSiem) return


    checkVersion().then((versionSIEM)=>{
        document.body.style.filter = invert
        if(versionSIEM == "25") {
            console.log("version 25")
            setDarkThemeSiemV25()
        } else if (versionSIEM == "24"){ //for v.24 and for v.23 (Samara)
            console.log("version 24")
            setDarkThemeSiemV24()
        } else {
            console.log("Unknown version")
        }
    })
    .catch(console.error)
})
.catch(console.error)
}

//инвертим header health monitora


//alert(document.querySelector(".pt-icons"))
//alert(document.querySelector(".mc-warning-icon"))
//document.querySelector(".pt-icons").style.filter='invert(1)'
//document.querySelector(".mc-warning-icon").style.filter='invert(1)'
