$('a[href*="#"]').on('click', function(e) {
    e.preventDefault()

    $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        },
        500
    )
})

const burgerButton = document.getElementById('burger-button');
const barWrapper = document.getElementById('bar-wrapper');
const header = document.getElementById('header');
let isMenu = false;
const barListMenu = document.getElementById('bar_list_menu');
for (let i = 0; i < barListMenu.children.length; i++) {
    const child = barListMenu.children[i].firstElementChild;
    child.addEventListener('click', () => toggle());
}

const showStyle = `
    opacity: 1;
    transform: translateX(0);
`;
const hideStyle = `
    opacity: 0;
    transform: translateX(-100%);
`;

burgerButton.addEventListener('click', () => {
    toggle();
});

function toggle() {
    isMenu = !isMenu;
    if (isMenu) {
        barWrapper.style.cssText = showStyle;
        header.style.height = '100%';
        window.addEventListener('scroll', scrollEvent);
    } else {
        barWrapper.style.cssText = hideStyle;
        header.style.height = '80px';
        window.removeEventListener('scroll', scrollEvent);
    }
}

function scrollEvent() {
    window.scrollTo(0, 0)
}
