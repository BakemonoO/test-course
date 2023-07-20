<template>
  <div class="payment-modal" @click="store.commit('changeModal')">
    <payment-modal-window />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import PaymentModalWindow from "@/components/PaymentModalWindow.vue";

const store = useStore();
</script>

<style lang="scss" scoped>
.payment-modal {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
}

@media (width > 324px) and (width < 426px) {
  .payment-modal {
    background: none;
  }
}
</style>
