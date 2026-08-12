document.addEventListener('DOMContentLoaded', function() {
  let openMainMenu = null; 
  const handleMenuOpening = (detailsElement, isSubMenu = false) => {
    if (!isSubMenu) {
      if (openMainMenu && openMainMenu !== detailsElement) {
        openMainMenu.removeAttribute('open');
      }
      detailsElement.setAttribute('open', '');
      openMainMenu = detailsElement;
    } else {
      detailsElement.setAttribute('open', '');
    }
  };
  const mainMenuDetails = document.querySelectorAll('.header__inline-menu > ul > li > header-menu > details');
  mainMenuDetails.forEach(detailsElement => {
    const summaryElement = detailsElement.querySelector('summary');
    summaryElement.addEventListener('mouseenter', function() {
      handleMenuOpening(detailsElement);
    });
    detailsElement.addEventListener('mouseleave', function() {
      setTimeout(() => {
        if (!detailsElement.matches(':hover')) {
          detailsElement.removeAttribute('open');
          if (openMainMenu === detailsElement) {
            openMainMenu = null;
          }
        }
      }, 200); // Delay in ms
    });
  });
  const submenuDetails = document.querySelectorAll('.header__submenu details');
  submenuDetails.forEach(detailsElement => {
    const summaryElement = detailsElement.querySelector('summary');
    summaryElement.addEventListener('mouseenter', function(event) {
      event.stopPropagation(); 
      handleMenuOpening(detailsElement, true); 
    });
    detailsElement.addEventListener('mouseleave', function() {
      setTimeout(() => {
        if (!detailsElement.matches(':hover')) {
          detailsElement.removeAttribute('open');
        }
      }, 1000); // Adjust delay as needed
    });
  });
});

