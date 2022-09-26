<template>
  <v-container fill-height fluid class="justify-center">
    <div class="container">
      <div class="row">
        <p></p>
        <div class="col-sm" v-if="provjeren">
          <cardProfileS />
        </div>
        <div class="col-sm" v-if="!provjeren">
          <cardProfileP />
        </div>
        <div class="col-sm" v-if="!provjeren">
          <cardObjavaPonude />
        </div>
        <div class="col-sm" v-if="!provjeren">
            <div class="card text-bg-dark mb-4" style="width: 18rem">
              Moje ponude :
              </div>
          <cardPonuda v-for="card in ponude" :key="card._id" :info="card" />
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import { Auth } from "@/services";
import axios from "axios";
import cardProfileS from "@/components/cardProfileS.vue";
import cardProfileP from "@/components/cardProfileP.vue";
import cardObjavaPonude from "@/components/cardObjavaPonude.vue";
import cardPodaciP from "@/components/cardPodaciP.vue";
import cardPonuda from "@/components/cardPonuda.vue";

export default {
  data() {
    return {
      ...Auth.state,
      selected: "",
      Sam: "",
      test: "",
      ponude:[]
    };
  },
  name: "Profil",
  components: {
    cardProfileP,
    cardProfileS,
    cardObjavaPonude,
    cardPodaciP,
    cardPonuda,
  },
  methods: {},
  async mounted() {
    let uservrsta = JSON.parse(localStorage.getItem("korisnikData"));
    let rezultat = await fetch("http://localhost:3000/detaljiPonuda?objavio=" + uservrsta.email)
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
