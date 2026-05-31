const hide= document.querySelector('#hide')
const loginBtn = document.querySelector('#logIn')
loginBtn.addEventListener('click',login)
function login(){
   const input1 = document.querySelector('#check1').value.trim().toLowerCase()
   const input2 = document.querySelector('#check2').value.trim().toLowerCase()
    if (input1 === "aura group"  && input2 === "typeshii" || input1 === "everest_admin" && input2 === "aura") {
        alert('Correct!')
        hide.classList.remove('hidden')

    }else{
        hide.classList.add('hidden')
        alert('Access Denied!!')
    }
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}