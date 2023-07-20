<template>
  <div class="course-tag">
    <p class="slot">
      <slot />
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/constants.scss";

.course-tag {
  height: 32px;
  width: fit-content;
  border: 1px solid #dee0e3;
  border-radius: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: border-color 0.5s ease;
  &:hover {
    border-color: rgba(0, 0, 0, 0.4);
    transition: border-color 0.5s ease;
  }
}

.slot {
  font-size: 10px;
  color: $basic-text;
  margin: 5px 13px;
  line-height: 16px;
  font-weight: 500;
}
</style>
