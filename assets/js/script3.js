document.addEventListener("DOMContentLoaded", function () {
    const gridItems = document.querySelectorAll(".grid-item");

    gridItems.forEach((item) => {
      let logo = item.querySelector(".gambar-foreground");
      let teksOverlay = item.querySelector(".teks-overlay");
      let isHovered = false;
      let interval;

      item.addEventListener("mouseover", function () {
        if (!isHovered) {
          isHovered = true;
          clearInterval(interval);
          interval = setInterval(() => {
            let logoTop = parseFloat(logo.style.top) || 30;
            let teksTop = parseFloat(teksOverlay.style.top) || 10;
            if (logoTop > 5) logoTop -= 1;
            if (teksTop < 70) teksTop += 1;
            logo.style.top = logoTop + "%";
            teksOverlay.style.top = teksTop + "%";
            if (logoTop <= 5 && teksTop >= 70) {
              clearInterval(interval);
            }
          }, 8)
        }
      });

      item.addEventListener("mouseout", function () {
        if (isHovered) {
          isHovered = false;
          clearInterval(interval);
          interval = setInterval(() => {
            let logoTop = parseFloat(logo.style.top) || 5;
            let teksTop = parseFloat(teksOverlay.style.top) || 70;
            if (logoTop < 30) logoTop += 1;
            if (teksTop > 10) teksTop -= 1;
            logo.style.top = logoTop + "%";
            teksOverlay.style.top = teksTop + "%";
            if (logoTop >= 30 && teksTop <= 10) {
              clearInterval(interval);
            }
          }, 8);
        }
      });
    });
  });
