function generatePassword(type) {
    let password = '';
    const weakChars = 'abcdefghijklmnopqrstuvwxyz';
    const strongChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const superStrongChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    const funnyWords = ['Bananarama42!', 'MonkeyTrouble', 'PizzaLover123', 'FunkyChicken!', 'DancingNoodle9'];

    switch(type) {
        case 'weak':
            password = generateRandomString(weakChars, 8);
            break;
        case 'strong':
            password = generateRandomString(strongChars, 12);
            break;
        case 'super-strong':
            password = generateRandomString(superStrongChars, 16);
            break;
        case 'funny':
            password = funnyWords[Math.floor(Math.random() * funnyWords.length)];
            break;
    }

    document.getElementById('passwordOutput').value = password;
}

function generateRandomString(characters, length) {
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function createNewPassword() {
    const strongChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const newPassword = generateRandomString(strongChars, 12);
    document.getElementById('passwordOutput').value = newPassword;
}

function deletePassword() {
    document.getElementById('passwordOutput').value = '';
}

function savePassword() {
    const password = document.getElementById('passwordOutput').value;
    if (password) {
        localStorage.setItem('savedPassword', password);
        alert('Password saved successfully!');
    } else {
        alert('No password to save!');
    }
}

function viewSavedPassword() {
    const savedPassword = localStorage.getItem('savedPassword');
    if (savedPassword) {
        alert(`Saved Password: ${savedPassword}`);
    } else {
        alert('No saved password found.');
    }
}
