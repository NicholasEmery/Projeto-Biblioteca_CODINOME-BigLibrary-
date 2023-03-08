const password1 = document.getElementById('password1')
const icon1 = document.getElementById('icon1')
const iconShowURL1 = src="/html/login.cadastro.acessar/img/hide.png"
const iconHideURL1 = src="/html/login.cadastro.acessar/img/show.png"
function showHide1(){
    if(password1.type === 'password'){
        password1.setAttribute('type','text')
        icon1.setAttribute('src', iconHideURL1)
    }
    else{
        password1.setAttribute('type','password')
        icon1.setAttribute('src', iconShowURL1)
    } 
}

const password2 = document.getElementById('password2')
const icon2 = document.getElementById('icon2')
const iconShowURL2 = src="/html/login.cadastro.acessar/img/hide.png"
const iconHideURL2 = src="/html/login.cadastro.acessar/img/show.png"
function showHide2(){
    if(password2.type === 'password'){
        password2.setAttribute('type','text')
        icon2.setAttribute('src', iconHideURL2)
    }
    else{
        password2.setAttribute('type','password')
        icon2.setAttribute('src', iconShowURL2)
    } 
}