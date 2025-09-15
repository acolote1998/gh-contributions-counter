const args = process.argv.slice(2);
const fromDate = args[0];
const untilDate = args[1];

export const checkIfArgumentsAreValid = () => {
  const testAsValidDate = new Date(fromDate);
  const testAsValidUntilDate = new Date(untilDate);
  if (
    !fromDate ||
    !untilDate ||
    isNaN(testAsValidDate.getTime()) ||
    isNaN(testAsValidUntilDate.getTime()) ||
    testAsValidDate.getFullYear() < 2007 ||
    testAsValidUntilDate.getFullYear() < 2007 ||
    testAsValidUntilDate < testAsValidDate
  ) {
    throw Error;
  }
};
