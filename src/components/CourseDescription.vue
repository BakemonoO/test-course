<template>
  <div class="course-description">
    <course-tag>ОНЛАЙН-КУРС</course-tag>

    <h1>{{ item.title }}</h1>

    <p class="course__body">{{ item.description }}</p>

    <div class="course__action">
      <course-button @click="store.commit('changeModal')">Записаться на курс</course-button>

      <div class="course__find">
        <p>Подобрать мне курс</p>
        <svg width="5" height="10" viewBox="0 0 5 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.8 5.59994C5.06667 5.24439 5.06667 4.7555 4.8 4.39994L1.8 0.399941C1.46863 -0.0418871 0.841827 -0.131429 0.4 0.199941C-0.0418281 0.531312 -0.131372 1.15811 0.199999 1.59994L2.75 4.99994L0.2 8.39994C-0.131372 8.84177 -0.0418277 9.46857 0.4 9.79994C0.841828 10.1313 1.46863 10.0418 1.8 9.59994L4.8 5.59994Z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import CourseTag from "@/components/UI/CourseTag.vue";
import CourseButton from "@/components/UI/button/CourseButton.vue";
import { defineProps } from "vue";
import { useStore } from "vuex";

const { item } = defineProps({
  item: {
    title: String,
    description: String
  }
});

const store = useStore();
</script>

<style lang="scss" scoped>
@import "@/styles/constants.scss";

.course-description {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  gap: 25px;
  h1 {
    font-weight: 700;
  }
}

.course__body {
  line-height: 24px;
}

.course__action {
  margin-top: 15px;
  display: flex;
  align-items: center;
  gap: 32px;
}

.course__find {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 16px 0;
  cursor: pointer;
  p {
    color: $brand-color;
    font-weight: 500;
    line-height: 24px;
    transition: color 0.5s ease;
  }
  svg {
    margin-top: 5px;
    & path {
      fill: $brand-color;
      transition: fill 0.5s ease;
    }
  }
  &:hover p {
    color: $active-brand-color;
    transition: color 0.5s ease;
  }
  &:hover svg path {
    fill: $active-brand-color;
    transition: fill 0.5s ease;
  }
}

@media (width > 324px) and (width < 426px) {
  .course-description {
    gap: 16px;
    h1 {
      font-size: 32px;
    }
  }

  .course__action {
    flex-direction: column;
    gap: 8px;
    button {
      width: 100%;
    }
  }
}
</style>
