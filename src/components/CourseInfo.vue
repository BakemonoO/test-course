<template>
  <div class="course-info">
    <course-info-item v-for="item in list" :key="item.title" :item="item" />
  </div>
  <div class="course-info mobile__wrapper">
    <course-info-item v-for="item in mobileList" :key="item.title" :item="item" />
  </div>
</template>

<script setup>
import CourseInfoItem from "@/components/CourseInfoItem.vue";
import { useStore } from "vuex";

const store = useStore();

const { date, time } = store.getters.dateOfStartedCourse;
const { location, modules } = store.state.course.details;

const list = [
  { title: date, description: "Дата проведения" },
  { title: time, description: "Время проведения" },
  { title: location, description: "место проведения" },
  { title: modules, description: "модулей" }
];

const mobileList = [
  { title: "30+", description: "Курсов и вебинаров" },
  { title: "23К", description: "Слушателей курса" },
  { title: "30+", description: "Кураторов и преподавателей" },
  { title: "30+", description: "Полезных буклетов и гайдов" }
];
</script>

<style lang="scss" scoped>
.course-info {
  margin-top: 50px;
  margin-bottom: 60px;
  display: flex;
  justify-content: space-around;
}

.mobile__wrapper {
  display: none;
}

@media (width > 324px) and (width < 426px) {
  .course-info {
    display: none;
    margin-top: 30px;
    margin-bottom: 40px;
  }

  .mobile__wrapper {
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: flex-start;
    padding: 0 16px;
  }
}
</style>
