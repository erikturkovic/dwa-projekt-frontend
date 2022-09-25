<template>
  <div class="card bg-success">
    <p></p>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <h3>Osnovni podaci</h3>
            <div class="form-floating mb-4">
              <input
                v-if="podatki[0]"
                class="form-control"
                type="email"
                value="Readonly input here..."
                aria-label="readonly input example"
                readonly
                v-model="podatki[0].email"
              />
              <p></p>
              <input
                v-if="podatki[0]"
                class="form-control"
                type="text"
                value="Readonly input here..."
                aria-label="readonly input example"
                readonly
                v-model="podatki[0].vrsta"
              />
              <input
                v-if="!podatki[0]"
                type="email"
                readonly
                class="form-control"
                id="floatingPlaintextInput"
                v-model="email"
                value="uservrsta.vrsta"
              />
              <label v-if="podatki[0]" for="floatingPlaintextInput"
                >E-mail :
              </label>
            </div>
            <div class="form-floating mb-4">
              <input
                v-if="!podatki[0]"
                type="vrsta"
                readonly
                class="form-control"
                id="floatingPlaintextInput"
                v-model="vrsta"
              />
              <label v-if="!podatki[0]" for="floatingPlaintextInput"
                >Ja sam :
              </label>
            </div>
          </form>
          <h3>Detalji profila</h3>
          <p></p>
          <input
            v-if="podatki[0]"
            class="form-control"
            type="email"
            value="Readonly input here..."
            aria-label="readonly input example"
            readonly
            v-model="podatki[0].ime"
          />
          <button
            v-if="podatki[0]"
            type="button"
            class="btn btn-primary btn-sm"
          >
            Update
          </button>
          <p></p>
          <input
            v-if="podatki[0]"
            class="form-control"
            type="email"
            value="Readonly input here..."
            aria-label="readonly input example"
            readonly
            v-model="podatki[0].prezime"
          />
          <button
            v-if="podatki[0]"
            type="button"
            class="btn btn-primary btn-sm"
          >
            Update
          </button>
          <p></p>
          <input
            v-if="podatki[0]"
            class="form-control"
            type="email"
            value="Readonly input here..."
            aria-label="readonly input example"
            readonly
            v-model="podatki[0].fakultet"
          />
          <button
            v-if="podatki[0]"
            type="button"
            class="btn btn-primary btn-sm"
          >
            Update
          </button>
          <p></p>
          <input
            v-if="podatki[0]"
            class="form-control"
            type="email"
            value="Readonly input here..."
            aria-label="readonly input example"
            readonly
            v-model="podatki[0].jmbag"
          />
          <button
            v-if="podatki[0]"
            type="button"
            class="btn btn-primary btn-sm"
          >
            Update
          </button>
          <p></p>
          <input
            v-if="podatki[0]"
            class="form-control"
            type="email"
            value="Readonly input here..."
            aria-label="readonly input example"
            readonly
            v-model="podatki[0].godina"
          />
          <button
            v-if="podatki[0]"
            type="button"
            class="btn btn-primary btn-sm"
          >
            Update
          </button>
          <p></p>
          <input
            v-if="podatki[0]"
            class="form-control"
            type="email"
            value="Readonly input here..."
            aria-label="readonly input example"
            readonly
            v-model="podatki[0].kratkiOpis"
          />
          <button
            v-if="podatki[0]"
            type="button"
            class="btn btn-primary btn-sm"
          >
            Update
          </button>
          <p></p>
          <div class="form-floating mb-4">
            <input
              type="ime"
              class="form-control"
              id="floatingPlaintextInput"
              v-model="ime"
              v-if="!podatki[0]"
            />
            <label v-if="!podatki[0]" for="floatingPlaintextInput"
              >Ime :
            </label>
          </div>
          <div class="form-floating mb-4">
            <input
              type="prezime"
              class="form-control"
              id="floatingPlaintextInput"
              v-model="prezime"
              v-if="!podatki[0]"
            />
            <label v-if="!podatki[0]" for="floatingPlaintextInput"
              >Prezime :
            </label>
          </div>
          <div class="form-floating mb-4">
            <input
              type="fakultet"
              class="form-control"
              id="floatingPlaintextInput"
              v-model="fakultet"
              v-if="!podatki[0]"
            />
            <label v-if="!podatki[0]" for="floatingPlaintextInput"
              >Fakultet :
            </label>
          </div>
          <div class="form-floating mb-4">
            <input
              type="jmbag"
              class="form-control"
              id="floatingPlaintextInput"
              v-model="jmbag"
              v-if="!podatki[0]"
            />
            <label v-if="!podatki[0]" for="floatingPlaintextInput"
              >JMBAG :
            </label>
          </div>
          <div v-if="!podatki[0]" class="form-floating mb-4">
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
              v-if="!podatki[0]"
            ></textarea>
            <label v-if="!podatki[0]" for="floatingTextarea2"
              >Kratki opis (što me zanima) :
            </label>
            <p></p>
          </div>
          <div class="form-floating mb-4">
            <button
              v-if="!podatki[0]"
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
      fakultet: "",
      jmbag: "",
      godina: "",
      podatki: [],
      kratkiOpis: "",
    };
  },
  methods: {
    unesiPodatkeStudenta() {
      let uservrsta = JSON.parse(localStorage.getItem("korisnikData"));
      let detaljiStudenta = {
        email: uservrsta.email,
        vrsta: uservrsta.vrsta,
        ime: this.ime,
        prezime: this.prezime,
        fakultet: this.fakultet,
        jmbag: this.jmbag,
        godina: this.godina,
        kratkiOpis: this.kratkiOpis,
      };
      axios.post("http://localhost:3000/detaljiStudenta", detaljiStudenta);
      this.$router.go();
    },
  },
  async mounted() {
    let uservrsta = JSON.parse(localStorage.getItem("korisnikData"));
    let rezultat = await fetch(
      "http://localhost:3000/detaljiStudenta?email=" + uservrsta.email
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.podatki = data;
      });
  },
};
</script>
