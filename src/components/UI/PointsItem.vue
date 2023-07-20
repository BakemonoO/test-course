<template>
  <div class="points-item">
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="item__image">
      <path
        d="M13.7293 0.315763C14.1072 0.71852 14.087 1.35136 13.6842 1.72926L5.15793 9.72926C4.75654 10.1059 4.12627 10.0873 3.74773 9.68775L0.27405 6.02108C-0.105781 5.62015 -0.088675 4.98722 0.312258 4.60738C0.71319 4.22755 1.34612 4.24466 1.72596 4.64559L4.5152 7.58979L12.3158 0.270747C12.7185 -0.107149 13.3514 -0.0869946 13.7293 0.315763Z"
        fill="#00E183"
      />
    </svg>
    <p :style="{ 'font-size': textSize + 'px' }">{{ item }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const { item, textSize } = defineProps({
  item: {
    type: String,
    required: true
  },
  textSize: {
    type: Number,
    default: 18
  }
});
</script>

<style lang="scss" scoped>
.points-item {
  display: flex;
  gap: 8px;
}

.item__image {
  margin-top: 6px;
  min-width: 14px;
}
</style>
