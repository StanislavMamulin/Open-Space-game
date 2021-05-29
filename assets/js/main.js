// get all inputs
const controlPanel = document.querySelector('.control-panel__inner');
const inputs = controlPanel.querySelectorAll('input');

// disable/enable inputs, except the password field and the "ok" button
function inputsSwitch(position) {
    for (let i = 0; i < inputs.length; i += 1) {
        const input = inputs[i];
        if (input.className !== 'unlock__input' && input.className !== 'unlock__button' && input.className !== 'launch') {
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

// READY TO FLIGHT Section

const launchButton = controlPanel.querySelector('.launch');

// Checkers
const checkboxesWrapper = document.querySelector('.check-buttons');
const checkboxes = checkboxesWrapper.querySelectorAll('input');
const leversWrapper = document.querySelector('.levers');
const levers = leversWrapper.querySelectorAll('input');

function isCheckboxesReady() {
    for(check of checkboxes) {
        if (!check.checked) {
            return false;
        }
    }

    return true;
}

function isLeversReady() {
    for (lever of levers) {
        if (lever.value !== lever.max) {
            return false;
        }
    }

    return true;
}

const isReadyToLaunch = () => isCheckboxesReady() && isLeversReady();

function checkReadiness() {
    if (isReadyToLaunch()) {
        launchButton.disabled = false;
    }
}

function liftoff() {
    const rocket = document.querySelector('.rocket');
    rocket.classList.add('rocket-animation')
}

checkboxes.forEach(check => {
    check.addEventListener('click', (e) => {
        checkReadiness();
    });
});

levers.forEach(lever => {
    lever.addEventListener('change', (e) => {
        checkReadiness();
    });
});

launchButton.addEventListener('click', () => {
    liftoff();
});
