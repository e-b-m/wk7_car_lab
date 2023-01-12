const Car= require('./car');
let car; 

beforeEach(() => {
    car = new Car("Toyota", 10000, "Diesel"); 
})

describe('testing manufacturer', () => {
    test('can add manufacturer', () => { 
        expect(car.manufacturer).toBe("Toyota"); })
    });

describe('testing price', () => {
        test('can add manufacturer', () => { 
            expect(car.price).toBe(10000); })
        });

describe('testing engine type', () => {
            test('can add engine type', () => { 
                expect(car.engineType).toBe("Diesel"); })
            });
            