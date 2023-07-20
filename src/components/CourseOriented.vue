<template>
  <div class="course-oriented">
    <h1>Кому подойдет курс</h1>
    <div class="oriented__list">
      <oriented-list-item v-for="(item, index) in list" :key="item.title" :item="item" :index="index" />
    </div>
  </div>
</template>

<script setup>
import OrientedListItem from "@/components/OrientedListItem.vue";

const list = [
  {
    title: "Начинающим",
    description:
      "Тем, кто только начинает знакомство с миром трейдинга и желает освоить новые навыки и начать зарабатывать на бирже."
  },
  {
    title: "Инвесторам и трейдерам",
    description:
      "Тем, кто уже инвестирует, но хочет открыть новый подход в управлении своих финансов, увидеть торговые ошибки, скорректировать стратегию и приумножить благосостояние."
  },
  {
    title: "Фрилансерам",
    description:
      "Тем, кто не привязан к работе, но обладает свободным временем, желанием развиваться и получать уникальные возможности для заработка на фондовом рынке. Хотите освоить высокодоходный навык находясь в любой точке мира, подстроить стратегию под свои ожидания по доходу и занятости? Всё это возможно с Freedom Academy."
  },
  {
    title: "Штатным сотрудникам и самозанятым",
    description:
      "Тем, кто хочет найти дополнительный источник дохода или сделать инвестиции основным источником заработка. Мы научим подстраивать торговую стратегию под ваши цели и финансовые планы."
  }
];
</script>

<style lang="scss" scoped>
.course-oriented {
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 100%;
}

.oriented__list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 24px;
  row-gap: 32px;
}

@media (width > 324px) and (width < 426px) {
  .course-oriented {
    padding: 32px 16px;
    gap: 24px;
  }

  .oriented__list {
    display: flex;
    gap: 24px;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
