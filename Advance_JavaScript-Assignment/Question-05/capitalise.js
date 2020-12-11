const str = 'this is some sentence in which i will capitalise first letter of each word';
const capitaliseFirst = (str = '') => {
    const strArr = str.split(' ');
   const newArr = strArr.map(word => {
      const newWord = word[0].toUpperCase() + word.substr(1, word.length - 1);
      return newWord;
   });
   return newArr.join(' ');
};
console.log(capitaliseFirst(str));