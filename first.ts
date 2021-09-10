
/* 
let money = 6000;
money = 'It is nothing';
money= false;
let honey = ''
let funny = false;
money = 20;

 */

let money:number = 199;
let honey:string = 'Oh, it is vrey strict'
let funny:boolean = false;


const age:number = 10;

// honey = 33;




function add0(first:number, second:number):number{
    const result = first + second;

    return result ;
}

//  const ouptut1:number= add(33, 43)
//  const ouptut:string = add(33, 43)



// multi purpose
function add(first:number | string, second:number | string):number | string{
    // const result:string | number = first + second;
    const result = first;
    const result1 = second;
    return result;
}

 const ouptut:number | string= add(33, 43)
 const fullname = add('raksb', 'shkioa')


// no parameter function, have to write void

function addition(number:number):void{
    console.log(2*20)
}








const myNum = 6;

console.log('first day of typescript', myNum)