/**======================================================
Question No. 1: Shift left and shift right string?
======================================================**/
/**Shift string characters 
Write a function which accepts string, shiftLeft and shiftRight parameteres
Let's say string = "abcdef", shiftLeft=3, shiftRight = 3;
Result after applying shiftLeft=3 string will change to 
step 1  = bcdefa
step 2  = cdefab
step 3  = defabc
Final = defabc

Result after applying shiftRight=3 string 'defabc' will change to 
step 1  = cdefab
step 2  = bcdefa
step 3  = abcdef
Final = abcdef
*/

function shiftArrayElements(str, shiftLeft, shiftRight) {
  let array = str.split(""); 
  shiftedLeftArray = array.concat(array.splice(0, shiftLeft));
  console.log(shiftedLeftArray);
  shiftedRightArray = shiftedLeftArray.splice(shiftedLeftArray.length - shiftRight, shiftedLeftArray.length).concat(shiftedLeftArray);
  return shiftedRightArray.join("");
}

console.log(shiftArrayElements("abcdef", 3, 3));
/**=====================================================
Question No. 2: Find Unique elements in Array
======================================================**/
/**Answer: */
[1, 2, 3, 5, 1, 5, 9, 1, 2, 8].reduce((con, cur) => {
	if(con.indexOf(cur) < 0) con.push(cur)
		return con;
}, []);