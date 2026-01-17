
document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirm').value;
    const message = document.getElementById('message');

    if (password !== confirm) {
        message.style.color = 'red';
        message.textContent = 'Passwords do not match';
        return;
    }

    if (password.length < 6) {
        message.style.color = 'red';
        message.textContent = 'Password must be at least 6 characters';
        return;
    }

    // Save login state (demo only)
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('username', username);

    message.style.color = 'green';
    message.textContent = 'Account created! Redirecting...';

    // Redirect to messenger
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
});