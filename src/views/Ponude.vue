<template>
  <div class="row">
    <div class="search">
      <input class="form-control mr-sm-2" v-model="searchText" type="search" placeholder="Pretraži po imenu prakse" aria-label="Search" />
      <p></p>
      {{store.searchTerm}}
    </div>
    <cardPonuda v-for="card in filteredCards" :key="card" :info="card" />
  </div>
</template>

<script>
import Vue from "vue";
import cardPonuda from "@/components/cardPonuda.vue";
import store from "@/store.js"

export default {
  props: ["info"],
  data: function () {
    return {
      searchText:"",
      store,
      email: "",
      imePrakse: "",
      objavljeno: "",
      kratkiOpisPO: "",
      placeno: "",
      knhr: "",
      mjesto: "",
      tvrtka: "",
      ponude: [],
      index: "",
      prov: [],
      pretraga: "",
      value:""
    };
  },
  name: "Ponude",
  components: {
    cardPonuda,
  },
  methods: {
    search() {
      let trazi = {
        value: this.pretraga
      };
      console.log(trazi)
    },
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
  computed:{
  filteredCards(){
    return this.ponude.filter((card)=>{
      return card.imePrakse.match(this.searchText);
    })
  }
  }
};
</script>
