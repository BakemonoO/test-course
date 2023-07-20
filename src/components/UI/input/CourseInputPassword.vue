<template>
  <div class="course-input">
    <input :type="typeInput" class="input" @input="onInput" />
    <p class="placeholder" :class="{ full: fullyForm }">{{ placeholder }}</p>
    <p class="rules" v-if="!store.state.auth">6 и более символов, минимум 1 цифра, латинские буквы</p>
    <div class="show-hide" @click="tooglePasswordVisible">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.7606 14.3667C9.1856 13.7927 8.8356 13.0127 8.8356 12.1377C8.8356 10.3847 10.2476 8.97168 11.9996 8.97168C12.8666 8.97168 13.6646 9.32268 14.2296 9.89668"
          stroke="#BFC1C7"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.1048 12.6989C14.8728 13.9889 13.8568 15.0069 12.5678 15.2409"
          stroke="#BFC1C7"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.6546 17.4722C5.0676 16.2262 3.7236 14.4062 2.7496 12.1372C3.7336 9.85823 5.0866 8.02823 6.6836 6.77223C8.2706 5.51623 10.1016 4.83423 11.9996 4.83423C13.9086 4.83423 15.7386 5.52623 17.3356 6.79123"
          stroke="#BFC1C7"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.4476 8.99072C20.1356 9.90472 20.7406 10.9597 21.2496 12.1367C19.2826 16.6937 15.8066 19.4387 11.9996 19.4387C11.1366 19.4387 10.2856 19.2987 9.46761 19.0257"
          stroke="#BFC1C7"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M19.887 4.24951L4.11301 20.0235"
          stroke="#BFC1C7"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps, ref } from "vue";
import { useStore } from "vuex";

const { value, placeholder } = defineProps({
  value: {
    type: String,
    required: true
  },
  placeholder: String
});

const emit = defineEmits();

const sizeList = {
  1: "medium",
  2: "large"
};

const fullyForm = ref(false);
const passwordVisible = ref(false);

const store = useStore();

const onInput = (event) => {
  event.target.value.length > 0 ? (fullyForm.value = true) : (fullyForm.value = false);
  emit("update:modelValue", event.target.value);
};

const tooglePasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value;
};

const typeInput = computed(() => {
  return passwordVisible.value ? "text" : "password";
});
</script>

<style lang="scss" scoped>
.course-input {
  position: relative;
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
  padding: 24px 86px 8px 20px;
  width: 100%;
}

.full,
.input:focus + .placeholder {
  font-size: 12px;
  transition: all 0.8s ease;
  top: 6px;
}

.rules {
  margin-top: 8px;
  color: #919399;
  font-size: 14px;
}

.show-hide {
  position: absolute;
  top: 16px;
  right: 20px;
  z-index: 2;
  cursor: pointer;
  &:hover svg path {
    stroke: rgba(0, 0, 0, 0.6);
    transition: stroke 0.7s ease;
  }
  svg path {
    transition: stroke 0.7s ease;
  }
}
</style>
