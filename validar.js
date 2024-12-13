document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        
        loginError.classList.add('d-none');
        
        if (username === '') {
            showError('Por favor, insira um nome de usuário.');
            return;
        }
        
        if (password === '') {
            showError('Por favor, insira uma senha.');
            return;
        }
        
        if (password.length < 3) {
            showError('A senha deve ter pelo 3 caracteres.');
            return;
        }
        
       
        if (username === 'admin' && password === '123') {
            alert('Login bem-sucedido!');
            window.location.href = 'admin-dashboard.html'; 
        } else {
            showError('Usuário ou senha inválidos.');
        }
    });

    function showError(message) {
        loginError.textContent = message;
        loginError.classList.remove('d-none');
    }
});
