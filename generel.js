// ===== Global elements =====
const headerEl = document.querySelector(".site-header");
const burger = document.querySelector(".burger");

// ===== Burger menu (global) =====
if (headerEl && burger) {
  burger.addEventListener("click", () => {
    headerEl.classList.toggle("open");
    document.body.classList.toggle("no-scroll");
  });
}

// ===== Hero video play/pause (global) =====
document.querySelectorAll(".hero-full").forEach((hero) => {
  const video = hero.querySelector(".hero-video");
  const button = hero.querySelector(".video-toggle");
  if (!video || !button) return;

  button.textContent = "▶";

  button.addEventListener("click", async () => {
    if (video.paused) {
      try {
        await video.play();
        button.textContent = "❚❚";
        button.style.opacity = "0";
      } catch (err) {
        console.log("Video kunne ikke afspilles:", err);
      }
    } else {
      video.pause();
      button.textContent = "▶";
      button.style.opacity = "1";
    }
  });
});

// ===== Header hide on scroll down / show on scroll up =====
let lastScroll = 0;

if (headerEl) {
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    // scroll ned -> skjul (efter 100px)
    if (currentScroll > lastScroll && currentScroll > 100) {
      headerEl.classList.add("hide");
    }
    // scroll op -> vis
    else {
      headerEl.classList.remove("hide");
    }

    lastScroll = currentScroll;
  });
}
