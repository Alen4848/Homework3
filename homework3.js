  alert("Ardyoq ovqeren??????");
  alert("hey -_-")
  //A function that takes at least three arguments and returns the result of some set of operations using those arguments
  const f1 = function(a,b,c,d,e,f){
  
    return ((a*b+c)+(d+e-f)); 
  
  };
  
  console.log(f1(2,4,6,8,10,11))


  //A function that takes no arguments and returns something
  const f2 = function(){
    
    return 3;
  };
  
  console.log(f2())


  //A function that takes arguments, does something but does not return anything
  const f3 = function(a){
  
    const b = a + ' is number';
    console.log(b)   
  };
  console.log(f3(4))


  //A function that takes three strings and returns the string that is the longest
  const f4 = function(st1,st2,st3){

    if(st1.length > st2.length && st1.length > st3.length){
 
      return st1;
    
    }else if(st2.length > st3.length && st2.length > st1.length){
    
      return st2;
    
    }else{
    
      return st3;
 
    };
  
  };
  console.log(f4('calculus','discrete_Math','programing is better)))))'))
  
 
  //A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger
  const f5 = function(num1,num2){
  
    if(num1===num2){
    
      return 0;
    
    }else if (num1 > num2){
    
      return 1;
    
    }else if (num1 < num2){
    
      return -1;
    };
  };
    console.log(f5(7,5))
 
 
  //Create a multiply function (that multiplies the two given arguments together and returns the result)
  
  const f6 = function(wide,length){  
    const area = wide * length;
    return area;  
  };
    console.log(f6(4,2))
  


  //Create a divide function (that divides the first argument by the second and returns the result)
  
  const f7 = function(TotalSalary,WorkedMonths){
    const salary = TotalSalary / WorkedMonths;
    return salary;    
  };
    console.log(f7(4,2))
  
 
  //Create a triangleArea function that takes base and height as input and returns the area of a triangle without using * or / 
  
  const triangleArea = function(base,height){
    const a = f7(f6(base,height),2)
    return a;  
  };
  console.log(triangleArea(2,3))
  


  //Create a function called numLength that takes a number and returns the number of characters in the number
  const numLength = function(number1){ 
    const b = number1 + "";  // or number1.toString();
    return b.length;  
  }
   console.log(numLength(147))  


  //Create a function that takes two strings and a number.  If the length of the two strings concatenated together is greater than the given number, return 1, else return -1
 
  const f10 = function(str1,str2,number){
    
    if((str1.length + str2.length) > number){
      
      return 1;
   
    }else {
    
      return -1;
    };
     
  };
  console.log(f10("ardyoq_ovqeren","jan!",7))
  
  
  //Create a function runStuff that takes two numbers and a string.  If the string is 'rectangle', return the area of a rectangle using the two numbers as base and height.  If the string is 'triangle', return the area of a triangle (you can use the triangleArea function here).  If the string does not match 'rectangle' or 'triangle', return -1.
  
  const runStuff = function(num1,num2,string){
    
    if(string === 'rectangle'){
    
      return num1*num2;
    
    }else if (string === 'triangle'){
  
      return triangleArea(num1,num2);    
    }else {
    	return -1;
    }
  };
  console.log(runStuff(4,2,"triangle"));
        





  console.log("")
  console.log("")
  console.log("")
  console.log("")
  console.log("")
  console.log("")
  console.log("such an booring tnayin -_-")