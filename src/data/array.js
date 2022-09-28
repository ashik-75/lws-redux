export const array = [
  {
    id: 1,
    category: "array",
    question: "check array is empty or not?",
    answer: `
        const clone = (arr) => arr.slice(0);
        
        // Or
        const clone = (arr) => [...arr];
        
        // Or
        const clone = (arr) => Array.from(arr);
        
        // Or
        const clone = (arr) => arr.map((x) => x);
        
        // Or
        const clone = (arr) => JSON.parse(JSON.stringify(arr));
        
        // Or
        const clone = (arr) => arr.concat([]);
        
        // Or
        const clone = (arr) => structuredClone(arr);`,
  },
  {
    id: 2,
    category: "array",
    question: "Clone An Array?",
    answer: `
        const clone = (arr) => arr.slice(0);
        
        // Or
        const clone = (arr) => [...arr];
        
        // Or
        const clone = (arr) => Array.from(arr);
        
        // Or
        const clone = (arr) => arr.map((x) => x);
        
        // Or
        const clone = (arr) => JSON.parse(JSON.stringify(arr));
        
        // Or
        const clone = (arr) => arr.concat([]);
        
        // Or
        const clone = (arr) => structuredClone(arr);`,
  },
  {
    id: 3,
    category: "array",
    question: "Find the maximum item of an array by given key",
    answer: `const maxBy = (arr, key) => arr.reduce((a, b) => (a[key] >= b[key] ? a : b), {});`,
  },
    {
    id: 4,
    example: `const arr = [1,1,34,546,89,65] ;
   emptyArray(arr);
console.log(arr) // []`,
    question: "Empty an Array.",
    answer: `const emptyArray = (array) => array.length = 0;`,
  },
];
