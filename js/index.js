// Comparing email and password in worst way
// Step-1: add event listener in submit button.
document.getElementById('submit-btn').addEventListener('click', function(){
// Step-2: get the email from input field
const emailField = document.getElementById('user-email');
const email = emailField.value;

// Step-2: get the paddword from input field
const passField = document.getElementById('user-password');
const password = passField.value;

// Step-3: verify the password with email
if(email === 'mybank@gmail.com' && password === '3210'){
    window.location.href = 'bank.html'
}
else{
    alert('Your password or email address did not matched');
}
})
