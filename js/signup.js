var ele = document.getElementById('signin');
ele.addEventListener('click', function() {
    window.location = './index.html';
});

var userName = document.getElementById('userName');
var userEmail = document.getElementById('userEmail');
var userPassword = document.getElementById('userPassword');
var signUpBtn = document.getElementById('signup');
var success = document.getElementById('success');
var faild = document.getElementById('faild');

var userList = [];
if (localStorage.getItem('users')) {
    userList = JSON.parse(localStorage.getItem('users'));
}

function checkEmail() {
    for (var i = 0; i < userList.length; i++) {
        if (userList[i].uEmail === userEmail.value) {
            faild.innerHTML = "This Email Is Already Taken. You Can SignIn.";
            faild.classList.replace('d-none', 'd-block');  
            success.classList.replace('d-block', 'd-none'); 
            return true;
        }
    }
    return false; 
}

function addUser() {
    if (checkEmail()) {
        return; 
    }

    var userOpj = {
        uName: userName.value,
        uEmail: userEmail.value,
        uPassword: userPassword.value,
    }

    userList.push(userOpj); 
    localStorage.setItem("users", JSON.stringify(userList));

    success.classList.replace('d-none', 'd-block');
    faild.classList.replace('d-block', 'd-none');
}

function Validation(input) {
    var Regex = {
        userName: /^[a-zA-Z]{2,10}$/,
        userEmail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        userPassword: /^[0-9]{2,8}$/
    };
    if (Regex[input.id].test(input.value)) {
        return true;
    } else {
        return false;
    }
}

signUpBtn.addEventListener('click', function() {
    if (Validation(userName) && Validation(userEmail) && Validation(userPassword)) {
        addUser();
    } else {
        faild.classList.replace('d-none', 'd-block');
        success.classList.replace('d-block', 'd-none');
    }
});
