<template>
  <div class="course-details">
    <div class="details__info">
      <course-details-payback />
      <course-oriented />
    </div>

    <div class="desktop">
      <course-payment />
    </div>
  </div>
</template>

<script setup>
import CourseDetailsPayback from "@/components/CourseDetailsPayback.vue";
import CourseOriented from "@/components/CourseOriented.vue";
import CoursePayment from "@/components/CoursePayment.vue";
</script>

<style lang="scss" scoped>
.course-details {
  margin-left: 40px;
  display: flex;
  gap: 47px;
}

.details__info {
  max-width: 1000px;
}

@media (width > 324px) and (width < 426px) {
  .course-details {
    margin-left: 0;
    flex-direction: column;
    gap: 10px;
  }
  .details__info {
    width: 100%;
  }

  .desktop {
    display: none;
  }
}

@media (width > 1600px) {
  .course-details {
    justify-content: center;
  }
}
</style>
