 /////////   ЗАДАЧНИК


////////////////////////////////////////   Знайти кількість островів в  массиві   ////////////////////////////////////////////////////


let grid1 = [
    ['1','1','1','1','0'],
    ['1','1','0','1','0'],
    ['1','1','0','0','0'],
    ['0','0','0','0','1']
];

let grid2 = [
    ['1','1','0','0','0'],
    ['1','1','0','0','0'],
    ['0','0','1','0','0'],
    ['0','0','0','1','1']
];

let numIslands = function(grid) {
    if (grid.length === 0) return 0
     let counter = 0;

    function markNeighbours(binaryMatrix, R,C) {
        binaryMatrix[R][C] = '6';
        if (binaryMatrix[R-1]?.[C] === '1') { markNeighbours(binaryMatrix, R-1,C)}
        if (binaryMatrix[R+1]?.[C] === '1') { markNeighbours(binaryMatrix, R+1,C)}
        if (binaryMatrix[R][C-1] === '1') { markNeighbours(binaryMatrix, R,C-1)}
        if (binaryMatrix[R][C+1] === '1') { markNeighbours(binaryMatrix, R,C+1)}
    }

    for (let R  = 0; R <  grid.length; R++) {
        for (let C  = 0; C < grid[0].length; C++) {

            if (grid[R][C] === '1' ) {
                counter++;
                markNeighbours(grid, R,C);
            }
        }
    }
    return counter;
};
console.log(numIslands(grid1));
console.log(numIslands(grid2));


////////////////////////////////////////////  Знайти в  строці  перший  унікальний символ  /////////////////////////////////////////



let firstUniqChar = function (s) {
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
      let current = s[i];
  
      if (map.has(current)) {
        map.set(current, map.get(current) + 1);
      } else {
        map.set(current, 1);
      }
    }
  
    for (let i = 0; i < s.length; i++) {
      if (map.get(s[i]) === 1) {
        return i;
      }
    }
    return -1;
  };
  
  
  firstUniqChar('1234512');


///////////////////////////////////////////// Найти пересечение двух массивов /////////////////////////////////////////////////////

const inp1 = [1, 2, 2, 1,  ];
const inp2 =    [2, 2];

//output [2, 2]

const intersect  =  (s1, s2) => {
let n = []
for (let i = 0; i<s1.length; i++){
  for (let q = 0; q<s2.length; q++){
    if (s1[i] === s2[q] ){
      n.push(s2[q]);
      s2[q] = '';
      break
    }
  }
}
return n
}
console.log(intersect(inp1, inp2));


/////////////////////////////////////////  купуємо акції і продаємо    //////////////////////////////////////////////////////

let prices1 = [7, 1, 3, 5, 6, 4]; // 5 -- найкраща вигода від купівлі  і продажі
let prices2 = [7, 6, 4, 3, 1]; // 0  

let maxProfit = function (prices) {
  let minPrise = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
     const current = prices[i];

    if (current < minPrise) {
      minPrise = current;
    }
    if (current - minPrise > maxProfit){
     maxProfit = current - minPrise
    }
  }
  return maxProfit;
};


console.log(maxProfit(prices1));
console.log(maxProfit(prices2));

                //////////купуємо акції і продаємо #2 (тепер иожна купляти і продавти не один раз)/////////////

 const prices1 = [7, 1, 5, 40, 60, 3, 6, 4]; // 62 -- найкраща вигода від купівлі  і продажі
 const prices2 = [7, 6, 4, 3]; // 0  
 
 let maxProfit = function (prices){
   let result = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > prices[i-1]){
      result += prices[i] - prices[i-1]
    }
  }  
  return result;
 };
 
 console.log(maxProfit(prices1));
 console.log(maxProfit(prices2));                              


/////////////////////////////////////Чи правильна послідовність відкритих і закритих скобок////////////////////////////////////

let arr = '{{{[]}]}}}'

function findPeir (str) {
  if(str.includes('()') || str.includes('{}') || str.includes('[]') ){
    str = str.replace('()', '');
    str = str.replace('{}', '');
    str = str.replace('[]', '')
   return findPeir (str)
  }  
return str === '' ? true : false
}

console.log(findPeir(arr)); //false ( ще є й  оптимізованіші методи виконання)

//////////////////////////////////////////////Знайти максимальний контейнер для води///////////////////////////////////////////////


const input1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]; // 49
const input2 = [1, 1]; // 1
const input3 = [4, 3, 2, 1, 4]; // 16
const input4 = [0, 0, 100]; // 2

function maxArea(height)  {
  let maxCub = 0;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    let current = Math.min(height[l], height[r]) * (r - l)
    maxCub = Math.max(maxCub, current)

    if(height[r] >  height[l]){
      l++
    }else {
      r--
    }
  }
  return maxCub
}

console.log(input1, maxArea(input1));
console.log(input2, maxArea(input2));
console.log(input3, maxArea(input3));
console.log(input4, maxArea(input4));



//////////////////////////////////////////////////  ПАЛІНДРОМ   //////////////////////////////////////////////////////////////



// function palindrom(word) {
//     word = word.toLowerCase();
//     for (let i = 0; i < word.length / 2; i++) {
//         if (word[i] !== word[word.length - i - 1]) {
//             return false;
//         }
//     }
//     return true;
// }


function palindrom(word) {
    word = word.toLowerCase();
    return word === word.split('').reverse().join('')
}

console.log(palindrom('aaaZzaAa'));


//////////////////////////////////////////////////// ДОДАВАННЯ І ВІДНІМАННЯ ФУНКЦІЙ  ////////////////////////////////////////////

function two(callback) {
    return callback ? callback(2) : 2
}
function three(callback) {
    return callback ? callback(3) : 3
}
function four(callback) {
    return callback ? callback(4) : 4
}
  
function plus(a) {
    return (b) => a + b
}
function minus(a) {
   return (b) =>   b - a 
}
  
console.log(two(plus(three()))); // 5
console.log(four(minus(two()))); // 2
console.log(four(plus(four(plus(four())))))


///////////////////////////////////////////////////МАССИВ ЛИШЕ ІЗ НЕПОВТОРНИХ ЧИСЕЛ ///////////////////////////////////////////////  


function linearWithoutRepeat(arr) { // O(N)
    const result = []
    const dictionary = {}
    for (let i of arr) { 
        dictionary[i] = dictionary[i] ? dictionary[i] + 1 : 1 ;
    }
   
    for (let i of arr) {
        if (dictionary[i] === 1) {
            result.push(i);
        }
    }
    return result;
}
console.log(linearWithoutRepeat([1,1,2,2,3,4,5,5,5,5, 7,])) //  [3, 4, 7]


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////