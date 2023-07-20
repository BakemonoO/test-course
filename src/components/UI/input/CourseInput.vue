<template>
  <div class="course-input">
    <input type="text" class="input" @input="onInput" :value="value" :maxlength="maxlength" />
    <p class="placeholder" :class="{ full: fullyForm }">{{ placeholder }}</p>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

const { value, size, placeholder } = defineProps({
  value: {
    type: String,
    required: true
  },
  placeholder: String,
  maxlength: Number
});

const emit = defineEmits();

const fullyForm = ref(false);

const onInput = (event) => {
  event.target.value.length > 0 ? (fullyForm.value = true) : (fullyForm.value = false);
  emit("update:modelValue", event.target.value);
};
</script>

<style lang="scss" scoped>
.course-input {
  position: relative;
  width: 100%;
}

.placeholder {
  color: #919399;
  position: absolute;
  left: 20px;
  top: 16px;
  pointer-events: none;
  font-size: 18px;
  transition: all 0.8s ease;
}

.input {
  height: 56px;
  outline: none;
  border: 1px solid #dee0e3;
  border-radius: 12px;
  padding: 24px 20px 8px 20px;
  width: 100%;
}

.full,
.input:focus + .placeholder {
  font-size: 12px;
  transition: all 0.8s ease;
  top: 6px;
}
</style>
