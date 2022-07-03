// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen (monto){
    let tc_DollarToYen = 127.9/1.2 
    return(monto * tc_DollarToYen)
}

console.log(fromDollarToYen("10000"))

function fromEuroToDollar (monto){
    let tc_EuroToDollar = 1.2/1
    return(monto * tc_EuroToDollar)
}

console.log(fromEuroToDollar("10000"))



function fromYanToPound (monto){
    let tc_YanToPound = 0.8/127.9
    return(monto * tc_YanToPound)
}

console.log(fromYanToPound("10000"))

module.exports={fromYanToPound, fromEuroToDollar, fromDollarToYen}