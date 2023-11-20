let signUp = document.getElementById('singUp');
let signIn = document.getElementById('singIn');
let nameInput = document.getElementById('nameInput');
let tittle = document.getElementById('Tittle');

signIn.onclick = function(){
    nameInput.style.maxHeight = '0';
    tittle.innerHTML = 'Login';
    signUp.classList.add('disable');
    signIn.classList.remove('disable');
}

signIn.onclick = function(){
    nameInput.style.maxHeight = '60px';
    tittle.innerHTML = 'Registro';
    signUp.classList.remove('disable');
    signIn.classList.add('disable');
}