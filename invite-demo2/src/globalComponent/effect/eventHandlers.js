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
  