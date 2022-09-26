<template>
  <div class="card text-bg-dark mb-3" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">
        <h5 class="card-title">{{ info.imePrakse }}</h5>
      </h5>
      <p class="card-text"></p>
      <p class="card-text">{{ info.kratkiOpisPO }}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <h5 class="card-title">{{ info.placeno }}</h5>
      </li>
      <li class="list-group-item">
        <h5 class="card-title">{{ info.knhr }}-kn/hr</h5>
      </li>
      <li class="list-group-item">
        <h5 class="card-title">{{ info.mjesto }}</h5>
      </li>
      <li class="list-group-item">
        <h5 class="card-title">{{ info.tvrtka }}</h5>
      </li>
      <li class="list-group-item">
        <h5 class="card-title">{{ info.objavio }}</h5>
      </li>
      <li class="list-group-item">
        <h5 class="card-title">{{ info.objavljeno }}</h5>
      </li>
    </ul>
    <h5 class="card-title">{{ info.detaljniOpis }}</h5>
    <div class="card-body">
      <button
        @click="prijaviPonudu"
        v-if="provjeren"
        value="info._id"
        type="submit"
        class="btn btn-primary"
      >
        Prijavi
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Service } from "@/services";
import { Auth } from "@/services";

export default {
  props: ["info"],
  name: "cardPonuda",
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
    };
  },
  methods: {
    prijaviPonudu() {
      let uservrsta = JSON.parse(localStorage.getItem("korisnikData"));
      let prijavljenePonude = {
        email: uservrsta.email,
        prijavljeno: new Date().toLocaleString(),
        idPonude: this.info._id,
      };
      axios.post("http://localhost:3000/prijavljenePonude", prijavljenePonude);
      this.$router.go();
    },
  },
  async mounted() {
  },
};
</script>
