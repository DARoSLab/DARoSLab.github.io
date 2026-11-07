"use strict";

// Keep the release background independent of the original paper's video.
(() => {
  const video = document.getElementById("v2-background-video");
  const control = document.getElementById("v2-motion-control");
  if (!video || !control) return;

  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  let userPaused = false;
  let manualPlayback = false;
  let visible = !("IntersectionObserver" in window);

  video.muted = true;
  video.defaultMuted = true;
  control.hidden = false;

  function updateControl() {
    const playing = !video.paused;
    control.dataset.state = playing ? "playing" : "paused";
    control.querySelector("span").textContent = playing ? "Pause" : "Play";
    control.setAttribute("aria-label", playing ? "Pause FRDV 2.0 background video" : "Play FRDV 2.0 background video");
  }

  function syncPlayback() {
    const shouldPlay = !userPaused && (!preference.matches || manualPlayback) && visible && !document.hidden;
    if (shouldPlay) {
      if (!video.getAttribute("src")) video.src = video.dataset.src;
      if (video.paused) video.play()?.catch(updateControl);
    } else {
      video.pause();
    }
    updateControl();
  }

  control.addEventListener("click", () => {
    if (video.paused) {
      userPaused = false;
      manualPlayback = true;
    } else {
      userPaused = true;
    }
    syncPlayback();
  });
  video.addEventListener("play", updateControl);
  video.addEventListener("pause", updateControl);
  document.addEventListener("visibilitychange", syncPlayback);
  preference.addEventListener("change", () => {
    manualPlayback = false;
    syncPlayback();
  });
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      syncPlayback();
    }, { threshold: 0.08 }).observe(video);
  }
  syncPlayback();
})();
