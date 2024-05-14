function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/*
const images = [
  'img/img1.png',
  'img/img2.png',
  'img/img3.png',
  'img/img4.png',
  'img/img5.png',
  'img/img6.png',
];

const images2 = [
  'img/img1.png',
  'img/img2.png',
  'img/img3.png',
  'img/img4.png',
  'img/img5.png',
  'img/img6.png',
];

const images3 = [
  'img/img1.png',
  'img/img2.png',
  'img/img3.png',
  'img/img4.png',
  'img/img5.png',
  'img/img6.png',
];



// Popup elements
document.addEventListener('DOMContentLoaded', function() {
  const quickViewButton = document.getElementById('quick-view-btn');
  const quickViewButton2 = document.getElementById('quick-view-btn2');
  const quickViewButton3 = document.getElementById('quick-view-btn3');

  const popup = document.querySelector('.popup');
  const closeBtn = document.querySelector('.close-btn');
  const largeImage = document.querySelector('.large-image');
  const imageName = document.querySelector('.image-name');
  const imageIndex = document.querySelector('.index');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');

  let index = 0; // Track the current image index

  const updateImage = (i) => {
    largeImage.src = images[i];
    imageName.innerHTML = images[i];
    imageIndex.innerHTML = `0${i+1}`;
    index = i;
  };

  quickViewButton.addEventListener('click', () => {
    updateImage(0);  // Open the popup with the first image
    popup.classList.add('active');
  });

  closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
  });

  leftArrow.addEventListener('click', () => {
    if (index > 0) {
      updateImage(index - 1);
    }
  });

  rightArrow.addEventListener('click', () => {
    if (index < images.length - 1) {
      updateImage(index + 1);
    }
  });
});


*/


document.addEventListener('DOMContentLoaded', function() {
  function setupPopup(quickViewButtonId, images) {
    const quickViewButton = document.getElementById(quickViewButtonId);
    const popup = document.querySelector('.popup');
    const closeBtn = document.querySelector('.close-btn');
    const largeImage = document.querySelector('.large-image');
    const imageName = document.querySelector('.image-name');
    const imageIndex = document.querySelector('.index');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    let index = 0; // Track the current image index

    const updateImage = (i) => {
      largeImage.src = images[i];
      imageName.innerHTML = images[i];
      imageIndex.innerHTML = `0${i+1}`;
      index = i;
    };

    const openPopup = () => {
      updateImage(0);  // Open the popup with the first image
      popup.classList.add('active');

      // Set up navigation event listeners
      leftArrow.onclick = () => {
        if (index > 0) updateImage(index - 1);
      };
      rightArrow.onclick = () => {
        if (index < images.length - 1) updateImage(index + 1);
      };
    };

    const closePopup = () => {
      popup.classList.remove('active');
      // Clean up navigation event listeners
      leftArrow.onclick = null;
      rightArrow.onclick = null;
    };

    quickViewButton.addEventListener('click', openPopup);
    closeBtn.addEventListener('click', closePopup);
  }

  // Setting up each button and images set
  setupPopup('quick-view-btn', [
    'img/credit1.png',
    'img/credit2.png',
    'img/credit3.png',
    'img/credit4.png',
    'img/credit5.png',
    'img/credit6.png',
    'img/credit7.png',
  ]);
  setupPopup('quick-view-btn2', [
    'img/network1.png',
    'img/network2.png',
    'img/network3.png',
    'img/network4.png',
    'img/network5.png',
    'img/network6.png',
    'img/network7.png',
  ]);
  setupPopup('quick-view-btn3', [
    'img/game1.png',
    'img/game2.png',
    'img/game3.png',
    'img/game4.png',
    'img/game5.png',
    'img/game6.png',
  ]);
});


