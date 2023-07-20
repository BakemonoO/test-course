<template>
  <div class="info-item">
    <p class="item__title">{{ item.title }}</p>
    <p class="item__description">{{ item.description }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const { item } = defineProps({
  item: {
    title: String,
    description: String
  }
});
</script>

<style lang="scss" scoped>
.info-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.item__title {
  font-size: 24px;
  font-weight: 500;
}

@media (width > 324px) and (width < 426px) {
  .info-item {
    align-items: flex-start;
  }

  .item__title {
    font-size: 32px;
  }
}
</style>
