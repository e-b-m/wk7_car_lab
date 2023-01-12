const Car = require ('./car'); 

const Dealership = function(name, maximumCars, carsInStock){
    this.name = name; 
    this.maximumCars = maximumCars; 
    this.cars = []; 
    this.carsInStock = carsInStock; 

}

Dealership.prototype.addCarToStock = function(newCarToStock){
    this.cars.push (newCarToStock); 
}

Dealership.prototype.total = function(){
    return this.cars.length; 
}

// Return an array containing each car's manufacturer --> FILTERING 

Dealership.prototype.allManufacturers = function(){
    let manufacturers = []; 
    for(const car of this.cars){
        manufacturers.push(car.manufacturer)
    }
}

// Find all the cars from a given manufacturer --> FILTERING 

Dealership.prototype.getCarByManufacturer = function(manufacturer){
    const cars = this.cars.filter((car)=>{
        return car.manufacturer === manufacturer; 
    })
    return cars; 
}


// Find the total value of all the cars in stock -->   
