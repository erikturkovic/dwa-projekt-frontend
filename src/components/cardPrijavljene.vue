<template>
  <div class="col-sm">
    <li v-for="jedan in prijavljene" :key="jedan" :sha="jedan">
      <h5>{{ jedan.imePrakse }}</h5>
      Prijavljeno: {{ jedan.prijavljeno }}
      <h6>Izbriši</h6>
      <button
        type="submit"
        v-on:click="izbrišiPrijavu(jedan._id)"
        class="btn btn-primary"
      >
        Izbriši
      </button>
    </li>
  </div>
</template>

<script>
import axios from "axios";
import { Auth } from "@/services";

export default {
  props: ["sha"],
  name: "cardPrijavljene",
  data() {
    return {
      ...Auth.state,
      email: "",
      imePrakse: "",
      objavljeno: "",
      kratkiOpisPO: "",
      placeno: "",
      knhr: "",
      mjesto: "",
      tvrtka: "",
      detaljniOpis: "",
      ponude: [],
      index: "",
      prov: "",
      prijavljene: [],
    };
  },
  methods: {
    izbrišiPrijavu(value) {
      console.log(value)
      let odg = { _id: value };
      let res = axios.delete(
        "http://localhost:3000/prijavljenePonude/" + value
      );
      this.$router.go();
    },
  },
  async mounted() {
    let uservrsta = JSON.parse(localStorage.getItem("korisnikData"));
    let rezultat2 = await fetch(
      "http://localhost:3000/prijavljenePonude?prijavio=" + uservrsta.email
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.prijavljene = data;
      });
  },
};
</script>
