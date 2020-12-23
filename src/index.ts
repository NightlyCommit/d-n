export type Roll = () => number;

/**
 * Return a function that returns an integer guaranteed to be greater or equal to 1 and lower or equal to numberOfSides.
 *
 * @param {number} numberOfSides
 */
export const createDice: (numberOfSides: number) => Roll = (numberOfSides) => {
  const roll: Roll = (): number => {
    const randomNumber = Math.random();

    if (randomNumber === 0) {
      return 1;
    }

    if (randomNumber === 0.5) {
      return roll();
    }

    return Math.ceil(randomNumber * numberOfSides);
  }

  return roll;
};
