
const Car = function (manufacturer, price, engineType){
    this.manufacturer = manufacturer; 
    this.price = price; 
    this.engineType = engineType; 

}

const Fiat_500 = new Car("Fiat", 500000,"Petrol"); 
const Ford = new Car("Ford", 13000, "Diesel"); 
const Tesla = new Car("Tesla", 100000, "Electric"); 
const Toyota = new Car("Toyota", 10000, "Diesel"); 
const Bentley = new Car("Bentley", 123000, "Petrol"); 

const cars = ['Fiat_500', 'Ford', 'Tesla', 'Toyota', 'Bentley']; 

const total = cars.reduce((accumulator, cars) => {
    return accumulator +  cars; 
  }, {}); 

  console.log(total)


module.exports = Car; 



// Create  Car class. The car should have properties representing manufacturer, price and engine type.
