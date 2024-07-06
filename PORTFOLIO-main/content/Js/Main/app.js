let toggle = document.querySelector(".toggle")
let top1 = document.querySelector(".top")
let navigate = document.querySelector(".navigate")
let main = document.querySelector(".main")

toggle.addEventListener('click',function()
{
    toggle.classList.toggle('on')
    top1.classList.toggle('on')
    navigate.classList.toggle('on')
    main.classList.toggle('on')
})
function show_off()
{
    let navigate = document.querySelector('.navigate')
    let main = document.querySelector('.main')
    navigate.classList.remove('on')
    main.classList.remove('on')
    
}
let SwitcherMode = document.querySelector(".switchmode")
let DarkBody = document.querySelector("body")

SwitcherMode.addEventListener("click",function()
{
    DarkBody.classList.toggle('dark')
})