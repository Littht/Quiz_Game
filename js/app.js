const randomNumber = (offset) => {
    random = Math.random() * offset;
    random = Math.floor(random)
    return random
}

/**
 * este objecto solo lo hice para centralizar todas las preguntas y opciones
 * organizadolas por dificultad
 * 
 */
const questionsWithOptions = {
    easy: easyQuestions,
    medium: mediumQuestions,
    hard: hardQuestions
}

const setOption = ({ letter = 'A', option = '', id, answer } = {}) => {
    const nodeOption = document.querySelector(id)
    nodeOption.innerHTML = `${letter}: ${option}`;

    /**
     * Evento click para cada opcion
     */
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
    /**
     * Selecctiona del objeto { easy: {...}, medium: {...}, hard: {...} } el que tenga el nombre que haya en difficulty, por defecto viene easy
     */
    const questions = questionsWithOptions[difficulty][index];

    const options = [...questions.options];
    options.push(questions.answer);
    options.sort(() => Math.random() - 0.5);
    document.querySelector("#answer").innerHTML = questions.question;
    /**
     * options es un array, asi que puedes iterarlo para configurarlos todos en un solo proceso
     */
    options.forEach((option, index) => setOption({
        /**
         * este alphabet solo lo cree para que la letra se asigne automaticamente por si quieres agregar mas opciones xD
         */
        letter: alphabet.charAt(index),
        option: option,
        id: `#option${index + 1}`,
        value: option,
        /**
         * le estoy pasando al configurador la respuesta correcta para que el evento click lo maneje
         */
        answer: questions.answer
    }))
}

const buildQuestion = () => {
    /**
     * transforma { easy: {...}, medium: {...}, hard: {...} }
     * en
     * ['easy', 'medium', 'hard']
     */
    const keys = Object.keys(questionsWithOptions)
    const difficulty = keys[Math.floor(Math.random() * keys.length)]
    const offset = questionsWithOptions[difficulty].length
    const index = randomNumber(offset)
 
    setAnswerWithQuestions({
        // selecciona una dificultad random
        difficulty,
        // selecciona un index random de dicha dificultad
        index
    })
}

buildQuestion()