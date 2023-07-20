<template>
  <div class="course-details-payback">
    <div class="payback__header">
      <h1>Что вы получите</h1>
      <div class="payback__header_action">
        <arrow-button :reverse="true" :disabled="true" />
        <arrow-button :disabled="false" />
      </div>
    </div>
    <div class="payback__list" v-if="list.length > 0">
      <payback-list-item v-for="(item, index) in list" :key="item.title" :item="item" :index="index" />
    </div>
  </div>
</template>

<script setup>
import ArrowButton from "@/components/UI/button/ArrowButton.vue";
import PaybackListItem from "@/components/PaybackListItem.vue";

const list = [
  {
    title: "Знания для преумножения капитала",
    description:
      "Знания — приносящие доход, лучшее описание курсов от Freedom Academy. Мы приоткроем занавес в мир трейдинга и покажем, как на этом можно приумножить своё благосостояние. После обучения вы сможете зарабатывать на внутридневных и среднесрочных сделках из любой точки мира, имея лишь доступ в интернет."
  },
  {
    title: "Сертификат",
    description: "В последний день занятий мы организуем фотосессию с выпускниками и проведем вручение сертификатов."
  },
  {
    title: "Лекционный материал",
    description:
      "Вам будут доступны лекционные материалы по программе курса, а также домашние задания для проверки и закрепления пройденного материала. Вы получите персональные комментарии от наших экспертов по выполненным заданиям."
  }
];
</script>

<style lang="scss" scoped>
.course-details-payback {
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 64px 0;
}

.payback__header_action {
  display: flex;
  gap: 12px;
}

.payback__header {
  display: flex;
  gap: 24px;
}

.payback__list {
  display: flex;
  justify-content: space-between;
}

@media (width > 324px) and (width < 426px) {
  .course-details-payback {
    padding: 32px 0 32px 16px;
    gap: 32px;
    background: white;
  }

  .payback__header_action {
    display: none;
  }

  .payback__header {
    h1 {
      font-size: 24px;
    }
  }

  .payback__list {
    overflow: scroll;
    gap: 16px;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
