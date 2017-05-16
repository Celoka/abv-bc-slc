(function() {
  'use strict';
   
   describe('Prime numbers in array: ', function () {
 
    describe('Return the a list of prime numbers for a given range of number', function () {
 
       it('should return [2,3] for 5', function () {
         expect(getPrimes(5)).toEqual([2, 3, 5]);
       });
       it ('should return [2, 3, 5, 7] for 10', function(){
       	expect (getPrimes(10)).toEqual([2, 3, 5, 7]);
       });
       it ('should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47] for 50', function() {
       	expect (getPrimes(50)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]);
       });
       it ('should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97] for 100', function() {
       	expect (getPrimes (100)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
       });
       it ('should return [2, 3, 5, 7, 11, 13, 17, 19] for 20', function () {
       	expect (getPrimes(20)).toEqual([2,3,5,7,11,13,17,19]);
       });
       it ('should return [2,3,5,7,11,13] for 15', function() {
       	expect (getPrimes (15)).toEqual([2,3,5,7,11,13]);
       });
       it ('should return [2,3,5,7,11,13,17,19,23,29] for 30', function () {
       	expect (getPrimes (30)).toEqual([2,3,5,7,11,13,17,19,23,29]);
       });
       it ('should return Arrays are not accepted', function () {
       	expect (getPrimes ([])).toEqual('Arrays are not accepted');
       });
       it ('should return  Strings are not accepted argument types', function() {
       expect ('Strings')).toEqual('Strings are not accepted argument types');
       });
       it ('should return Enter number greater than negative number, 0 and 1', function () {
       expect (getPrimes (0)).toEqual ('Enter number greater than negativenumber, 0 and 1');
       });
       it ('should return Enter number greater than negative number, 0 and 1', function () {
       expect (getPrimes (-1)).toEqual ('Enter number greater than negative number, 0 and 1')
       });
    }); 
})();