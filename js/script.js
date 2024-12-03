// Text Changing Animation

// var typed = new Typed('#element', {
//     strings: ['<i>We make the ordinary, extraordinary.</i>', 
//         '<i>Amazing Furniture, Even Better Price Tag.</i>'],
//     typeSpeed: 50,
//     loop: true,
//   });

  document.querySelector('.menu').addEventListener('click', () => {
    const navMenu = document.querySelector('.left ul');
    navMenu.classList.toggle('show');
});

