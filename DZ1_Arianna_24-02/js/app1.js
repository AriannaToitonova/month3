// const passwordInput = document.getElementById('password');
// const showPasswordButton = document.getElementById('showPassword');
// const confirmPasswordInput = document.getElementById('confirmPassword');
// const resultDiv = document.getElementById('result');
// showPasswordButton.addEventListener('click', () => {
//     passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
// });
//
// document.querySelector('form').addEventListener('submit', (event) => {
//     event.preventDefault();
//     const password = passwordInput.value;
//     const confirmPassword = confirmPasswordInput.value;
//     const pattern = /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/;
//     const isValidPassword = pattern.test(password);
//
//     resultDiv.textContent = isValidPassword && password === confirmPassword ? 'Вы молодец!!!' : 'Ошибка!';
//     resultDiv.className = isValidPassword ? 'success' : 'error';
// });


const passwordInput = document.getElementById('password');
const showPasswordButton = document.getElementById('showPassword');
const confirmPasswordInput = document.getElementById('confirmPassword');
const resultDiv = document.getElementById('result');
const emailInput = document.getElementById('email');

showPasswordButton.addEventListener('click', () => {
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
});

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const passwordPattern = /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/;
    const emailPattern = /.@./;
    const isValidPassword = passwordPattern.test(password);
    const isValidEmail = emailPattern.test(emailInput.value);

    resultDiv.textContent = (isValidPassword && password === confirmPassword && isValidEmail) ? 'Вы молодец!!!' : 'Ошибка!';
    resultDiv.className = isValidPassword ? 'success' : 'error';
});
