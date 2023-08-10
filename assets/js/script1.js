console.log(window.location);
console.log(window.location.pathname);

let nameFile = window.location.pathname;

let menuItems = document.querySelectorAll(".menu-item a");
menuItems.forEach((item, index) => {
    let link = item.href;

    console.log(link.substring(21));
    if (link.substring(21) === nameFile) {
        item.classList.add("terpilih");
        console.log("true");
    } else {
        item.classList.remove("terpilih");
        console.log(false);
    }
});

function pilihMenu(nomorMenu) {
    let menuItems = document.querySelectorAll(".menu-item");

    console.log(menuItems);
    menuItems.forEach((item, index) => {
        if (index === nomorMenu - 1) {
            item.classList.add("terpilih");
        } else {
            item.classList.remove("terpilih");
        }
    });
}