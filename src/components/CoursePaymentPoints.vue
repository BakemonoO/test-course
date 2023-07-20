<template>
  <div class="course-payment-points">
    <div class="mobile__wrapper">
      <p class="points__title">Ключевые преимущеста</p>
      <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg" @click="toogleInfo">
        <path
          d="M4.8 5.59994C5.06667 5.24439 5.06667 4.7555 4.8 4.39994L1.8 0.399941C1.46863 -0.0418871 0.841827 -0.131429 0.4 0.199941C-0.0418281 0.531312 -0.131372 1.15811 0.199999 1.59994L2.75 4.99994L0.2 8.39994C-0.131372 8.84177 -0.0418277 9.46857 0.4 9.79994C0.841828 10.1313 1.46863 10.0418 1.8 9.59994L4.8 5.59994Z"
        />
      </svg>
    </div>

    <div class="points__list" :class="{ open: info }">
      <points-item v-for="item in pointsList" :key="item" :item="item" />
    </div>
  </div>
</template>

<script setup>
import PointsItem from "@/components/UI/PointsItem.vue";
import { ref } from "vue";

const pointsList = [
  "Персональный менеджер",
  "Электронные материалы к курсу",
  "Пожизненный доступ",
  "Сертификат",
  "Открытие и обслуживание счета"
];

const info = ref(false);

const toogleInfo = () => {
  info.value = !info.value;
};
</script>

<style lang="scss" scoped>
.course-payment-points {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.points__title {
  font-weight: 700;
}

.points__list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.mobile__wrapper {
  svg {
    display: none;
  }
}

@media (width > 324px) and (width < 426px) {
  .mobile__wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
    svg {
      width: 20px;
      height: 10px;
      display: block;
      transform: rotate(90deg);
      fill: black;
    }
  }

  .points__list {
    height: 0;
    overflow: hidden;
    transition: all 1s ease;
  }

  .open {
    height: 172px;
    transition: all 1s ease;
  }
}
</style>
