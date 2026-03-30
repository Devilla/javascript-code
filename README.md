# Daily Javascript tricky codes

> 1. IndicesInDescendingOrderArray
```Find the indices (positions = index + 1 ) of maximum number in an array in decending order If you want to find the indices of array elements sorted in descending order by value, here’s a clean JavaScript solution:

Example:
Input: [4, 8, 1, 8, 2, 5]
Output: [1, 3, 5, 0, 4, 2]
(These are indices sorted by the values they point to, in descending order)
```

> 2. Array Reduce Transformation
```
Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

If the length of the array is 0, the function should return init.

Please solve it without using the built-in Array.reduce method.

 

Example 1:

Input: 
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0
Output: 10
Explanation:
initially, the value is init=0.
(0) + nums[0] = 1
(1) + nums[1] = 3
(3) + nums[2] = 6
(6) + nums[3] = 10
The final answer is 10.
Example 2:

Input: 
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100
Output: 130
Explanation:
initially, the value is init=100.
(100) + nums[0] * nums[0] = 101
(101) + nums[1] * nums[1] = 105
(105) + nums[2] * nums[2] = 114
(114) + nums[3] * nums[3] = 130
The final answer is 130.
Example 3:

Input: 
nums = []
fn = function sum(accum, curr) { return 0; }
init = 25
Output: 25
Explanation: For empty arrays, the answer is always init.

```
<img width="725" height="669" alt="Screenshot 2026-03-30 at 8 58 02 PM" src="https://github.com/user-attachments/assets/f83b45db-3d22-4503-b16e-2b161a7d7503" />
<img width="724" height="667" alt="Screenshot 2026-03-30 at 8 57 25 PM" src="https://github.com/user-attachments/assets/db2aa197-be66-46a4-a39c-35f21df22796" />
