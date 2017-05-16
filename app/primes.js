function getPrimes(n) {
     if (typeof n === 'undefined') {
       return undefined;
     } else if (typeof n <= 1) {
       return 'Argument must greater than One';
     } else if ((n instanceof Array)) {
       return 'Arrays are not accepted';
     } else if (arguments.length > 1) {
       return 'Only one argument is required';
     } else if (typeof n === 'string') {
       return 'Strings are not accepted argument types';
     } else if (typeof n === 'object') {
       return 'Objects are not accepted argument types';
     } else if (typeof n !== 'number') {
       return 'Only numbers are accepted';
     } else if (n <= 1) {
       return 'Enter number greater than negative, 0 and 1';
     } else if (n > 1) {
       const check = [];
       const allPrimes = [];
       let i;
       let j;
 
       for (i = 2; i <= n; i += 1) {
         if (!check[i]) {
           allPrimes.push(i);
           for (j = i << 1; j <= n; j += i) {
             check[j] = j;
           }
         }
       }
       return allPrimes;
     }
}