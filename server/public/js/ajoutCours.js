let ajoutAnne = document.getElementById("ajoutAnnee");
let textAnnee = document.getElementById("textAnne");

ajoutAnne.addEventListener("click", (e) => {
    e.preventDefault();
    if (textAnnee.value == "") {
        textAnnee.style.borderColor = "red";
        setTimeout(() => {
            textAnnee.style.borderColor = "var(--blockBackground)";
        }, 5000)
    } else {
        window.location.href = "/cours/anne/" + textAnnee.value;
    }
});