<template>
  <div class="row">
    <div class="search">
      <input v-model="pretraga" type="text" placeholder="Pretraži" />
      <p></p>
    </div>
    <cardPonuda v-for="card in ponude" :key="card" :info="card" />
  </div>
</template>

<script>
import Vue from "vue";
import cardPonuda from "@/components/cardPonuda.vue";

export default {
  props: ["info"],
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
      index: "",
      prov: [],
      pretraga: null,
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
