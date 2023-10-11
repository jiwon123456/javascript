/**
 * 
 */
// 2개의 숫자를 입력받아 두수를 사칙연산 결과값을 출력하시오.

//2개의 숫자 입력
var input1 = 0;
var input2 = 0;

//2개의 숫자 값 받기 prompt(,"0");
input1 = Number(prompt("첫번째 숫자를 입력하세요." , "0")) 
input2 = Number(prompt("두번째 숫자를 입력하세요." , "0")) 

//결과
//더하기
document.write("<h1> 더하기 : "+(input1+input2) +"</h>","<br>")
//뺴기
document.write("<h1> 빼기 : "+(input1-input2) +"</h>","<br>")
//곱하기
document.write("<h1> 곱하기 : "+(input1*input2) +"</h>","<br>")
//나누기
document.write("<h1> 나누기 : "+(input1/input2) +"</h>","<br>")

