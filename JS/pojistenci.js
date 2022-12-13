`use strict`;

class Insured {
    constructor() {
        const recordsFromStorage = localStorage.getItem("zaznamy");
        this.insurance = recordsFromStorage ? JSON.parse(recordsFromStorage) : [];

        this.nameInput = document.getElementById('jmeno');
        this.surnameInput = document.getElementById('prijmeni');
        this.ageInput = document.getElementById('vek');
        this.phoneInput = document.getElementById('telefon');
        this.sendButton = document.getElementById('send');
        this.writeElement = document.getElementsByTagName('tbody')[0];
        this.sendInsured();
    };

    sendInsured() {
        this.sendButton.onclick = () => {
            const zaznam = new Zaznam(this.nameInput.value, this.surnameInput.value, this.ageInput.value, this.phoneInput.value);
            this.insurance.push(zaznam);
            localStorage.setItem("zaznamy", JSON.stringify(this.insurance));
            this.writeInsured();
        };
    };

    writeInsured() {
        this.writeElement.innerHTML = "";
        for (let i = 0; i < this.insurance.length; i++) {
            const zaznam = this.insurance[i];
            this.writeElement.insertAdjacentHTML("beforeend", `<tr><td class="bold">${zaznam.name} ${zaznam.surname}</td><td>${zaznam.phone}</td><td>${zaznam.age}</td></tr>`);
        };
    };

};