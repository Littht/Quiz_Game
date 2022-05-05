const randomNumber = () => {
    random = Math.random() * 2;
    random = Math.floor(random)
    return random
}

const easyOptions = (index) => {
    var objectQuestions = easyQuestions[index];
    var options = [...objectQuestions.options];
    options.push(objectQuestions.answer);
    options.sort(() => Math.random() - 0.5);
    document.getElementById("answer").innerHTML = objectQuestions.question;
    document.getElementById("option1").innerHTML = `A: ${options[0]}`;
    document.getElementById("option2").innerHTML = `B: ${options[1]}`;
    document.getElementById("option3").innerHTML = `C: ${options[2]}`;
    document.getElementById("option4").innerHTML = `D: ${options[3]}`;
    return options
}
const mediumOptions = (index) => {
    var objectQuestions = mediumQuestions[index];
    var options = [...objectQuestions.options];
    options.push(objectQuestions.answer);
    options.sort(() => Math.random() - 0.5);
    document.getElementById("answer").innerHTML = objectQuestions.question;
    document.getElementById("option1").innerHTML = `A: ${options[0]}`;
    document.getElementById("option2").innerHTML = `B: ${options[1]}`;
    document.getElementById("option3").innerHTML = `C: ${options[2]}`;
    document.getElementById("option4").innerHTML = `D: ${options[3]}`;
    return options
}
const hardOptions = (index) => {
    var objectQuestions = hardQuestions[index];
    var options = [...objectQuestions.options];
    options.push(objectQuestions.answer);
    options.sort(() => Math.random() - 0.5);
    document.getElementById("answer").innerHTML = objectQuestions.question;
    document.getElementById("option1").innerHTML = `A: ${options[0]}`;
    document.getElementById("option2").innerHTML = `B: ${options[1]}`;
    document.getElementById("option3").innerHTML = `C: ${options[2]}`;
    document.getElementById("option4").innerHTML = `D: ${options[3]}`;
    return options
}

const selectOption = (index) => {
    let validate = options[index] == objectQuestions.answer;

    if (validate) {
        alert("respuesta correcta");
    }
    else {
        alert("respuesta incorrecta manito");
    }
}







for (let i = 1; i <= 3; i++) {
    if (i <= 1) {
        easyOptions(randomNumber())
    }
    else if (i <= 2) {
    }
    else if (i <= 3) {
    }

}