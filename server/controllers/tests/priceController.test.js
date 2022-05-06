const { calculatePrice } = require('../priceController');

describe ('test on priceController', ()=>{
    it ('should calculate the price correctly', () => {
        expect(calculatePrice('011', '016', 1, 20)).toBe(0);
        expect(calculatePrice('011', '016', 1, 180)).toBe(28.5);
        expect(calculatePrice('011', '016', 2, 20)).toBe(0);
        expect(calculatePrice('011', '016', 2, 80)).toBe(3.8);
        
    });
});