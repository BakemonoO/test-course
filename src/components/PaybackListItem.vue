<template>
  <div class="payback-list-item">
    <div class="item__wrapper">
      <div class="item__wrapper_index">
        {{ index + 1 }}
      </div>

      <div class="item__wrapper_text">
        <p class="text__title">
          {{ item.title }}
        </p>
        <p class="text__body">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const { item } = defineProps({
  item: {
    title: String,
    description: String
  },
  index: Number
});
</script>

<style lang="scss" scoped>
@import "@/styles/constants.scss";

.payback-list-item {
  width: 320px;
  border-radius: 32px;
  background: $gray-color;
  padding: 24px;
  min-height: 100%;
}

.item__wrapper {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.item__wrapper_index {
  width: 48px;
  height: 48px;
  font-size: 24px;
  font-weight: 700;
  color: $brand-color;
  border: 1px solid $brand-color;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item__wrapper_text {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.text__title {
  font-weight: 700;
  line-height: 24px;
}

.text__body {
  font-size: 14px;
}

@media (width > 324px) and (width < 426px) {
  .payback-list-item {
    padding: 20px;
    min-width: 260px;
  }

  .item__wrapper {
    gap: 24px;
  }

  .item__wrapper_text {
    gap: 12px;
  }
}
</style>
