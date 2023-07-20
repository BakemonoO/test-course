<template>
  <div class="payment-modal-window" @click.stop>
    <div class="mobile__wrapper">
      <h1>Заполните форму</h1>
      <p>Для оформления заказа, заполните поля ниже</p>
    </div>
    <course-modal-details />
    <course-modal-form />
    <div class="close" @click="store.commit('changeModal')" />
  </div>
</template>

<script setup>
import CourseModalDetails from "@/components/CourseModalDetails.vue";
import CourseModalForm from "@/components/CourseModalForm.vue";
import { useStore } from "vuex";

const store = useStore();
</script>

<style lang="scss" scoped>
.payment-modal-window {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 56px;
  display: flex;
  gap: 50px;
  border-radius: 24px;
}

.mobile__wrapper {
  display: none;
}

@media (width > 324px) and (width < 426px) {
  .payment-modal-window {
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 16px;
    gap: 24px;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .mobile__wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>
