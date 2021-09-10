const city:string = 'Dhaka';

const fruits: string[] = ['mango', 'banana', 'apple'];


// object type declared in two method
const student: {name:string, age:number,salary: number} = {
    name: 'jamal',
    age: 11,
    salary: 2333
}


type Person = {name:string, 
    age:number,
    salary: number};

const student1:Person  = {
    name: 'jamal',
    age: 11,
    salary: 2333
};

const employee: Person ={
    name: 'kamal',
    age: 55,
    salary: 300000
}

function getSalary (player: {name?:string, salary:number}){
    return player.salary *2;
}

getSalary({salary:20000})

function getSalary2 (player: Person):number{
    return player.salary;
}


