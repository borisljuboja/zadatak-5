const defaultButton = document.getElementById('default');
defaultButton.onclick = function () {
    document.body.classList.toggle('light-theme');
    defaultButton.style.visibility = 'hidden';
    if (defaultButton.style.visibility = 'hidden') {
        const lightButton = document.getElementById('light');
        lightButton.style.visibility = 'visible';
        lightButton.style.background = 'hsl(25, 98%, 40%)';
        lightButton.onclick = function () {
            document.body.classList.toggle('purple-theme');
            lightButton.style.visibility = 'hidden';
            if (lightButton.style.visibility = 'hidden') {
                const purpleButton = document.getElementById('purple');
                purpleButton.style.visibility = 'visible';
                purpleButton.style.background = 'hsl(52, 100%, 62%)';
                purpleButton.onclick = function () {
                    document.body.classList.toggle('default-theme');
                    defaultButton.style.visibility = 'visible';



                }
            }
        }
    }
}

const number = document.querySelectorAll('.number');
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        const result = document.querySelector('.showing');
        result.innerText = number[i].innerText;
        console.log(result.innerText);
    });
}

