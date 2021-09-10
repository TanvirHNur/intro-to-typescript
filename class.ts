class Car {
    model: string;
    price: number;
    private millage: number
    constructor(model: string, price: number){
        this.model= model;
        this.price = price;
        this.millage = 1000;
    }
    getTotalPrice(tax:number):number {
        const taxAmount = this.price * tax /100;
       const total = this.price + taxAmount;
       return total;
    }
    getActualMillage():number{
        // const realMillage = this.millage;
        // return this.millage + 5000;
        return this.millage + 5000;

    }
}

const myCar = new Car('toyota', 1000);
const totalPrice:number = myCar.getTotalPrice(25);
console.log(totalPrice)
