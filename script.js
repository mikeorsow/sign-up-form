const password = document.querySelector('input[id=password]');
const allPasswordInputs = document.querySelectorAll('input[type=password]');
const confirmPassword = document.querySelector('input[id=confirm-password]');
const mainFormDiv = document.querySelector('div.main-form');
const passwordMessage = document.createElement('p');
const form = document.querySelector('form');

const passwordMessages = {
  match: `Passwords match!`,
  noMatch: `*Passwords need to match.`,
};

// This class adjusts the margin so that the password message is close to the input field
passwordMessage.classList.add('passwordMessage');

// Quick check to see if passwords are the same
const passwordsMatch = () => password.value === confirmPassword.value;

// Displays a message to the user if their passwords match or not
const showPasswordMessage = () => {
  if (passwordsMatch()) {
    allPasswordInputs.forEach((password) => {
      password.classList.remove('error');
    });
    passwordMessage.classList.remove('error');
    passwordMessage.classList.add('passwordsMatch');
    passwordMessage.textContent = passwordMessages.match;
  } else {
    allPasswordInputs.forEach((password) => {
      password.classList.add('error');
    });
    passwordMessage.classList.remove('passwordsMatch');
    passwordMessage.classList.add('error');
    passwordMessage.textContent = passwordMessages.noMatch;
  }
  mainFormDiv.appendChild(passwordMessage);
};

// Check if passwords match on each keyup
allPasswordInputs.forEach(password => {
    password.addEventListener('keyup', () => {
      showPasswordMessage();
    });
});

// Block form submission if passwords don't match
form.addEventListener('submit', (e) => {
  if (passwordsMatch()) return;
  e.preventDefault();
});

