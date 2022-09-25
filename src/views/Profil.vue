<template>
  <v-container fill-height fluid class="justify-center">
    <p></p>
    <div class="btn-group btn-group-toggle" data-toggle="buttons">
      <form class="container-fluid justify-content-start">
        <select v-model="Sam">
          <option disabled value="null">Detalji profila ili ponude</option>
          <option value="a">Profil</option>
          <option value="b">Ponude</option>
        </select>
      </form>
    </div>
    <div v-if="Sam == 'Student'">
      <cardProfileS />
    </div>
    <div v-if="Sam == 'Poslodavac'">
      <cardProfileP />
    </div>
  </v-container>
</template>

<script>
import { Auth } from "@/services";
import axios from "axios";
import cardProfileS from "@/components/cardProfileS.vue";
import cardProfileP from "@/components/cardProfileP.vue";

export default {
  data() {
    return {
      selected: "",
      Sam: "",
      test: "",
    };
  },
  name: "Profil",
  components: {
    cardProfileP,
    cardProfileS,
  },
  methods: {},
  mounted(){

  },
  beforeMount() {
    let ajsam = JSON.parse(localStorage.getItem("korisnikData"));
    let Sam = ajsam.vrsta;
    console.log(Sam)
  },
};
</script>
