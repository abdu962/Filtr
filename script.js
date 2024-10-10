function myFunc() {
    let  ul, input, li, filtr, i 
    input = document.getElementById("myInput")
    filtr = input.value.toUpperCase()
    ul =  document.getElementById("myUl")   
    li = ul.getElementsByTagName("li")
    for (i = 0; i < li.length; i++ ){
        a = li[i].getElementsByTagName("a")[0]
        if (a.innerHTML.toUpperCase().indexOf(filtr) > -1){
            li[i].style.display="" 
        } 
        else {
            li[i].style.display="none"
        }
    }
}
