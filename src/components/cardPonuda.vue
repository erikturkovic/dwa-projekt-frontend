<template>
  <div class="card text-bg-dark mb-3" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">
        <h5 class="card-title">Ime</h5>
      </h5>
      <p class="card-text"></p>
      <p class="card-text">Opissssssssssssssss</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <h5 class="card-title">plaćeno</h5>
      </li>
      <li class="list-group-item">
        <h5 class="card-title">Mjesto</h5>
      </li>
      <li class="list-group-item">
        <h5 class="card-title">Tvrtka</h5>
      </li>
    </ul>
    <div class="card-body">
      <button type="submit" class="btn btn-primary">Provjeri</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Service } from "@/services";

export default {
  data() {
    return {
      email: "",
      imePrakse: "",
      kratkiOpisPO: "",
      placeno: "",
      knhr: "",
      mjesto: "",
      tvrtka: "",
      detaljniOpis: "",
      ponude: [],
    };
  },
  methods: {},
  async mounted() {
    let rezultat = await fetch("http://localhost:3000/detaljiPonuda")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);

        let data2 = data.map((element) => {
          return {
            email: element.objavio,
            objavljeno: element.objavljeno,
            imePrakse: element.imePrakse,
            kratkiOpisPO: element.kratkiOpisPO,
            placeno: element.placeno,
            knhr: element.knhr,
            mjesto: element.mjesto,
            tvrtka: element.tvrtka,
            detaljniOpis: element.detaljniOpis,
          };
        });
      });
  },
};
</script>
