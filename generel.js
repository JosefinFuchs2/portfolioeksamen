// ===== Burger menu (global) =====
const header = document.querySelector(".site-header");
const burger = document.querySelector(".burger");

if (header && burger) {
  burger.addEventListener("click", () => {
    header.classList.toggle("open");
    document.body.classList.toggle("no-scroll");
  });
}

// ===== Hero video play/pause (global) =====
document.querySelectorAll(".hero-full").forEach((hero) => {
  const video = hero.querySelector(".hero-video");
  const button = hero.querySelector(".video-toggle");
  if (!video || !button) return;

  button.addEventListener("click", async () => {
    if (video.paused) {
      try {
        await video.play();
        button.textContent = "Pause";
      } catch (err) {
        console.log("Video kunne ikke afspilles:", err);
      }
    } else {
      video.pause();
      button.textContent = "Afspil";
    }
  });
});
