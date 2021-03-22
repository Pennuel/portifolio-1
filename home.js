const navslide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navlinks');
    const navlinks = document.querySelectorAll('.navlinks li');
    // animate links
    hamburger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');

        hamburger.classList.toggle('toggle');
    });   
    // navlinks.forEach((link,index) => {
    //        link.style.style.animation = 'navLinkfade 0.5s ease forwards $(index / 4)s';

    // });
}
navslide();