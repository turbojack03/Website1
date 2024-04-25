setTimeout(function() {
    const emoji1 = document.querySelector('.emoji');

    document.addEventListener('scroll', function() {
        let value = window.scrollY;
        // Update the emoji's position based on the scroll position
        emoji1.style.marginLeft = value * 2.5 + 'px';
    });
}, 1000); // Wait for 1 second before running the code

