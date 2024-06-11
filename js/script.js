//login form validation

function validateLoginForm() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    let isValid = true;

    if (email.trim()=='') {
        document.getElementById('loginEmailError').textContent = 'Please enter email address';
        document.getElementById('loginEmailError').style.display = 'block';
        document.getElementById('loginEmail').classList.add('border-color')
        isValid = false;
    } 
    else if (!validateEmail(email)) {
        document.getElementById('loginEmailError').textContent = 'Invalid email address';
        document.getElementById('loginEmailError').style.display = 'block';
        document.getElementById('loginEmail').classList.add('border-color')
        isValid = false;
    } else {
        document.getElementById('loginEmailError').style.display = 'none';
    }
    
    if (password.trim()=='') {
        document.getElementById('loginPasswordError').textContent = 'Please enter password';
        document.getElementById('loginPasswordError').style.display = 'block';
        document.getElementById('loginPassword').classList.add('border-color')
        isValid = false;
    }
    else if (password.length < 6) {
        document.getElementById('loginPasswordError').textContent = 'Password must be at least 6 characters';
        document.getElementById('loginPasswordError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('loginPasswordError').style.display = 'none';
    }

    return isValid;
}


//Sign up form registration
function validateSignupForm() {
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    let isValid = true;

    if (username.trim() === '') {
        document.getElementById('signupUsernameError').textContent = 'Username is required';
        document.getElementById('signupUsernameError').style.display = 'block';
        document.getElementById('signupUsername').classList.add('border-color')
        isValid = false;
    } else {
        document.getElementById('signupUsernameError').style.display = 'none';
    }
    
    if(email.trim() == ''){
        document.getElementById('signupEmailError').textContent = 'Email address is required';
        document.getElementById('signupEmailError').style.display = 'block';
        document.getElementById('signupEmail').classList.add('border-color')
        isValid = false;
    }
    else if (!validateEmail(email)) {
        document.getElementById('signupEmailError').textContent = 'Invalid email address';
        document.getElementById('signupEmailError').style.display = 'block';
        document.getElementById('signupEmail').classList.add('border-color')
        isValid = false;
    } else {
        document.getElementById('signupEmailError').style.display = 'none';
    }


    if (password.trim()=='') {
        document.getElementById('signupPasswordError').textContent = 'Password is required';
        document.getElementById('signupPasswordError').style.display = 'block';
        document.getElementById('signupPassword').classList.add('border-color')
        isValid = false;
    }
    else if (password.length < 6) {
        document.getElementById('signupPasswordError').textContent = 'Password must be at least 6 characters';
        document.getElementById('signupPasswordError').style.display = 'block';
        document.getElementById('signupPassword').classList.add('border-color')
        isValid = false;
    }
    else if (password.length > 20) {
        document.getElementById('signupPasswordError').textContent = 'Password must be less than 20 characters';
        document.getElementById('signupPasswordError').style.display = 'block';
        document.getElementById('signupPassword').classList.add('border-color')
        isValid = false;
    } 
    else if(!validatePassword(password)){
        document.getElementById('signupPasswordError').textContent = 'Password must contain atleast one UPPERCASE, one number and one special character';
        document.getElementById('signupPasswordError').style.display = 'block';
        document.getElementById('signupPassword').classList.add('border-color')
        isValid = false;  
    }
     else {
        document.getElementById('signupPasswordError').style.display = 'none';
    }

    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        document.getElementById('confirmPasswordError').style.display = 'block';
        document.getElementById('confirmPassword').classList.add('border-color')
        isValid = false;
    } else {
        document.getElementById('confirmPasswordError').style.display = 'none';
    }

    if (mobileNumber.trim()=='') {
        document.getElementById('mobileNumberError').textContent = 'Mobile number is required';
        document.getElementById('mobileNumberError').style.display = 'block';
        document.getElementById('mobileNumber').classList.add('border-color')
        isValid = false;
    } 
    else if (!validateMobileNumber(mobileNumber)) {
        document.getElementById('mobileNumberError').textContent = 'Invalid mobile number';
        document.getElementById('mobileNumberError').style.display = 'block';
        document.getElementById('mobileNumber').classList.add('border-color')
        isValid = false;
    } else {
        document.getElementById('mobileNumberError').style.display = 'none';
    }

    return isValid;
}

function validatePassword(){
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/;
    return passwordPattern.test();
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

function validateMobileNumber(mobileNumber) {
    const re = /^[0-9]{10}$/;
    return re.test(String(mobileNumber));
}