// PerspectiveContainer.js
import React, { useEffect, useRef } from 'react';
import Header from './Header';
import SideNav from './SideNav';
import MainContent from './MainContent';
import { addSwipeGesture, addKeyUpListener, updateHelper, setupOuterNav, setupWorkSlider, setupTransitionLabels } from './effect/effectsHelper'; // Import your JavaScript functions

function PerspectiveContainer() {
  const canScrollRef = useRef(true);

  const handleScroll = (e) => {
    if (!document.querySelector('.outer-nav').classList.contains('is-vis')) {
      e.preventDefault();

      const delta = (e.wheelDelta) ? -e.wheelDelta : e.detail * 20;

      if (delta > 50 && canScrollRef.current) {
        canScrollRef.current = false;
        setTimeout(() => canScrollRef.current = true, 800);
        updateHelper(1);
      } else if (delta < -50 && canScrollRef.current) {
        canScrollRef.current = false;
        setTimeout(() => canScrollRef.current = true, 800);
        updateHelper(-1);
      }
    }
  };

  const handleClick = (e) => {
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

  const handleCTAClick = () => {
    const curActive = document.querySelector('.side-nav .is-active');
    const curPos = Array.from(curActive.parentNode.children).indexOf(curActive);
    const lastItem = curActive.parentNode.children.length - 1;
    const nextPos = lastItem;

    updateNavs(lastItem);
    updateContent(curPos, nextPos, lastItem);
  };

  const handleSwipe = (e) => {
    // Handle swipe gestures if needed
  };

  useEffect(() => {
    const scrollHandler = (e) => handleScroll(e);
    document.addEventListener('wheel', scrollHandler);

    const clickHandler = (e) => handleClick(e);
    document.addEventListener('click', clickHandler);

    const ctaClickHandler = () => handleCTAClick();
    document.querySelector('.your-cta-selector').addEventListener('click', ctaClickHandler);

    const swipeHandler = (e) => handleSwipe(e);
    const removeSwipeGesture = addSwipeGesture(document.querySelector('.your-swipe-element-selector'), swipeHandler);
    const removeKeyUpListener = addKeyUpListener((e) => updateHelper(e, updateNavs, updateContent));

    const outerNavCleanup = setupOuterNav();
    const workSliderCleanup = setupWorkSlider();
    const transitionLabelsCleanup = setupTransitionLabels();

    return () => {
      document.removeEventListener('wheel', scrollHandler);
      document.removeEventListener('click', clickHandler);
      document.querySelector('.your-cta-selector').removeEventListener('click', ctaClickHandler);
      removeSwipeGesture();
      removeKeyUpListener();
      outerNavCleanup();
      workSliderCleanup();
      transitionLabelsCleanup();
    };
  }, []); // Dependency array is empty to run the effect only once after component mount

  return (
    <div className="perspective effect-rotate-left">
      <div className="container">
        <div className="outer-nav--return"></div>
        <div id="viewport" className="l-viewport">
          <div className="l-wrapper">
            <Header />
            <SideNav />
            <MainContent />
          </div>
        </div>
      </div>
      <ul className="outer-nav">
        <li className="is-active">Home</li>
        <li>Works</li>
        <li>About</li>
        <li>Contact</li>
        <li>Hire us</li>
      </ul>
    </div>
  );
}

export default PerspectiveContainer;
