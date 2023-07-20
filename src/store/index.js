import { getDayMonthYear, getFullTime } from "@/helper/date";
import { createStore } from "vuex";

export default createStore({
  state: {
    course: {
      title: "«Технический анализ» офлайн-курс г. Алматы",
      description:
        "Данный курс поможет вам открыть новые возможности совершения прибыльных сделок на фондовом рынке из любой точки мира",
      details: {
        date: new Date(2021, 2, 11, 19, 0),
        location: "Алматы",
        modules: 5
      },
      price: {
        actualyPrice: 30000,
        oldPrice: 60000,
        actualyPriceDate: "01.12.2022"
      }
    },
    auth: false,
    modal: false,
    paymentData: {
      title: "«Технический анализ Pro» - авторский онлайн курс Елены Беляевой",
      speaker: "Елена Беляева",
      dateRange: {
        days: "24-31 января",
        time: "19:00-21:00"
      }
    }
  },

  getters: {
    dateOfStartedCourse(state) {
      const date = state.course.details.date;
      const actualyDate = getDayMonthYear(date);
      const actualyTime = getFullTime(date);
      return {
        date: actualyDate,
        time: actualyTime
      };
    }
  },

  mutations: {
    changeModal(state) {
      state.modal = !state.modal;
    },
    changeAuth(state) {
      state.auth = !state.auth;
      state.modal = false;
    }
  },

  actions: {},

  modules: {}
});
