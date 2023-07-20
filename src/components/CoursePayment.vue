<template>
  <div class="course-payment">
    <div class="payment__wrapper">
      <div class="payment__wrapper_price mobile__flex">
        <div class="mobile__wrapper">
          <p class="price__old">{{ `${getTabePrice(price.oldPrice)} ₸ / мес` }}</p>

          <div class="price__actualy">
            <h1>{{ getTabePrice(price.actualyPrice) }}</h1>
            <p>₸/мес</p>
          </div>
        </div>

        <p class="price__date">{{ `цена актуальна до ${price.actualyPriceDate}` }}</p>
      </div>

      <div class="payment__wrapper_price action">
        <course-button :size="1" @click="store.commit('changeModal')">Записаться</course-button>
        <course-button :size="1" :active="false">Подарить этот курс</course-button>
      </div>

      <course-payment-points />
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import CourseButton from "@/components/UI/button/CourseButton.vue";
import CoursePaymentPoints from "@/components/CoursePaymentPoints.vue";
import { getTabePrice } from "@/helper/numbers.js";

const store = useStore();
const price = store.state.course.price;
</script>

<style lang="scss" scoped>
@import "@/styles/constants.scss";

.course-payment {
  width: 256px;
  height: fit-content;
  border-radius: 24px;
  background: $brand-color;
  padding-top: 32px;
  margin-top: 128px;
}

.payment__wrapper {
  width: 100%;
  background: $basic-white;
  border-radius: 24px;
  border: 1px solid $brand-color;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
}

.payment__wrapper_price {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.price__old {
  font-size: 14px;
  position: relative;
  width: fit-content;
  &::after {
    content: "";
    width: 100%;
    position: absolute;
    bottom: 40%;
    left: 0;
    right: 0;
    border-bottom: 2px solid gray;
  }
}

.price__actualy {
  display: flex;
  align-items: flex-start;
  p {
    font-size: 14px;
  }
}

.price__date {
  font-size: 14px;
  color: #919399;
  line-height: 16px;
}

.action {
  margin: 32px 0 40px 0;
}

@media (width > 324px) and (width < 426px) {
  .course-payment {
    background: none;
    margin-top: 0;
    padding-top: 0;
    width: 100%;
    border-radius: 0;
  }

  .payment__wrapper {
    border: none;
    padding: 20px 16px;
    background: $gray-color;
    border-radius: 0;
  }
  .action {
    order: 3;
    margin: 16px 0;
  }

  .mobile__flex {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
    p {
      font-size: 12px;
      margin-bottom: 5px;
    }
  }
}
</style>
