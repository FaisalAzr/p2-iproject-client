import { defineStore } from 'pinia'
import { axiosTransaction, foodAxios} from "../api/main";
import axios from "axios"
import Swal from 'sweetalert2'

export const mainStore = defineStore({
  id: "foods",
  state: () => ({
    foods:[],
    priceToPayState: 0,
    checkoutModalState: false,
    filterSearch: "",
    filterCategory: "",
  }),
  actions: {
    async getFood() {
      try {
        const response = await axios.get(`http://localhost:5050/foods`);
        this.$state.foods = response.data.data;
        //  console.log(this.$state.foods);
      } catch (err) {
        console.log(err.message);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.message,
        })
      }
    },
    paymentHandler(payload) {
      return axios.post("http://localhost:5050/payment", {
        amount: payload.amount,
        // fullName: localStorage.getItem("name"),
        // email: localStorage.getItem("email"),
      });
    },
  }
})
