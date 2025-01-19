function changeColor() {
    let box = document.getElementById("box");
    // Проверяем текущий цвет фона и меняем его
    if (box.style.backgroundColor === "navajowhite") {
        box.style.backgroundColor = "black";
        box.style.color = "white";
    } else {
        box.style.backgroundColor = "navajowhite";
        box.style.color = "black";
    }

}

