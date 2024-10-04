const hireBtn = document.querySelector('.hire-btn');

hireBtn.addEventListener('mouseover', function() {
    hireBtn.textContent = 'Click and text me in my Social Media to Hire Me!';
});

hireBtn.addEventListener('mouseout', function() {
    hireBtn.textContent = 'Hire Me';
});