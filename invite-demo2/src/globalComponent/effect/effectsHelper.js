export const handleScroll = (e, canScroll, setCanScroll) => {
    if (!document.querySelector('.outer-nav').classList.contains('is-vis')) {
      e.preventDefault();
  
      const delta = (e.wheelDelta) ? -e.wheelDelta : e.detail * 20;
  
      if (delta > 50 && canScroll) {
        setCanScroll(false);
        setTimeout(() => setCanScroll(true), 800);
        updateHelper(1);
      } else if (delta < -50 && canScroll) {
        setCanScroll(false);
        setTimeout(() => setCanScroll(true), 800);
        updateHelper(-1);
      }
    }
  };
  
  export const handleClick = (e) => {
    const $this = e.target;
    if (!$this.classList.contains('is-active')) {
      const curActive = $this.parentNode.querySelector('.is-active');
      const curPos = Array.from($this.parentNode.children).indexOf(curActive);
      const nextPos = Array.from($this.parentNode.children).indexOf($this);
      const lastItem = $this.parentNode.children.length - 1;
  
      updateNavs(nextPos);
      updateContent(curPos, nextPos, lastItem);
    }
  };
  
  export const handleCTAClick = () => {
    const curActive = document.querySelector('.side-nav .is-active');
    const curPos = Array.from(curActive.parentNode.children).indexOf(curActive);
    const lastItem = curActive.parentNode.children.length - 1;
    const nextPos = lastItem;
  
    updateNavs(lastItem);
    updateContent(curPos, nextPos, lastItem);
  };
  
  import Hammer from 'hammerjs';

export const addSwipeGesture = (targetElement, handleSwipe) => {
  const mc = new Hammer(targetElement);
  mc.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
  mc.on('swipeup swipedown', handleSwipe);

  return () => {
    mc.off('swipeup swipedown', handleSwipe);
  };
};

export const addKeyUpListener = (handleKeyUp) => {
  document.addEventListener('keyup', handleKeyUp);

  return () => {
    document.removeEventListener('keyup', handleKeyUp);
  };
};

export const updateHelper = (param, updateNavs, updateContent) => {
    const curActive = document.querySelector('.side-nav .is-active');
    const curPos = Array.from(curActive.parentNode.children).indexOf(curActive);
    const lastItem = curActive.parentNode.children.length - 1;
    let nextPos = 0;
  
    if (param.type === 'swipeup' || param.keyCode === 40 || param > 0) {
      if (curPos !== lastItem) {
        nextPos = curPos + 1;
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      } else {
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      }
    } else if (param.type === 'swipedown' || param.keyCode === 38 || param < 0) {
      if (curPos !== 0) {
        nextPos = curPos - 1;
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      } else {
        nextPos = lastItem;
        updateNavs(nextPos);
        updateContent(curPos, nextPos, lastItem);
      }
    }
  };
  
  export const syncNavs = () => {
    const curActive = document.querySelector('.side-nav .is-active');
    const nextPos = Array.from(curActive.parentNode.children).indexOf(curActive);
  
    document.querySelectorAll('.side-nav, .outer-nav').forEach((nav) => {
      nav.children.forEach((item) => {
        item.classList.remove('is-active');
      });
      nav.children[nextPos].classList.add('is-active');
    });
  };

  export const updateContent = (curPos, nextPos, lastItem) => {
    document.querySelector('.main-content').children.forEach((child) => {
      child.classList.remove('section--is-active');
    });
  
    const nextSection = document.querySelector('.main-content').children[nextPos];
    nextSection.classList.add('section--is-active');
  
    const sectionChildren = nextSection.children;
  
    sectionChildren.forEach((item) => {
      item.classList.remove('section--next', 'section--prev');
    });
  
    if ((curPos === lastItem && nextPos === 0) || (curPos === 0 && nextPos === lastItem)) {
      sectionChildren.forEach((item) => {
        item.classList.remove('section--next', 'section--prev');
      });
    } else if (curPos < nextPos) {
      nextSection.classList.add('section--next');
    } else {
      nextSection.classList.add('section--prev');
    }
  
    const headerCTA = document.querySelector('.header--cta');
    if (nextPos !== 0 && nextPos !== lastItem) {
      headerCTA.classList.add('is-active');
    } else {
      headerCTA.classList.remove('is-active');
    }
  };
  
  export const setupOuterNav = () => {
    const handleNavToggleClick = () => {
      const perspective = document.querySelector('.perspective');
      perspective.classList.add('perspective--modalview');
  
      setTimeout(() => {
        perspective.classList.add('effect-rotate-left--animate');
      }, 25);
  
      const outerNavElements = document.querySelectorAll('.outer-nav, .outer-nav li, .outer-nav--return');
      outerNavElements.forEach((element) => {
        element.classList.add('is-vis');
      });
    };
  
    const handleOuterNavReturnClick = () => {
      const perspective = document.querySelector('.perspective');
      perspective.classList.remove('effect-rotate-left--animate');
  
      setTimeout(() => {
        perspective.classList.remove('perspective--modalview');
      }, 400);
  
      const outerNavElements = document.querySelectorAll('.outer-nav, .outer-nav li, .outer-nav--return');
      outerNavElements.forEach((element) => {
        element.classList.remove('is-vis');
      });
    };
  
    document.querySelector('.header--nav-toggle').addEventListener('click', handleNavToggleClick);
    document.querySelectorAll('.outer-nav--return, .outer-nav li').forEach((element) => {
      element.addEventListener('click', handleOuterNavReturnClick);
    });
  
    return () => {
      document.querySelector('.header--nav-toggle').removeEventListener('click', handleNavToggleClick);
      document.querySelectorAll('.outer-nav--return, .outer-nav li').forEach((element) => {
        element.removeEventListener('click', handleOuterNavReturnClick);
      });
    };
  };

  export const setupWorkSlider = () => {
    const handleSliderClick = (isNext) => {
      const $left = $('.slider--item-left');
      const $center = $('.slider--item-center');
      const $right = $('.slider--item-right');
      const $item = $('.slider--item');
  
      $('.slider').animate({ opacity: 0 }, 400);
  
      setTimeout(() => {
        const curLeftPos = $('.slider').children().index($left);
        const curCenterPos = $('.slider').children().index($center);
        const curRightPos = $('.slider').children().index($right);
        const totalWorks = $('.slider').children().length;
  
        if (isNext) {
          if (curLeftPos < totalWorks - 1 && curCenterPos < totalWorks - 1 && curRightPos < totalWorks - 1) {
            $left.removeClass('slider--item-left').next().addClass('slider--item-left');
            $center.removeClass('slider--item-center').next().addClass('slider--item-center');
            $right.removeClass('slider--item-right').next().addClass('slider--item-right');
          } else {
            // Handle case when reaching the last item
          }
        } else {
          if (curLeftPos !== 0 && curCenterPos !== 0 && curRightPos !== 0) {
            $left.removeClass('slider--item-left').prev().addClass('slider--item-left');
            $center.removeClass('slider--item-center').prev().addClass('slider--item-center');
            $right.removeClass('slider--item-right').prev().addClass('slider--item-right');
          } else {
            // Handle case when reaching the first item
          }
        }
  
        $('.slider').animate({ opacity: 1 }, 400);
      }, 400);
    };
  
    $('.slider--prev, .slider--next').click(function () {
      const isNext = $(this).hasClass('slider--next');
      handleSliderClick(isNext);
    });
  
    return () => {
      $('.slider--prev, .slider--next').off('click');
    };
  };

  export const setupTransitionLabels = () => {
    $('.work-request--information input').focusout(function () {
      var textVal = $(this).val();
      if (textVal === "") {
        $(this).removeClass('has-value');
      } else {
        $(this).addClass('has-value');
      }
  
      // correct mobile device window position
      window.scrollTo(0, 0);
    });
  
    return () => {
      $('.work-request--information input').off('focusout');
    };
  };
  

  