var globalIndex = localStorage.getItem('globalIndex');
var logout = document.getElementById('logout')

var head = document.getElementById('wel');
localStorage.getItem('users');
var users = JSON.parse(localStorage.getItem('users'));


head.innerHTML = `Welcome ${users[globalIndex].uName}`

logout.addEventListener('click',function(){
    window.location = './index.html'
})