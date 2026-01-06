// ===== Burger menu (global) =====
const header = document.querySelector(".site-header");
const burger = document.querySelector(".burger");

if (header && burger) {
  burger.addEventListener("click", () => {
    header.classList.toggle("open");
    document.body.classList.toggle("no-scroll");
  });

  // ===== Sticky header =====//
  let lastY = window.scrollY;
  const threshold = 10;

  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    const goingDown = y > lastY;

    if (header.classList.contains("open")) {
      header.classList.remove("header-hidden");
      lastY = y;
      return;
    }

    if (Math.abs(y - lastY) < threshold) return;

    if (goingDown && y > 120) {
      header.classList.add("header-hidden");
    } else {
      header.classList.remove("header-hidden");
    }

    lastY = y;
  });
}

// ===== Hero video play/pause (global) =====
const video = document.querySelector(".hero-video");
const button = document.querySelector(".video-toggle");

if (video && button) {
  button.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      button.textContent = "Pause";
    } else {
      video.pause();
      button.textContent = "Afspil";
    }
  });
}
