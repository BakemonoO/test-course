import { ref, watch } from "vue";

export default function usePhone() {
  const phoneNumber = ref("");

  const watchPhone = () => {
    watch(phoneNumber, () => {
      if (phoneNumber.value.length < 4 && phoneNumber.value.length !== 0) {
        let regExp = phoneNumber.value.match(/\d+/g);
        phoneNumber.value = "+7 " + regExp;
      }
      if (phoneNumber.value.length >= 4 && phoneNumber.value.length < 10) {
        let regExp = phoneNumber.value.match(/(?<!\+)\d{1,3}/g);
        regExp !== null ? (phoneNumber.value = "+7 " + regExp.join(" ")) : (phoneNumber.value = "");
      }
      if (phoneNumber.value.length === 10 || phoneNumber.value.length === 13) {
        phoneNumber.value += " ";
      }
    });
  };
  return {
    phoneNumber,
    watchPhone
  };
}
