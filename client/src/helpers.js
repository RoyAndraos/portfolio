export const animateAboutSection = (
  tl,
  wrapperRef,
  listArray,
  Power4,
  delay
) => {
  tl.fromTo(
    wrapperRef,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      ease: Power4.easeIn,
      duration: 1,
      delay: 1.5,
    }
  );
  listArray.forEach((item, index) => {
    tl.fromTo(
      item,
      {
        opacity: 0,
        x: 20,
      },
      {
        opacity: 1,
        x: 0,
        ease: Power4.easeInOut,
        duration: 0.5,
      },
      delay + index * 0.1 // Staggered delay
    );
  });
};
