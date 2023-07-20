<template>
  <div class="oriented-list-item">
    <div class="item__logo">
      <img :src="require(`@/assets/Oriented${index + 1}.svg`)" />
    </div>
    <div class="item__text">
      <p class="item__text_title">{{ item.title }}</p>
      <p class="item__text_body">{{ item.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const { item, index } = defineProps({
  item: {
    title: String,
    description: String
  },
  index: Number
});
</script>

<style lang="scss" scoped>
@import "@/styles/constants.scss";

.oriented-list-item {
  display: flex;
  gap: 24px;
}

.item__logo {
  min-width: 64px;
  height: 64px;
  border-radius: 8px;
  background: $gray-color;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item__text {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.item__text_title {
  font-weight: 700;
}

.item__text_body {
  font-size: 14px;
}

@media (width > 324px) and (width < 426px) {
  .oriented-list-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    min-width: 220px;
    min-height: 152px;
  }

  .item__text_title {
    font-size: 16px;
  }

  .item__text_body {
    font-size: 12px;
  }

  .item__logo {
    min-width: 48px;
    max-height: 48px;
    img {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
