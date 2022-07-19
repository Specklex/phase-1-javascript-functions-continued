// code your solution here
function saturdayFun(activity){
    if (activity == undefined){
        return `This Saturday, I want to roller-skate!`
    }
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity){
    if (activity == undefined){
        return `This Monday, I will go to the office.`;
    }
    else return `This Monday, I will ${activity}.`;
}
// It should return a function. This "inner" function should:
// take a single parameter that should default to "special". Name it however you wish.
// return a String of the form "You are ...!" where ... should be the adjective this function received wrapped in visual flair.
// It should take as parameter a String that will be used to create visual flair.
// You may call the parameter whatever you like, but its default value should be "*".
// Call example: const encouragingPromptFunction = wrapAdjective("!!!")

function wrapAdjective(symbol = '*'){
    const innerAdjective = function (adjective = 'special'){
        return `You are ${symbol}${adjective}${symbol}!`
    }
    return innerAdjective;
}
