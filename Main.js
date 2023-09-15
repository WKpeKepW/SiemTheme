checkReturn(()=>{
    if($('.pt-root').length || $('.pt-container').length || $('.pt-navbar-icon').length){
        main()
        return true
    }
})
//alert(sessionStorage.getItem('currentTheme'))
function main(){
    InvertTheme.main()
}