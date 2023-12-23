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
