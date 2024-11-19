// Portfolio filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;

    // Filter portfolio items
    portfolioItems.forEach(item => {
      if (filter === 'all' || item.dataset.category === filter) {
        gsap.to(item, {
          duration: 0.5,
          opacity: 1,
          scale: 1,
          ease: 'power2.out'
        });
      } else {
        gsap.to(item, {
          duration: 0.5,
          opacity: 0.3,
          scale: 0.95,
          ease: 'power2.out'
        });
      }
    });
  });
});

// Portfolio item hover animations
portfolioItems.forEach(item => {
  const overlay = item.querySelector('.portfolio-overlay');
  const image = item.querySelector('img');

  item.addEventListener('mouseenter', () => {
    gsap.to(overlay, {
      duration: 0.3,
      opacity: 1,
      ease: 'power2.out'
    });
    gsap.to(image, {
      duration: 0.6,
      scale: 1.1,
      ease: 'power2.out'
    });
  });

  item.addEventListener('mouseleave', () => {
    gsap.to(overlay, {
      duration: 0.3,
      opacity: 0,
      ease: 'power2.out'
    });
    gsap.to(image, {
      duration: 0.6,
      scale: 1,
      ease: 'power2.out'
    });
  });
});