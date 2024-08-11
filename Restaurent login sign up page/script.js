document.getElementById('signup-form').addEventListener('submit', function(e) {
    const password = document.querySelector('input[name="password"]').value;
    if (password.length < 6) {
        e.preventDefault();
        alert('Password must be at least 6 characters long.');
    }
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    const password = document.querySelector('input[name="password"]').value;
    if (password.length < 6) {
        e.preventDefault();
        alert('Password must be at least 6 characters long.');
    }
});