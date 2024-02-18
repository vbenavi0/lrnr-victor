async function getEvaluation(question, submission) {
    return await fetch('http://localhost:5000/evaluation?question=' + question + '&submission=' + submission)
    .then(response => response.json())
    .then(data => data.evaluation)
}

async function getQuestions(topic, expertise, numQuestions, style) {
    return await fetch('http://localhost:5000/questions?topic=' + topic + '&expertise=' + expertise + '&numQuestions=' + numQuestions + '&style=' + style)
    .then(response => response.json())
    .then(data => data.Questions)
}

test('Testing Correct Evaluation Function', async () => {
    const data = await getEvaluation('Ahoy there! What be the symbol for strict equality in JavaScript?', 'The symbol is ===');
    expect(data).toBe('correct'); //expecting correct evaluation
});

test('Testing Incorrect Evaluation Function', async () => {
    const data = await getEvaluation('Ahoy there! What be the symbol for strict equality in JavaScript?', 'The symbol is >');
    expect(data).toBe('incorrect'); //expecting incorrect evaluation
}, 20000);

test('Testing Questions Generation Function', async () => {
    const data = await getQuestions('javascript', 'novice', 5, 'Captain Jack Sparrow');
    expect(data.length).toBe(5); //expecting array of 5 questions
}, 25000);

test('Testing Questions Function Format', async () => {
    const data = await getQuestions('javascript', 'novice', 5, 'Captain Jack Sparrow');
    expect((data[0]).slice(-1)).toBe("?");  //expecting questions to end with a question mark
}, 25000);