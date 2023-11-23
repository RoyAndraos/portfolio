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

export const selectRandomFrogs = (frogStable) => {
  // Copy the original array to avoid modifying it directly
  const availableFrogs = [...frogStable];

  // Initialize an array to store the selected frogs
  const selectedFrogs = [];

  // Loop to randomly select 3 frogs
  for (let i = 0; i < 3; i++) {
    // Randomly select an index from the available frogs
    const randomIndex = Math.floor(Math.random() * availableFrogs.length);

    // Remove the selected frog from the available frogs and add it to the selectedFrogs array
    const [selectedFrog] = availableFrogs.splice(randomIndex, 1);
    selectedFrogs.push(selectedFrog);
  }
  return selectedFrogs;
};

export const frogStable = [
  {
    name: "Hopper",
    color: "blue",
    number: "32",
  },
  {
    name: "Legs",
    color: "red",
    number: "79",
  },
  {
    name: "Bouncer",
    color: "brown",
    number: "6",
  },
  {
    name: "Springs",
    color: "purple",
    number: "48",
  },
  {
    name: "Fred",
    color: "black",
    number: "8",
  },
];
