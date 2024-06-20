function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function deleteLast() {
    let display = document.getElementById('display');
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

function appendToDisplay(value) {
    let display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function calculateResult() {
    let display = document.getElementById('display');
    let history = document.getElementById('history');
    try {
        let result = eval(display.innerText);
        history.innerHTML += `<p>${display.innerText} = ${result}</p>`;
        display.innerText = result;
    } catch (error) {
        display.innerText = 'Erro: Entrada Inválida';
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (key === '.') {
        appendToDisplay('.');
    } else if (key === '+') {
        appendToDisplay('+');
    } else if (key === '-') {
        appendToDisplay('-');
    } else if (key === '*') {
        appendToDisplay('*');
    } else if (key === '/') {
        appendToDisplay('/');
    } else if (key === 'Enter' || key === '=') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});

function changeTheme(theme) {
    document.body.className = theme === 'dark' ? 'dark-theme' : '';
}
