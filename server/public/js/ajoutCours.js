let ajoutAnne = document.getElementById("ajoutAnnee");
let textAnnee = document.getElementById("textAnne");

ajoutAnne.addEventListener("click", (e) => {
    e.preventDefault();
    if (textAnnee.value == "") {
        textAnnee.style.borderColor = "red";
        setTimeout(() => {
            textAnnee.style.borderColor = "var(--blockBackground)";
        }, 5000);
    } else {
        let invalidCarac = ["\\", "/", ":", "*", "\"", "<", ">", "|"];
        for (let i = 0; i < invalidCarac.length; i++) {
            if (textAnnee.value.indexOf(invalidCarac[i]) != -1) {
                textAnnee.style.borderColor = "red";
                setTimeout(() => {
                    textAnnee.style.borderColor = "var(--blockBackground)";
                }, 5000);
                return null;
            }
        }
        window.location.href = "/cours/anne/" + textAnnee.value;
    }
});