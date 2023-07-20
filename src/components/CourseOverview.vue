<template>
  <div class="course-overview">
    <div class="overview__wrapper">
      <h1>Обзор курса</h1>
      <p>
        Мы специально подготовили тизер курса чтобы вы смогли больше ознакомиться с тем что вас ждет. Курс поможет Вам
        сделать первые шаги в мире инвестиций и открыть новые возможности для сохранения и приумножения капитала.
      </p>
    </div>
    <div class="overview__video">
      <img src="@/assets/Video.png" />
      <video-button class="overview__video_action" @click="goToYouTube">Смотреть сейчас</video-button>
    </div>
  </div>
</template>

<script setup>
import VideoButton from "@/components/UI/button/VideoButton.vue";

const goToYouTube = () => {
  window.open("https://www.youtube.com/watch?v=qO4OfINdw1I", "_blank");
};
</script>

<style lang="scss" scoped>
.course-overview {
  margin-left: 40px;
  padding: 64px 0 64px 0;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.overview__video {
  position: relative;
  img {
    border-radius: 24px;
  }
}

.overview__video_action {
  position: absolute;
  bottom: 24px;
  left: 24px;
}

.overview__wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 680px;
}

@media (width > 324px) and (width < 426px) {
  .course-overview {
    margin-left: 0;
    padding: 32px 16px;
    gap: 32px;
  }
  .overview__video {
    img {
      width: 100%;
    }
  }
}
</style>
