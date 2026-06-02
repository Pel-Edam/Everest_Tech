const hide1= document.querySelector('#hide1')
const hide2= document.querySelector('#hide2')
const loginBtn = document.querySelector('#logIn')
loginBtn.addEventListener('click',login)
function login(){
   const user_name = document.querySelector('#check1').value.trim().toLowerCase()
   const passkey = document.querySelector('#check2').value.trim().toLowerCase()
    if (user_name === "everest_user"  && passkey === "1234") {
        alert('Welcome, US3R!')
        hide1.classList.remove('hidden')

    }else if(user_name === "everest_admin" && passkey === "aura"){
        alert('Welcome ADM1N!!')
        hide2.classList.remove('hidden')
    }
    else{
        alert('Incorrect!!')
        hide1.classList.add('hidden')
    }
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}