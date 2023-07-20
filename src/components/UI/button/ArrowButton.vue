<template>
  <button class="arrow-button" :class="[{ reverse: reverse }, disabled ? 'disabled' : 'active']">
    <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.8 5.59994C5.06667 5.24439 5.06667 4.7555 4.8 4.39994L1.8 0.399941C1.46863 -0.0418871 0.841827 -0.131429 0.4 0.199941C-0.0418281 0.531312 -0.131372 1.15811 0.199999 1.59994L2.75 4.99994L0.2 8.39994C-0.131372 8.84177 -0.0418277 9.46857 0.4 9.79994C0.841828 10.1313 1.46863 10.0418 1.8 9.59994L4.8 5.59994Z"
      />
    </svg>
  </button>
</template>

<script setup>
import { defineProps } from "vue";

const { disabled, reverse } = defineProps({
  disabled: {
    type: Boolean,
    required: true
  },
  reverse: {
    type: Boolean,
    default: false
  }
});
</script>

<style lang="scss" scoped>
@import "@/styles/constants.scss";

.arrow-button {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 12px;
  background: $dark-gray;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.5s ease;
  svg path {
    fill: white;
  }
}

.active {
  &:hover {
    opacity: 0.8;
    transition: opacity 0.5s ease;
    cursor: pointer;
  }
  &:active {
    opacity: 1;
    transition: opacity 0.5s ease;
  }
}

.disabled {
  opacity: 0.4;
}

.reverse {
  transform: rotate(180deg);
}
</style>
