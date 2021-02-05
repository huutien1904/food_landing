

// back on top y

var backToTopBtn = document.querySelector('.back-to-top');


window.onscroll = function() {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        backToTopBtn.style.display = 'flex' ;
    }
    else{
        backToTopBtn.style.display = 'none' ;
    }
}

// active button



let menuItems = document.getElementsByClassName('menu-item')

Array.from(menuItems).forEach((item, index) =>{
    item.onclick = (e) => {
        let currMenu = document.querySelector('.menu-item.active')
        currMenu.classList.remove('active')
        item.classList.add('active')
    }
})



// food categogy
let foodMenuList = document.querySelector('.food-item-wrap')

let foodCategory = document.querySelector('.food-categogy')

let categories = foodCategory.querySelectorAll('button')


Array.from(categories).forEach((item, index) => {
    
    item.onclick = (e) => {
        let currCat = foodCategory.querySelector('button.active')
        currCat.classList.remove('active')    
        e.target.classList.add('active')
        foodMenuList.classList ='food-item-wrap '+ e.target.getAttribute('data-food-type')
    }
})


// on scroll animation

let scroll = window.requestAnimationFrame || function(callback) {window.setTimeout(callback, 1000/60)}

let elToShow = document.querySelectorAll('.play-on-scroll')

isElInViewPort = (el) => {
    let rect = el.getBoundingClientRect()

    return (
        (rect.top <= 0 && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    )
}

loop = () => {
    elToShow.forEach((item, index) => {
        if (isElInViewPort(item)) {
            item.classList.add('start')
        } else {
            item.classList.remove('start')
        }
    })

    scroll(loop)
    
}

loop()


// mb-nav


let mbnavs = document.getElementsByClassName('mb-nav-item')

Array.from(mbnavs).forEach((item,index) => {
    item.onclick = (e) => {
        let curr = document.querySelector(".mb-nav-item.active")
        item.classList.add('active')
        curr.classList.remove('active')
    }
 })