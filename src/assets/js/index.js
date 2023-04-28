const $spMenu = document.querySelector('.js-sp-menu')
const $spMenuBox = document.querySelector('.js-sp-menu-box')
const $spMenuItem = document.querySelectorAll('.js-sp-menu-item')
console.log($spMenuItem)

function menuSwitch() {
    if($spMenu.classList.contains('active')) {
        $spMenu.classList.remove('active')
    } else {
        $spMenu.classList.add('active')
    }
}

function itemSwitch() {
    if($spMenuBox.classList.contains('active')) {
        $spMenuBox.classList.remove('active')
    } else {
        $spMenuBox.classList.add('active')
    }
}

for (let i = 0; i < $spMenuItem.length; i++) {
    $spMenuItem[i].addEventListener('click', itemSwitch)
    $spMenuItem[i].addEventListener('click', menuSwitch)
}


$spMenu.addEventListener('click', menuSwitch)
$spMenu.addEventListener('click', itemSwitch)


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    autoplay: {
        delay: 2000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });