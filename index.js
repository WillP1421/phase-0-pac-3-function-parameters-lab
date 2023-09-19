function introduction(name) {
return `Hi, my name is ${name}.`
}

function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
  }



sayHelloTo("Ray")

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
  }



function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}



