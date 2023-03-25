const humbMenu = document.querySelector(".btn-nav")
const menu = document.querySelector('.nav-menu')
const navbar = document.getElementById("navbar")
const navbarNav = navbar.children[0]

// humb menu
humbMenu.addEventListener('click', () => {
    menu.classList.toggle('-translate-y-[400px]')
    document.body.classList.toggle('overflow-hidden')
    if(window.pageYOffset == 0){
        navbarNav.classList.toggle('bg-latar')
    } else{
        navbarNav.classList.add('bg-latar')
    }
})


// navbar event
var prevScrollpos = window.pageYOffset

window.addEventListener('scroll', ()=>{
    var currentScrollPos = window.pageYOffset

    // Fungsi untuk hide navbarnya
    // if (prevScrollpos > currentScrollPos) {
    //     navbar.style.top = "0"
    // } else {
    //     navbar.style.top = "-100px"
    // }

    prevScrollpos = currentScrollPos
    // console.log(currentScrollPos)

    if(currentScrollPos < 100){
        navbarNav.classList.remove('bg-latar', 'shadow-lg')
    } else{
        navbarNav.classList.add('bg-latar', 'shadow-lg')
    }
})