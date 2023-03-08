let input = document.querySelector('#password')
button = document.querySelector('button')
pass_size = 8;

input.value = passwordGenerator();

function passwordGenerator() {
let randomPass;

do {
    randomPass = Math.random().toString(32).substr(2)
} while (randomPass.length > pass_size);

return randomPass;
}

button.addEventListener('click', function() {
input.value = passwordGenerator();

})