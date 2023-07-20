<template>
  <button class="video-button">
    <slot />
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.99992 0.333344C10.6813 0.333344 13.6666 3.31801 13.6666 7.00001C13.6666 10.682 10.6813 13.6667 6.99992 13.6667C3.31792 13.6667 0.333252 10.682 0.333252 7.00001C0.333252 3.31801 3.31792 0.333344 6.99992 0.333344Z"
        fill="#242624"
      />
      <path
        d="M9.58166 7.06277C5.66651 5 9.58166 7.06277 5.66651 5C5.66652 9.12554 5.66649 5 5.66651 9.12554C9.58166 7.06277 5.66651 9.12554 9.58166 7.06277Z"
        fill="white"
      />
    </svg>
  </button>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/styles/constants.scss";

.video-button {
  display: flex;
  gap: 12px;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  padding: 16px 24px;
  border: none;
  border-radius: 20px;
  background: $basic-white;
  cursor: pointer;
  &:hover {
    svg path:first-child {
      fill: red;
      transition: fill 0.8s ease;
    }
  }
  svg path {
    transition: fill 0.8s ease;
  }
}

@media (width > 324px) and (width < 426px) {
  .video-button {
    width: 150px;
    height: 40px;
    font-size: 12px;
    padding: 0 0 0 15px;
    gap: 5px;
    border-radius: 15px;
  }
}
</style>
