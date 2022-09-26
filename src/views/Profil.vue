<template>
  <v-container fill-height fluid class="justify-center">
    <div class="container">
      <div class="row">
        <p></p>
        <div class="col-sm" v-if="provjeren">
          <cardProfileS />
        </div>
        <div class="col-sm" v-if="provjeren">
          <h3>PrijavljenePonude</h3>
          <cardPrijavljene />
        </div>
        <div class="col-sm" v-if="!provjeren">
          <cardProfileP />
        </div>
        <div class="col-sm" v-if="!provjeren">
          <cardObjavaPonude />
        </div>
        <div class="col-sm" v-if="!provjeren">
          <div class="card text-bg-dark mb-4" style="width: 22rem">
            Moje ponude :
          </div>
          <div class="col-sm" v-if="!provjeren">
            <cardPonuda v-for="card in ponude" :key="card._id" :info="card" />
          </div>

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
import cardPrijavljene from "@/components/cardPrijavljene.vue";

export default {
  props: ["info", "sha"],
  data() {
    return {
      ...Auth.state,
      selected: "",
      Sam: "",
      test: "",
      ponude: [],
      prijavljene: [],
    };
  },
  name: "Profil",
  components: {
    cardProfileP,
    cardProfileS,
    cardObjavaPonude,
    cardPodaciP,
    cardPonuda,
    cardPrijavljene,
  },
  methods: {},
  async mounted() {
    let help = true;

    let uservrsta = JSON.parse(localStorage.getItem("korisnikData"));
    let rezultat = await fetch(
      "http://localhost:3000/detaljiPonuda?objavio=" + uservrsta.email
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.ponude = data;
      });
  },
  computed: {
    onPonuda() {
      return this.$route.meta.onPonuda;
    },
  },
};
</script>
