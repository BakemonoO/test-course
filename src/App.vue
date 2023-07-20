<template>
  <div class="app">
    <main-course-banner />
    <course-info />
    <course-details />
    <course-overview />
    <div class="mobile">
      <course-payment />
    </div>
    <payment-modal v-if="store.state.modal" />
  </div>
</template>

<script setup>
import MainCourseBanner from "@/components/MainCourseBanner.vue";
import CourseInfo from "@/components/CourseInfo.vue";
import CourseDetails from "@/components/CourseDetails.vue";
import CourseOverview from "@/components/CourseOverview.vue";
import PaymentModal from "@/components/PaymentModal.vue";
import CoursePayment from "@/components/CoursePayment.vue";
import { useStore } from "vuex";

const store = useStore();
</script>

<style lang="scss">
@import "@/styles/app.scss";

.mobile {
  display: none;
}

@media (width > 324px) and (width < 426px) {
  .mobile {
    display: block;
  }

  .close {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 16px;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 20px;
      border-bottom: 3px solid black;
    }
    &::after {
      transform: rotate(45deg);
    }
    &::before {
      transform: rotate(-45deg);
    }
  }
}
</style>
