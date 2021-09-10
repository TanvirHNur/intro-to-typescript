const salary:number = 4000;


// array
const friendSalaries:number[] = [2000,3000,3000,2000]

const friends: string[] =['rakib', 'sakib', 'rony', 'jony'];

friendSalaries[0] = 4000;
friendSalaries[1] = 3800;
// friendSalaries[3] ='5600'; //can not assign string in number declared array

// friendSalaries.push('slaj'); //can not assign string in number declared array

friendSalaries.push(4999);

// friends.push(2332); //can not assign number  in string declared number
friends.push('karma')



// let max = '0';
let max = 0;
for (const salary of friendSalaries){
    if (salary > max){
        max = salary;
    }

}
