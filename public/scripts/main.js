function changeText(id,question,a) {
    cleaner = document.querySelectorAll(".answer");
    cleaner2 = document.querySelectorAll(".header2");
    cleaner3 = document.querySelectorAll(".clickable-area a");
    h2 = document.getElementById(`${question}`);
    a = document.getElementById(`${a}`)
    acc = document.getElementById(`${id}`);
    for(let i=0; i < cleaner.length; i++) {
        if(cleaner[i] != acc) {
            cleaner[i].classList.add("answer-hidden");
        } else {
            continue;
        }
        if (cleaner2[i] != h2) {
            cleaner2[i].classList.remove("question-clicked");
        } else {
            continue;
        }
        if (cleaner3[i] != a) {
            cleaner2[i].classList.remove("arrow-icon");
        } else {
            continue;
        }
    }
    acc.classList.toggle("answer-hidden");
    h2.classList.toggle("question-clicked");
    a.classList.toggle("arrow-icon");
}

