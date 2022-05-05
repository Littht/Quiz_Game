const randomNumber = () => {
    random = Math.random() * 2;
    random = Math.floor(random)
    return random
}

const questionsWithOptions = {
    easy: easyQuestions,
    medium: mediumQuestions,
    hard: hardQuestions
}

const setOption = ({ letter = 'A', option = '', id, answer } = {}) => {
    const nodeOption = document.querySelector(id)
    nodeOption.innerHTML = `${letter}: ${option}`;

    nodeOption.addEventListener('click', () => {
        if (option === answer) {
            alert('Correct Answer');
        } else {
            alert('Wrong Answer');
        }
    })
}

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const setAnswerWithQuestions = ({ difficulty = 'easy', index = 1 } = {}) => {
    const questions = questionsWithOptions[difficulty][index];
    const options = [...questions.options];
    options.push(questions.answer);
    options.sort(() => Math.random() - 0.5);
    document.querySelector("#answer").innerHTML = questions.question;
    options.forEach((option, index) => setOption({
        letter: alphabet.charAt(index),
        option: option,
        id: `#option${index + 1}`,
        value: option,
        answer: questions.answer
    }))
}

setAnswerWithQuestions({
    difficulty: 'easy',
    index: randomNumber()
})

/** 
 * No tengo idea de porque estas creando este loop >.>
 * supongo que es para que aparezca una pregunta de una dificultad aleatoria
 * de ser asi, con el approach actual te sugiero usar lo siguiente
 * 
 * const keys = Object.keys(questionsWithOptions)
 * 
 * setAnswerWithQuestions({
 *   difficulty: keys[Math.floor(Math.random() * keys.length)],
 *   index: randomNumber()
 * })
 * 
 * */

// for (let i = 1; i <= 3; i++) {
//     if (i <= 1) {
//         setAnswerWithQuestions({
//             difficulty: 'easy',
//             index: randomNumber()
//         })
//     }
//     else if (i <= 2) {
//     }
//     else if (i <= 3) {
//     }
// }