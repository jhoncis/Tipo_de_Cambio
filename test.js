test("One dollar should be 1065833.3333333335 yen", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(10000)).toBe(1065833.3333333335); 
    expect(fromDollarToYen(10000)).not.toBe(0);
})
const { fromEuroToDollar } = require('./app.js')

test("One euro should be 12000 dollar", function(){
    // importo la funcion desde app.js
    
    // hago mi comparacion (la prueba)
    expect( fromEuroToDollar(10000) ).toBe(12000); 
    expect( fromEuroToDollar(10000) ).not.toBe(0);
})

test("One yan should be 62.54886630179828 pound", function(){
    // importo la funcion desde app.js
    const { fromYanToPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYanToPound(10000)).toBe(62.54886630179828); 
    expect(fromYanToPound(10000)).not.toBe(0);
})