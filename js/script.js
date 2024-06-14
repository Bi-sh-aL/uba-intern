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
        document.getElementById('loginEmail').classList.remove('border-color')
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
        document.getElementById('loginPassword').classList.remove('border-color')
    }

    return isValid;
}


//Sign up form validation
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
        document.getElementById('signupUsername').classList.add('border-color');
        isValid = false;
    } else {
        document.getElementById('signupUsernameError').style.display = 'none';
        document.getElementById('signupUsername').classList.remove('border-color');
    }
    
    if(email.trim() == ''){
        document.getElementById('signupEmailError').textContent = 'Email address is required';
        document.getElementById('signupEmailError').style.display = 'block';
        document.getElementById('signupEmail').classList.add('border-color');
        isValid = false;
    }
    else if (!validateEmail(email)) {
        document.getElementById('signupEmailError').textContent = 'Invalid email address';
        document.getElementById('signupEmailError').style.display = 'block';
        document.getElementById('signupEmail').classList.add('border-color')
        isValid = false;
    } else {
        document.getElementById('signupEmailError').style.display = 'none';
        document.getElementById('signupEmail').classList.remove('border-color');
    }


    if (password.trim()=='') {
        document.getElementById('signupPasswordError').textContent = 'Password is required';
        document.getElementById('signupPasswordError').style.display = 'block';
        document.getElementById('signupPassword').classList.add('border-color');
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
        document.getElementById('signupPassword').classList.remove('border-color');
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
        document.getElementById('mobileNumber').classList.remove('border-color')
    }

    return isValid;
}

// Profile edit validation
function validateProfileForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    let isValid = true;

    if (firstName.trim() === '') {
        document.getElementById('firstNameError').textContent = 'First Name is required';
        document.getElementById('firstNameError').style.display = 'block';
        document.getElementById('firstName').classList.add('border-color');
        isValid = false;
    } else {
        document.getElementById('firstNameError').style.display = 'none';
        document.getElementById('firstName').classList.remove('border-color');
    }

    if (lastName.trim() === '') {
        document.getElementById('lastNameError').textContent = 'Last Name is required';
        document.getElementById('lastNameError').style.display = 'block';
        document.getElementById('lastName').classList.add('border-color');
        isValid = false;
    } else {
        document.getElementById('lastNameError').style.display = 'none';
    }

    if (username.trim() === '') {
        document.getElementById('usernameError').textContent = 'Username is required';
        document.getElementById('usernameError').style.display = 'block';
        document.getElementById('username').classList.add('border-color');
        isValid = false;
    } else {
        document.getElementById('usernameError').style.display = 'none';
        document.getElementById('lastName').classList.remove('border-color');
    }
    
    if (email.trim()=='') {
        document.getElementById('emailError').textContent = 'Email address is required';
        document.getElementById('emailError').style.display = 'block';
        document.getElementById('email').classList.add('border-color');
        isValid = false;
    }
    else if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Invalid email address';
        document.getElementById('emailError').style.display = 'block';
        document.getElementById('email').classList.add('border-color');
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
        document.getElementById('email').classList.remove('border-color');
    }
    
    if (phone.trim()=='') {
        document.getElementById('phoneError').textContent = 'Mobile number is required';
        document.getElementById('phoneError').style.display = 'block';
        document.getElementById('phone').classList.add('border-color');
        isValid = false;
    }
    else if (!validatePhone(phone)) {
        document.getElementById('phoneError').textContent = 'Invalid mobile number';
        document.getElementById('phoneError').style.display = 'block';
        document.getElementById('phone').classList.add('border-color');
        isValid = false;
    } else {
        document.getElementById('phoneError').style.display = 'none';
        document.getElementById('phone').classList.remove('border-color');
    }


    if(currentPassword.trim()===''){
        document.getElementById('currentPasswordError').textContent = 'Please enter your old password';
        document.getElementById('currentPasswordError').style.display = 'block';
        document.getElementById('currentPassword').classList.add('border-color');
        isValid = false;  
    }
    
    else if (currentPassword.length < 6) {
        document.getElementById('currentPasswordError').textContent = 'Current password must be at least 6 characters';
        document.getElementById('currentPasswordError').style.display = 'block';
        document.getElementById('currentPassword').classList.add('border-color');
        isValid = false;
    } else {
        document.getElementById('currentPasswordError').style.display = 'none';
        document.getElementById('currentPassword').classList.remove('border-color');
    }
    
    if(newPassword.trim() === ''){
        document.getElementById('newPasswordError').textContent = 'Please enter new password';
        document.getElementById('newPasswordError').style.display = 'block';
        document.getElementById('newPassword').classList.add('border-color')
        isValid = false;  
    }
    else if(!validatePassword(newPassword)){
        document.getElementById('newPasswordError').textContent = 'Password must contain atleast one UPPERCASE, one number and one special character';
        document.getElementById('newPasswordError').style.display = 'block';
        document.getElementById('newPassword').classList.add('border-color')
        isValid = false;  
    }
    else if(newPassword.length > 0 && newPassword.length < 6) {
        document.getElementById('newPasswordError').textContent = 'New password must be at least 6 characters';
        document.getElementById('newPasswordError').style.display = 'block';
        document.getElementById('newPassword').classList.add('border-color');
        isValid = false;
    }
    else if (newPassword === currentPassword) {
        document.getElementById('newPasswordError').textContent = 'New password cannot be the same as the current password';
        document.getElementById('newPasswordError').style.display = 'block';
        document.getElementById('newPassword').classList.add('border-color');
        isValid = false;
    }
     else {
        document.getElementById('newPasswordError').style.display = 'none';
        document.getElementById('newPassword').classList.remove('border-color')
    }


    if (newPassword !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        document.getElementById('confirmPasswordError').style.display = 'block';
        document.getElementById('confirmPassword').classList.add('border-color');
        isValid = false;
    } else {
        document.getElementById('confirmPasswordError').style.display = 'none';
        document.getElementById('confirmPassword').classList.remove('border-color');
    }

    return isValid;
}

function validatePassword(){
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/;
    return passwordPattern.test();
}

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(String(email).toLowerCase());
}

function validateMobileNumber(mobileNumber) {
    const mobilePattern = /^[0-9]{10}$/;
    return mobilePattern.test(String(mobileNumber));
}