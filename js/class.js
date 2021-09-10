"use strict";
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
        this.millage = 1000;
    }
    getTotalPrice(tax) {
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;
        return total;
    }
    getActualMillage() {
        // const realMillage = this.millage;
        // return this.millage + 5000;
        return this.millage + 5000;
    }
}
const myCar = new Car('toyota', 1000);
const totalPrice = myCar.getTotalPrice(25);
console.log(totalPrice);
