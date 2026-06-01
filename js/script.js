const hide1= document.querySelector('#hide1')
const hide2= document.querySelector('#hide2')
const loginBtn = document.querySelector('#logIn')
loginBtn.addEventListener('click',login)
function login(){
   const input1 = document.querySelector('#check1').value.trim().toLowerCase()
   const input2 = document.querySelector('#check2').value.trim().toLowerCase()
    if (input1 === "aura group"  && input2 === "typeshii") {
        alert('Welcome, US3R!')
        hide1.classList.remove('hidden')

    }else if(input1 === "everest_admin" && input2 === "aura"){
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