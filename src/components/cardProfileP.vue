<template>
  <div class="login">
    <p></p>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-floating mb-4">
              <input
                type="email"
                readonly
                class="form-control"
                id="floatingPlaintextInput"
                v-model="email"
                value= uservrsta.vrsta
              />
              <label for="floatingPlaintextInput">E-mail : </label>
            </div>
            <div class="form-floating mb-4">
              <input
                type="vrsta"
                readonly
                class="form-control"
                id="floatingPlaintextInput"
                v-model="vrsta"
              />
              <label for="floatingPlaintextInput">Ja sam : </label>
            </div>
          </form>
          <h3>Detalji profila</h3>
          <p></p>
          <div class="form-floating mb-4">
            <input
              type="ime"
              class="form-control"
              id="floatingPlaintextInput"
              v-model="ime"
            />
            <label for="floatingPlaintextInput">Ime : </label>
          </div>
          <div class="form-floating mb-4">
            <input
              type="prezime"
              class="form-control"
              id="floatingPlaintextInput"
              v-model="prezime"
            />
            <label for="floatingPlaintextInput">Prezime : </label>
          </div>
          <div class="form-floating mb-4">
            <input
              type="fakultet"
              class="form-control"
              id="floatingPlaintextInput"
              v-model="fakultet"
            />
            <label for="floatingPlaintextInput">Fakultet : </label>
          </div>
          <div class="form-floating mb-4">
            <input
              type="jmbag"
              class="form-control"
              id="floatingPlaintextInput"
              v-model="jmbag"
            />
            <label for="floatingPlaintextInput">JMBAG : </label>
          </div>
          <div class="form-floating mb-4">
            <select
              class="form-select"
              id="floatingSelect"
              aria-label="Floating label select example"
              v-model="godina"
            >
              <option selected>Open this select menu</option>
              <option value="Prva preddiplomski">Prva preddiplomski</option>
              <option value="Druga preddiplomski">Druga preddiplomski</option>
              <option value="Treća preddiplomski">Treća preddiplomski</option>
              <option value="Prva diplomski">Prva diplomski</option>
              <option value="Druga diplomski">Druga diplomski</option>
            </select>
            <label for="floatingSelect">Godina</label>
          </div>
          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style="height: 100px"
              v-model="kratkiOpis"
            ></textarea>
            <label for="floatingTextarea2"
              >Kratki opis (što me zanima) :
            </label>
            <p></p>
          </div>
          <div class="form-floating mb-4">
            <button
              @click="unesiPodatkeStudenta"
              type="submit"
              class="btn btn-primary"
            >
              Unesi podatke
            </button>
          </div>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Auth } from "@/services";
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      vrsta: "",
      ime: "",
      prezime: "",
      radimU:"",
      kratkiOpis: "",
    };
  },
  methods: {
    unesiPodatkeStudenta() {
      let uservrsta = JSON.parse(localStorage.getItem("korisnikData"));
      let detaljiPoslodavca = {
        email: uservrsta.email,
        vrsta: uservrsta.vrsta,
        ime: this.ime,
        prezime: this.prezime,
        fakultet: this.fakultet,
        jmbag: this.jmbag,
        godina: this.godina,
        kratkiOpis: this.kratkiOpis,
      };
      axios.post("http://localhost:3000/detaljiStudenta", detaljiPoslodavca);
    },
    provjeraVrste() {
      if (uservrsta.vrsta == "Student") {
        return true;
      }
      return false;
    },
  },
};
</script>
