const iframe = '#legacyApplicationFrame'
const selectTimeOut = 5000
const background = 'background'
const backgroundColorOne = 'rgb(24,24,24)'
const backgroundColorTwo = 'rgb(42,42,42)'
const backgroundColorThree = 'rgb(32 59 77)'//изначально прозрачный на 80%
const border = 'border'
const borderColor = '1px solid #393939'
const color = 'color'
const colorColor = '#338fcc'
function InvertThemeBeta(version){
    if(version == 25)
        v25()
    else
        v24()
}

function v25(){
    let ncc = new NewCoreClass([
        {selector:'.view-container',attr:background,value:backgroundColorOne,iframe:iframe},
        {selector:'.pt-container .pt-section',attr:background,value:backgroundColorTwo,iframe:iframe},
        {selector:'.pt-container .pt-section',attr:border,value:borderColor,iframe:iframe},
        {selector:'.mc-loader-wrapper',attr:background,value:backgroundColorOne,iframe:iframe},
        {selector:'.events-view__data>section',attr:'border-bottom',value:borderColor,iframe:iframe},
        {selector:'.ui-grid-header',attr:'border-bottom',value:borderColor,iframe:iframe,loop:true,timeoutloop:selectTimeOut},
        {selector:'.left-border',attr:'border-left',value:borderColor,iframe:iframe,loop:true,timeoutloop:selectTimeOut}, //layout-column grid-container_ie-fix left-border //timeout
        {selector:'.mc-action-bar',attr:background,value:backgroundColorOne,iframe:iframe},
        {selector:'.mc-sidebar mc-sidebar-opened .mc-sidebar-header, mc-sidebar mc-sidebar-opened .mc-sidebar-header', attr:border,value:borderColor,iframe:iframe},
        {selector:'.pt-section-header.pt-section-header_with-border, checks-view .check-view__action-bar.mc-action-bar_bottom-border', attr:border,value:borderColor,iframe:iframe},
        {selector:'.filter-pipeline__tag',attr:background,value:backgroundColorThree,iframe:iframe,loop:true,timeoutloop:selectTimeOut},
        {selector:'.filter-pipeline__tag',attr:border,value:backgroundColorTwo,iframe:iframe,loop:true,timeoutloop:selectTimeOut},
        {selector:'.mc-tree__node-link.mc-active .mc-tree__node-frame',attr:background,value:backgroundColorThree,iframe:iframe,loop:true,timeoutloop:selectTimeOut},
        {selector:'.tag-info',attr:background,value:backgroundColorThree,iframe:iframe,loop:true,timeoutloop:selectTimeOut},
        {selector:'.tag-info',attr:border,value:backgroundColorTwo,iframe:iframe,loop:true,timeoutloop:selectTimeOut},
        {selector:'.mc-alert_info',attr:background,value:backgroundColorOne,iframe:iframe,loop:true},
        {selector:'.mc-alert_info',attr:border,value:borderColor,iframe:iframe,loop:true},
        {selector:'.mc-alert_info',attr:color,value:colorColor,iframe:iframe,loop:true},
        {selector:'.statistics-footer',attr:background,value:backgroundColorThree,iframe:iframe},
        {selector:'.statistics-footer',attr:'border-top',value:borderColor,iframe:iframe,loop:true},
        {selector:'.statistics-footer',attr:color,value:colorColor,iframe:iframe,loop:true},
        // {selector:'.pt-section-header.pt-section-header_with-border, checks-view .check-view__action-bar.mc-action-bar_bottom-border', attr:border,value:borderColor,iframe:iframe},
        // {selector:'.pt-section-header.pt-section-header_with-border, checks-view .check-view__action-bar.mc-action-bar_bottom-border', attr:border,value:borderColor,iframe:iframe},

    ],0)
    ncc.StylesInterval()
}
function v24(){

}

//legacyApplicationFrame
//view-container rgb(24,24,24)
//.pt-container .pt-section | pt-block pt-section events-view__data rgb(32,32,32);     border: 1px solid #000000;
//mc-navbar
//mc-navbar-bar

// {selector:'body',attr:'filter',value:'invert(1)'},
//         {selector:'.pt-icons',attr:'filter',value:'invert(1)',iframe:'#legacyApplicationFrame',loop:true},
//         {selector:'.mc-navbar',attr:'filter',value:'invert(1)'},
//         {selector:'.mc-navbar',attr:'background-color',value:'#31200d'},
//         {selector:'mc-navbar-item, mc-navbar-focusable-item, mc-dropdown-trigger, mc-horizontal, ng-star-inserted',attr:'background-color',value:'#31200d',loop:true},
//         {selector:'.mc-navbar-item.mc-active, .mc-navbar-brand.mc-active, .mc-navbar-toggle.mc-active',attr:'background',value:'black',loop:true},
//         {selector:'.statistics-footer',attr:'background-color',value:'#1b83a814',iframe:'#legacyApplicationFrame',loop:true},

    // Change('body','filter','invert(1)')
    // //Change('.pt-icons','filter','invert(1)',true,'#legacyApplicationFrame')
    // //Change('.pt-icons','filter','invert(1) !important',true,'#legacyApplicationFrame')
    // Change('.statistics-footer','background-color','#83ffd152',true,'#legacyApplicationFrame')
    // Change('.statistics-footer','border-top','#83ffd152',true,'#legacyApplicationFrame')
    // Change('.mc-navbar','filter','invert(1)',true,null,10000)
    // Change('.mc-navbar','background-color','#31200d',true,null,10000)
    // Change('mc-navbar-item, mc-navbar-focusable-item, mc-dropdown-trigger, mc-horizontal, ng-star-inserted','background-color','#31200d',true)
    // Change('.mc-navbar-item.mc-active, .mc-navbar-brand.mc-active, .mc-navbar-toggle.mc-active','background','black',true)
    // Change('.events-pdql_changed','background-color','#1b83a814',true,'#legacyApplicationFrame')

    