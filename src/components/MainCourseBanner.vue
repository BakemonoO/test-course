<template>
  <div class="main-course-banner">
    <course-description :item="course" />
    <img src="@/assets/CourseLogo.png" alt="course logo" />
  </div>
</template>

<script setup>
import CourseDescription from "@/components/CourseDescription.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const course = computed(() => {
  return {
    title: store.state.course.title,
    description: store.state.course.description
  };
});
</script>

<style lang="scss" scoped>
@import "@/styles/constants.scss";

.main-course-banner {
  width: 100%;
  height: 480px;
  background: $gray-color;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 100px;
}

@media (width > 324px) and (width < 426px) {
  .main-course-banner {
    flex-direction: column;
    padding: 16px;
    height: fit-content;
    img {
      width: 100%;
    }
  }
}
</style>
