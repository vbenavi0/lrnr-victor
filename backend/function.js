async function getEvaluation(question, submission) {
    return await fetch('http://localhost:5000/evaluation?question=' + question + '&submission=' + submission)
    .then(response => response.json())
    .then(data => data)
}

async function getQuestions(topic, expertise, numQuestions, style) {
    return await fetch('http://localhost:5000/questions?topic=' + topic + '&expertise=' + expertise + '&numQuestions=' + numQuestions + '&style=' + style)
    .then(response => response.json())
    .then(data => data.Questions)
}

// async function getEvaluation(question, submission){
//     return await fetch('http://localhost:5000/evaluation?question=' + question + '&submission=' + submission)
//     .then(response => response.json())
//     .then(data => data)
//     .catch(error => console.log(error))
// }
  
// getEvaluation('Ahoy there! What be the symbol for strict equality in JavaScript?', 'The symbol is ===').then(data => console.log(data));
getQuestions('javascript', 'novice', 5, 'Captain Jack Sparrow').then(data => console.log((data[0]).slice(-1)));