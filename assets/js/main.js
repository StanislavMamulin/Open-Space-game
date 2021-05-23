// get all inputs
const controlPanel = document.querySelector('.control-panel__inner');
const inputs = controlPanel.querySelectorAll('input');

// disable/enable inputs, except the password field and the "ok" button
function inputsSwitch(position) {
    for (let i = 0; i < inputs.length; i += 1) {
        const input = inputs[i];
        if (input.className !== 'unlock__input' && input.className !== 'unlock__button') {
            input.disabled = (position === 'off');
        }
    }
}
// disable inputs
inputsSwitch('off');

const passwordField = controlPanel.querySelector('.unlock__input');
const okButton = controlPanel.querySelector('.unlock__button');
okButton.addEventListener('click', (e) => {
    // check password, enable all input
    const password = passwordField.value;
    if (password === 'TrustNo1') {
        inputsSwitch('on');
        passwordField.value = '';
    }
});
