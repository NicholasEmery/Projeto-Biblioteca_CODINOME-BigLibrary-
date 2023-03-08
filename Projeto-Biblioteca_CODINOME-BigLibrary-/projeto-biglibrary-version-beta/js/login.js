const password = document.getElementById('password')
const icon = document.getElementById('icon')
const iconShowURL = src="/html/login.cadastro.acessar/img/hide.png"
const iconHideURL = src="/html/login.cadastro.acessar/img/show.png"
function showHide(){
    if(password.type === 'password'){
        password.setAttribute('type','text')
         icon.setAttribute('src', iconHideURL)
    }
    else{
        password.setAttribute('type','password')
        icon.setAttribute('src', iconShowURL)
    } 
}