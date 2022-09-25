<template>
  <div class="card text-bg-dark mb-3" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">
        <input
          class="form-control"
          type="text"
          placeholder="Ime prakse"
          aria-label="default input example"
          v-model="imePrakse"
        />
      </h5>
      <p class="card-text">
        <textarea
          class="form-control"
          placeholder="Kratak opis"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model="kratkiOpisPO"
        ></textarea>
      </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <form class="container-fluid justify-content-start">
          <select v-model="placeno">
            <option disabled value="null"></option>
            <option>Plaćeno: Da</option>
            <option>Plaćeno: Ne</option>
          </select>
        </form>
        <input
          class="form-control"
          type="text"
          placeholder="kn/hr"
          aria-label="default input example"
          v-model="knhr"
        />
      </li>
      <li class="list-group-item">
        <input
          class="form-control"
          type="text"
          placeholder="Mjesto"
          aria-label="default input example"
          v-model="mjesto"
        />
      </li>
      <li class="list-group-item">
        <input
          class="form-control"
          type="text"
          placeholder="Tvrtka"
          aria-label="default input example"
          v-model="tvrtka"
        />
      </li>
      <textarea
        class="form-control"
        placeholder="Detaljniji opis"
        id="exampleFormControlTextarea1"
        rows="3"
        v-model="detaljniOpis"
      ></textarea>
    </ul>
    <div class="card-body">
      <a href="#" @click="objaviPonudu" class="card-link">Objavi</a>
    </div>
  </div>
</template>

<script>

import axios from "axios";
import {Service} from "@/services"

export default {
  data() {
    return {
      email:"",
      imePrakse: "",
      kratkiOpisPO: "",
      placeno:"",
      knhr:"",
      mjesto: "",
      tvrtka: "",
      detaljniOpis: "",
    };
  },
    methods: {
    objaviPonudu() {
      let uservrsta = JSON.parse(localStorage.getItem("korisnikData"));
      let detaljiPonuda = {
        email: uservrsta.email,
        imePrakse: this.imePrakse,
        kratkiOpisPO: this.kratkiOpisPO,
        placeno:this.placeno,
        knhr:this.knhr,
        mjesto: this.mjesto,
        tvrtka: this.tvrtka,
        detaljniOpis: this.detaljniOpis,
      };
      axios.post("http://localhost:3000/detaljiPonuda", detaljiPonuda);
    },
}
}
</script>
