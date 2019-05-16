const button = document.querySelector('button')
const p = document.querySelector('p')

button.addEventListener('click', summ)

// Код написан без проверки на введенные данные
function summ() {
    let firstValue = parseFloat(document.getElementById('firstValue').value)
    let secondValue = parseFloat(document.getElementById('secondValue').value)
    p.textContent = firstValue + secondValue
}

