<template>
  <div class="course-modal-details">
    <div class="details__tags">
      <course-tag>ВЕБИНАР</course-tag>
      <p>Рус</p>
    </div>

    <div class="details__title">
      <div class="details__title_text">
        <p class="text__title">{{ title }}</p>
        <div class="text__info">
          <p>{{ dateRange.days + ", " + dateRange.time }}</p>
          <p>{{ `Спикер: ${speaker}` }}</p>
        </div>
      </div>
      <img src="@/assets/illustration.png" width="84" height="84" />
    </div>

    <div class="line" />

    <div class="details__price">
      <p class="details__price_title">Стоимость курса</p>
      <div class="details__price_digital">
        <p>{{ getTabePrice(actualyPrice) }}</p>
        <p>₸/мес</p>
        <p>{{ getTabePrice(oldPrice) + " ₸ / мес" }}</p>
      </div>
    </div>

    <course-payment-points />
  </div>
</template>

<script setup>
import CourseTag from "@/components/UI/CourseTag.vue";
import CoursePaymentPoints from "@/components/CoursePaymentPoints.vue";
import { getTabePrice } from "@/helper/numbers";
import { useStore } from "vuex";

const store = useStore();

const { title, dateRange, speaker } = store.state.paymentData;
const { actualyPrice, oldPrice } = store.state.course.price;
</script>

<style lang="scss" scoped>
@import "@/styles/constants.scss";

.course-modal-details {
  padding: 32px;
  background: $gray-color;
  width: 470px;
  border-radius: 24px;
}

.details__tags {
  display: flex;
  justify-content: space-between;
  p {
    font-size: 14px;
  }
}

.details__title {
  display: flex;
  justify-content: space-between;
  margin: 24px 0 32px 0;
}

.details__title_text {
  max-width: 290px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.text__title {
  font-weight: 700;
}

.text__info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  p {
    font-size: 14px;
  }
}

.line {
  width: 100%;
  border-bottom: 1px solid #dee0e3;
}

.details__price {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 32px 0;
}

.details__price_title {
  font-weight: 700;
}

.details__price_digital {
  display: flex;
  align-items: center;
  p:first-child {
    font-weight: 700;
    font-size: 24px;
  }
  p:nth-child(2) {
    font-size: 14px;
    margin-right: 8px;
    margin-left: 3px;
  }
  p:last-child {
    font-size: 24px;
    color: #919399;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      border-bottom: 2px solid #919399;
      top: 60%;
    }
  }
}

@media (width > 324px) and (width < 426px) {
  .course-modal-details {
    padding: 20px 20px 20px 20px;
    max-width: 100%;
  }

  .details__price_digital {
    p:first-child {
      font-size: 16px;
    }
    p:nth-child(2) {
      font-size: 12px;
    }
    p:last-child {
      font-size: 16px;
      &::before {
        top: 50%;
      }
    }
  }
}
</style>
