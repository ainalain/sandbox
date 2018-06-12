export const convertToLowerCase = (str: string) => {
  const arr = str.split(' ');
  const lowArr = arr.map((word: string) => word.toLowerCase());

  return lowArr.join(' ');
};
