// Your code here
function saturdayFun(event="roller-skate"){
    return(`This Saturday, I want to ${event}!`)
}

function mondayWork(event="go to the office"){
    return(`This Monday, I will ${event}.`)
}

function wrapAdjective(flair="*"){
    return function(compliment="special") {
        return(`You are ${flair}${compliment}${flair}!`)
    }
}

const Calculator = {
    add: (function(){ return 1 + 3}),
    subtract: (function(){ return 1 - 3}),
    multiply: (function(){ return 1 * 3}),
    divide: (function(){ return 10 / 5})
}

function actionApplyer(integer,array){
    for (let i = 0; i < array.length; i++){
        integer = array[i](integer)
    }
    return integer
}