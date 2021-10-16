(function () {
    emailjs.init('user_Ecz4etxTjAkPQYl0F5tnK');
})();

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function () {
                console.log('SUCCESS!');
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
}

function potvrdi() {
    var user_choice = window.confirm('Potvrdite slanje Vaše poruke: ');

    if (user_choice == true) {
        alert("Poruka je uspješno poslana! :)");
    } else {
        alert("Slanje poruke nije uspjelo. :(");
    }
}