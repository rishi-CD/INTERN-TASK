document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password === confirmPassword) {
            window.location.href = 'dashboard.html';
        }
        else {
            alert('Incorrect Customer ID or Password. Please try again.');
            
        }
     });
});
document.getElementById('link').addEventListener('click', function(e) {
    e.preventDefault(); //new key word prevent default action of the link
    var input = document.getElementById('confirm-password-group');
    if (input.style.display === 'none') {
        input.style.display = 'block';
    } else {
        input.style.display = 'none'; 
    }
}); 