"use strict";

// Keep the title background independent of third-party playback. Reduced-motion
// visitors see its poster until they choose Play; scrolling away saves work.
const backgroundVideo = document.getElementById("background-video");
const motionControl = document.getElementById("motion-control");
const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
let userPaused = false;
let manualPlayback = false;
let previewVisible = true;

backgroundVideo.muted = true;
backgroundVideo.defaultMuted = true;
motionControl.hidden = false;

function updateMotionControl() {
  const playing = !backgroundVideo.paused;
  motionControl.dataset.state = playing ? "playing" : "paused";
  motionControl.querySelector("span").textContent = playing ? "Pause" : "Play";
  motionControl.setAttribute("aria-label", playing ? "Pause background video" : "Play background video");
}

function syncPreview() {
  const shouldPlay = !userPaused && (!motionPreference.matches || manualPlayback) && previewVisible && !document.hidden;
  if (shouldPlay) {
    if (!backgroundVideo.getAttribute("src")) backgroundVideo.src = backgroundVideo.dataset.src;
    if (backgroundVideo.paused) backgroundVideo.play()?.catch(updateMotionControl);
  } else {
    backgroundVideo.pause();
  }
  updateMotionControl();
}

motionControl.addEventListener("click", () => {
  if (backgroundVideo.paused) {
    userPaused = false;
    manualPlayback = true;
  } else {
    userPaused = true;
  }
  syncPreview();
});
backgroundVideo.addEventListener("play", updateMotionControl);
backgroundVideo.addEventListener("pause", updateMotionControl);
document.addEventListener("visibilitychange", syncPreview);
motionPreference.addEventListener("change", () => {
  manualPlayback = false;
  syncPreview();
});
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      previewVisible = entry.isIntersecting;
      syncPreview();
    },
    { threshold: 0.08 }
  );
  observer.observe(backgroundVideo);
}
syncPreview();

// Build the full YouTube embed once, after the actual page origin is known.
const demoVideo = document.getElementById("demo-video");
let youtubeInitialized = false;

function initializeYouTube() {
  if (youtubeInitialized) return;
  youtubeInitialized = true;
  const httpOrigin = window.location.protocol === "http:" || window.location.protocol === "https:";
  const videoURL = new URL("https://www.youtube.com/embed/" + demoVideo.dataset.videoId);
  videoURL.search = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: demoVideo.dataset.videoId,
    playsinline: "1",
    rel: "0",
    enablejsapi: "1",
  }).toString();
  if (httpOrigin) {
    videoURL.searchParams.set("origin", window.location.origin);
    videoURL.searchParams.set("widget_referrer", window.location.origin + window.location.pathname);
  }
  demoVideo.src = videoURL.href;
  if (!httpOrigin) return;

  // Explicitly mute before requesting playback through the official API.
  window.onYouTubeIframeAPIReady = () => {
    new YT.Player("demo-video", {
      events: {
        onReady(event) {
          event.target.mute();
          event.target.playVideo();
        },
      },
    });
  };
  const api = document.createElement("script");
  api.src = "https://www.youtube.com/iframe_api";
  api.async = true;
  document.head.append(api);
}

initializeYouTube();

let toastTimeout;
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => toast.classList.remove("visible"), 3000);
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Some browsers expose the Clipboard API but do not grant access.
    }
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.cssText = "position:fixed;left:-9999px;top:0";
  textarea.setAttribute("aria-hidden", "true");
  const previousFocus = document.activeElement;
  document.body.append(textarea);
  textarea.select();
  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch {
    /* Manual selection below. */
  }
  textarea.remove();
  if (previousFocus instanceof HTMLElement) previousFocus.focus({ preventScroll: true });
  return copied;
}

document.querySelectorAll(".copy-code").forEach((button) => {
  let resetTimeout;
  button.addEventListener("click", async () => {
    const code = button.parentElement.querySelector("code");
    if (await copyText(code.textContent)) {
      button.textContent = "Copied";
      button.classList.add("copied");
      clearTimeout(resetTimeout);
      resetTimeout = setTimeout(() => {
        button.textContent = "Copy";
        button.classList.remove("copied");
      }, 2000);
      showToast("Copied to clipboard");
    } else {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(code);
      selection.removeAllRanges();
      selection.addRange(range);
      showToast("Text selected. Press ⌘C or Ctrl+C to copy.");
    }
  });
});
