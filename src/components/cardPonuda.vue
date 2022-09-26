<template>
  <div class="card text-bg-dark mb-3" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">
        <h5 class="card-title">{{info.imePrakse}}</h5>
      </h5>
      <p class="card-text"></p>
      <p class="card-text">{{info.kratki}}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <h5 class="card-title">{{info.placeno}}</h5>
      </li>
      <li class="list-group-item">
        <h5 class="card-title">{{info.mjesto}}</h5>
      </li>
      <li class="list-group-item">
        <h5 class="card-title">{{info.tvrtka}}</h5>
      </li>
      <li class="list-group-item">
        <h5 class="card-title">{{info.objavljeno}}</h5>
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
  props: ["info"],
  name: "cardPonuda",
  data() {
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
};
</script>
