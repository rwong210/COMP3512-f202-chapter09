/* code goes here */

function setBackground(e) {
    if (e.type == 'focus') {
        e.target.style.backgroundColor = '#FFE393';
    } else if (e.type == 'blur') {
        e.target.style.backgroundColor = 'white';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const cssSelector = "input[type=text], input[type=password]";
    const fields = document.querySelectorAll(cssSelector);

    for (let field of fields) {
        field.addEventListener('focus', setBackground);
        field.addEventListener('blur', setBackground);
    }

    document.querySelector('#sampleForm').addEventListener('submit', checkForEmptyFields);

    function checkForEmptyFields(e) {
        const errorList = [];
        for (let field of fields) {
            if (field.value == null || field.value == "") {
                e.preventDefault();
                errorList.push(field);
            }
        }
        const errorArea = document.getElementById("errors");
        errorArea.className = 'hidden';

        let msg = "The following fields can't be empty: ";
        if (errorList.length > 0) {
            for (let errorField of errorList) {
                msg += errorField.id + ", ";
            }
            errorArea.innerHTML = "<p>" + msg + "</p>";
            errorArea.className = "visible";
        }
    }

});