const nameEl = document.querySelector('#name');
const emailEl = document.querySelector('#email');
const form = document.querySelector('#submit-form');

console.log(nameEl)
console.log(emailEl)
console.log(form)

const checkName = () => {

    let valid = false;

    const name = nameEl.value.trim();

    if (!isRequired(name)) {
        showError(nameEl, 'name cannot be blank.');
    } else {
        valid = true;
    }
    return valid;
};


const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError('Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError('Email is not valid.')
    } else {
        valid = true;
    }
    return valid;
};

const isEmailValid = (email) => {
    console.log(email);
    // const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return re.test(email);
};


const isRequired = value => value === '' ? false : true;


const showError = (message) => {
    alert(message);
};



$("#submit-form").submit((e) => {
    e.preventDefault()

    let isFormValid = checkEmail() && checkName();
    // submit to the server if the form is valid
    if (isFormValid) {
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbx8MhqHfLSA13_9TF77lI_l5H_-9xEGAr0gXJKcSFZsq3-GQpQrCmn20jMPAU1e28E/exec",
            data: $("#submit-form").serialize(),
            method: "post",
            success: function (response) {

                alert("Form submitted successfully")
                window.location.reload()

            },
            error: function (err) {
                alert("Something wrong. Please try again.")

            }
        })
    } else {
        console.log("invalid")
    }

})

