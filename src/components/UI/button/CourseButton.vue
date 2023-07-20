<template>
  <button class="course-button" :class="[size ? sizeList[size] : 'medium', !active ? 'disabled' : 'active']">
    <slot />
  </button>
</template>

<script setup>
import { defineProps } from "vue";
const { active, size } = defineProps({
  active: {
    type: Boolean,
    default: true
  },
  size: Number
});

const sizeList = {
  1: "small",
  2: "medium",
  3: "large"
};
</script>

<style lang="scss" scoped>
@import "@/styles/constants.scss";

.course-button {
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.5s ease;
  font-weight: 500;
}

.course-button:active {
  opacity: 0.8;
  transition: all 0.5s ease;
}

.active {
  background-color: $brand-color;
  color: $basic-white;
  transition: all 0.5s ease;
  &:hover {
    background-color: $active-brand-color;
    transition: all 0.5s ease;
  }
}

.disabled {
  background-color: $gray-color;
  color: $basic-text;
}

.small {
  height: 40px;
  font-size: 14px;
}

.medium {
  height: 56px;
  width: 233px;
  font-size: 18px;
}

.large {
  width: 100%;
  height: 56px;
}
</style>
