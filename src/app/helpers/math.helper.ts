/**generate a random index position for the insertion of the correct answer */
export const MathHelper = {
  generateRandomInt(arrayLength: number): number {
    // console.log('rand', Math.floor(Math.random() * (arrayLength + 1)));
    return Math.floor(Math.random() * (arrayLength + 1));
  },
};
