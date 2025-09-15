const args = process.argv.slice(2);
const fromDate = args[0];
const untilDate = args[1];

export const checkIfArgumentsAreValid = () => {
  if (!fromDate || !untilDate) {
    throw Error;
  }
};
