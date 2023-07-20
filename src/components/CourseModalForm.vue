<template>
  <div class="course-modal-form">
    <div class="form__title">
      <h1>Заполните форму</h1>
      <p>Для оформления заказа, заполните поля ниже</p>
    </div>
    <div class="form__input">
      <course-input :placeholder="'Фамилия и имя'" v-model="fullName" :value="fullName" v-if="!auth" />

      <div class="form__mobile">
        <course-input :placeholder="'Электронная почта'" v-model="email" :value="email" :size="2" />
      </div>

      <div class="form__input_mail-number" v-if="!auth">
        <course-input :placeholder="'Электронная почта'" v-model="email" :value="email" />
        <course-input
          :placeholder="'Номер телефона'"
          v-model="phoneNumber"
          :value="phoneNumber"
          :size="1"
          :maxlength="16"
        />
      </div>

      <course-input :placeholder="'Электронная почта'" v-model="email" :value="email" v-else />

      <course-input-password :placeholder="authPlaceholder" v-model="password" :value="password" />

      <course-input :placeholder="'Применить промокод'" v-model="promoCode" :value="promoCode" />

      <points-item :item="agreement" :textSize="14" />
    </div>
    <course-button :size="3">Перейти к оплате</course-button>
    <p class="authorisation" @click="store.commit('changeAuth')" v-if="!auth">Уже зарегистрированы?</p>
  </div>
</template>

<script setup>
import CourseInput from "@/components/UI/input/CourseInput.vue";
import CourseInputPassword from "@/components/UI/input/CourseInputPassword.vue";
import PointsItem from "@/components/UI/PointsItem.vue";
import CourseButton from "@/components/UI/button/CourseButton.vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";
import usePhone from "@/use/usePhone";

const fullName = ref("");
const email = ref("");
const password = ref("");
const promoCode = ref("");

const { phoneNumber, watchPhone } = usePhone();
watchPhone();

const agreement =
  "Я подтверждаю, что ознакомлен и согласен с условиями оферты и даю своё согласие на сбор и обработку персональных данных";

const store = useStore();

const auth = store.state.auth;

const authPlaceholder = computed(() => {
  return store.state.auth ? "Пароль" : "Придумайте пароль";
});
</script>

<style lang="scss" scoped>
@import "@/styles/constants.scss";

.course-modal-form {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 550px;
}

.form__title {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form__input {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form__input_mail-number {
  display: flex;
  gap: 25px;
}

.authorisation {
  align-self: center;
  cursor: pointer;
  &::after {
    content: " Войти";
    color: $brand-color;
  }
}

.form__mobile {
  display: none;
}

@media (width > 324px) and (width < 426px) {
  .course-modal-form {
    width: 100%;
  }

  .form__input_mail-number {
    width: 100%;
    flex-direction: column;
  }

  .form__title {
    gap: 16px;
  }
}
</style>
