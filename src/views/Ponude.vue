<template>
  <div class="row">
    <cardPonuda v-for="card in ponude" :key="card" :info="card" />
  </div>
</template>

<script>
import Vue from "vue";
import { TableComponent, TableColumn } from "vue-table-component";
import cardPonuda from "@/components/cardPonuda.vue";

export default {
  data: function () {
    return {
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
      index:""
    };
  },
  name: "Ponude",
  components: {
    cardPonuda,
  },
  async mounted() {
    let uservrsta = JSON.parse(localStorage.getItem("korisnikData"));
    let rezultat = await fetch("http://localhost:3000/detaljiPonuda")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.ponude = data;
      });
  },
};
</script>
