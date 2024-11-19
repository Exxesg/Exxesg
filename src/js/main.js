import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';

gsap.registerPlugin(ScrollTrigger);

// Custom cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle?.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Smooth scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  smartphone: {
    smooth: true
  },
  tablet: {
    smooth: true
  }
});

// GSAP Animations
gsap.from('.hero-content h1', {
  duration: 1,
  y: 100,
  opacity: 0,
  ease: 'power4.out'
});

gsap.from('.hero-content p', {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: 'power4.out',
  delay: 0.2
});

gsap.from('.cta-buttons', {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: 'power4.out',
  delay: 0.4
});

// Scroll animations
const animateOnScroll = (elements, animation) => {
  elements.forEach(element => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      },
      ...animation
    });
  });
};

// Service cards animation
animateOnScroll(document.querySelectorAll('.service-card'), {
  duration: 1,
  y: 50,
  opacity: 0,
  stagger: 0.2,
  ease: 'power4.out'
});

// Contact form animation
animateOnScroll([document.querySelector('.contact-form')], {
  duration: 1,
  x: 50,
  opacity: 0,
  ease: 'power4.out'
});

// Form validation
const form = document.querySelector('.contact-form');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  // Add your form submission logic here
  console.log('Form submitted');
});