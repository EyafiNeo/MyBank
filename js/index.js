document.getElementById('login-btn').addEventListener('click',function(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if(email === 'ruhaneyafi1@gmail.com' && password === 'gotobank'){
        window.location.href = 'bank.html';
    }
    else{
        alert("Invalid email or password");
    }
})