
const mailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

function _log(message, scope) {
    console.log(message, scope)
}

function validateContactForm() {
    const fields = _getFields();
    const flags = []
    //name
    if (fields.name.value.length > 0) {
        _utilRemoveClass(fields.name, 'error');
        flags.push(true);
        console.log(`Name: ${fields.name.value}`);
    } else {
        flags.push(false);
        _utilAddClass(fields.name, 'error');
    }

    //last name
    if (fields.lastname.value.length > 0) {
        _utilRemoveClass(fields.lastname, 'error');
        flags.push(true)
        console.log(`Name: ${fields.lastname.value}`);
    } else {
        flags.push(false);
        _utilAddClass(fields.lastname, 'error');
    }

    //email
    if (mailRegex.exec(fields.email.value)) {
        _utilRemoveClass(fields.email, 'error');
        flags.push(true);
        console.log(`Name: ${fields.email.value}`);
    } else {
        flags.push(false);
        _utilAddClass(fields.email, 'error');
    }

    //message
    if (fields.txt.value.length > 0) {
        _utilRemoveClass(fields.txt, 'error');
        flags.push(true);
        console.log(`Name: ${fields.txt.value}`);
    } else {
        flags.push(false);
        _utilAddClass(fields.txt, 'error');
    }

    const flagsPassed = flags.reduce(item => item === true);

    if (flagsPassed) {
        fields.response.innerText = "Poruka je uspesno poslata, hvala!";
        console.log(`Checks passed, imagine that theres a server sending an email now...`)
    } else {
        fields.response.innerText = "Nesto nije u redu, molimo proverite polja"
    }


}


function _utilAddClass(item, className) {
    item.classList.add(className);
}

function _utilRemoveClass(item, className) {
    if (item.classList.contains(className)) {
        item.classList.remove(className);
    }
}

function _getFields() {
    const name = document.querySelector('#name');
    const lastName = document.querySelector('#lastname');
    const email = document.querySelector('#email');
    const txt = document.querySelector('#message');
    const response = document.querySelector("#response")

    return {
        name,
        lastname,
        email,
        txt,
        response
    }
}

