// toggleMoreText.js
export function toggleMoreText(event) {
    const moreText = event.target.nextElementSibling;
    const btnText = event.target;

    if (moreText.classList.contains("hidden")) {
        moreText.classList.remove("hidden");
        btnText.innerHTML = "Ver menos";
    } else {
        moreText.classList.add("hidden");
        btnText.innerHTML = "Ver más";
    }
}
