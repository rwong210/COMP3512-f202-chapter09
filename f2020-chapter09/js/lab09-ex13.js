/* code goes here */

function setBackground(e) {
    if (e.type == 'focus'){
        e.target.style.backgroundColor = '#FFE393';
    }
    else if(e.type == 'blur'){
        e.target.style.backgroundColor = 'white';
    }
}

document.addEventListener('DOMContentLoaded', function (){
    const cssSelector = "input[type=text], input[type=password]";
    const fields = document.querySelectorAll(cssSelector);

    for (let field of fields){
        field.addEventListener('focus', setBackground);
        field.addEventListener('blur', setBackground);
    }
});

