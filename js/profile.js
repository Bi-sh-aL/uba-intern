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
        isValid = false;
    } else {
        document.getElementById('firstNameError').style.display = 'none';
    }

    if (lastName.trim() === '') {
        document.getElementById('lastNameError').textContent = 'Last Name is required';
        document.getElementById('lastNameError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('lastNameError').style.display = 'none';
    }

    if (username.trim() === '') {
        document.getElementById('usernameError').textContent = 'Username is required';
        document.getElementById('usernameError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('usernameError').style.display = 'none';
    }
    
    if (email.trim()=='') {
        document.getElementById('emailError').textContent = 'Email address is required';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }
    else if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Invalid email address';
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
    }
    
    if (phone.trim()=='') {
        document.getElementById('phoneError').textContent = 'Mobile number is required';
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }
    else if (!validatePhone(phone)) {
        document.getElementById('phoneError').textContent = 'Invalid mobile number';
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('phoneError').style.display = 'none';
    }

    if (currentPassword.length < 6) {
        document.getElementById('currentPasswordError').textContent = 'Current password must be at least 6 characters';
        document.getElementById('currentPasswordError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('currentPasswordError').style.display = 'none';
    }

    if (newPassword.length > 0 && newPassword.length < 6) {
        document.getElementById('newPasswordError').textContent = 'New password must be at least 6 characters';
        document.getElementById('newPasswordError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('newPasswordError').style.display = 'none';
    }

    if (newPassword === currentPassword) {
        document.getElementById('newPasswordError').textContent = 'New password cannot be the same as the current password';
        document.getElementById('newPasswordError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('newPasswordError').style.display = 'none';
    }

    if (newPassword !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        document.getElementById('confirmPasswordError').style.display = 'block';
        isValid = false;
    } else {
        document.getElementById('confirmPasswordError').style.display = 'none';
    }

    return isValid;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    const re = /^[0-9]{10}$/;
    return re.test(String(phone));
}

function goBack() {
    window.history.back();
}
