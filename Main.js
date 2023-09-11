checkReturn(()=>{
    if($('.pt-root').length || $('.pt-container').length || $('.pt-navbar-icon').length){
        main()
        return true
    }
})

function main(){
    InvertTheme.main()
}