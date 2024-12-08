var ele = document.getElementById('signup')
if(ele){
    ele.addEventListener('click',function(){
        window.location = './signup.html'
    })

}

var iEmail = document.getElementById('iEmail');
var iPass = document.getElementById('iPass');
var loginBtn = document.getElementById('login');
var req = document.getElementById('req');

var users = JSON.parse(localStorage.getItem('users'));

export let globalIndex;
function login(){
    var userFound = false;
    for(var i=0 ; i<users.length ; i++ ){
        if(users[i].uEmail == iEmail.value && users[i].uPassword == iPass.value){
            localStorage.setItem('globalIndex', i);
            window.location = './welcome.html'
            console.log(globalIndex);
            userFound = true;
            break;
        }
    }
    if(!userFound){
        req.innerHTML = "This User Is Not Found You Can SignUp"
        req.classList.replace('d-none','d-block');
    }
}

if(loginBtn){
    loginBtn.addEventListener('click',function(){
        if(iEmail.value.length===0 || iPass.value.length===0){
            req.classList.replace('d-none','d-block');
        }
        else{
            login()
        }
    })
}

