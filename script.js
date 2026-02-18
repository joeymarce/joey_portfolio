// Typewriter Animation
const textElement = document.getElementById('typewriter');
const roles = ["BSIT Student", "Web Developer", "Python Programmer"];
let roleIndex = 0, charIndex = 0, isDeleting = false;

function type() {
    const current = roles[roleIndex];
    textElement.innerText = isDeleting ? current.substring(0, charIndex--) : current.substring(0, charIndex++);

    if (!isDeleting && charIndex > current.length) { isDeleting = true; setTimeout(type, 2000); }
    else if (isDeleting && charIndex < 0) { isDeleting = false; roleIndex = (roleIndex + 1) % roles.length; setTimeout(type, 500); }
    else { setTimeout(type, isDeleting ? 100 : 200); }
}

// Mobile Menu Toggle
const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');

menuIcon.onclick = () => {
    mobileMenu.classList.toggle('active');
    menuIcon.querySelector('i').classList.toggle('fa-bars');
    menuIcon.querySelector('i').classList.toggle('fa-times');
}

document.querySelectorAll('.mobile-link').forEach(link => {
    link.onclick = () => {
        mobileMenu.classList.remove('active');
        menuIcon.querySelector('i').classList.replace('fa-times', 'fa-bars');
    }
});

window.onload = type;