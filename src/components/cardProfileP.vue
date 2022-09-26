<template>
  <div class="card bg-secondary">
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
                class="form-control"
                type="text"
                value=""
                aria-label="Disabled input example"
                disabled
                readonly
                v-model="email"
              />
              <label v-if="!podatki[0]" for="floatingPlaintextInput"
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
          <div class="form-floating mb-4">
            <input
              v-if="podatki[0]"
              class="form-control"
              type="email"
              value="Readonly input here..."
              aria-label="readonly input example"
              v-model="podatki[0].ime"
            />
            <button
              @click="updateIme"
              v-if="podatki[0]"
              type="button"
              class="btn btn-success btn-sm"
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
              v-model="podatki[0].prezime"
            />
            <button
              @click="updatePrezime"
              v-if="podatki[0]"
              type="button"
              class="btn btn-success btn-sm"
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
              v-model="podatki[0].radimU"
            />
            <button
              @click="updateRadimU"
              v-if="podatki[0]"
              type="button"
              class="btn btn-success btn-sm"
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
              v-model="podatki[0].kratkiOpisP"
            />
            <button
              @click="updateKratkiOpisP"
              v-if="podatki[0]"
              type="button"
              class="btn btn-success btn-sm"
            >
              Update
            </button>
            <p></p>
            <input
              v-if="!podatki[0]"
              type="ime"
              class="form-control"
              id="floatingPlaintextInput"
              v-model="ime"
            />
            <label v-if="!podatki[0]" for="floatingPlaintextInput"
              >Ime :
            </label>
          </div>
          <div class="form-floating mb-4">
            <input
              v-if="!podatki[0]"
              type="prezime"
              class="form-control"
              id="floatingPlaintextInput"
              v-model="prezime"
            />
            <label v-if="!podatki[0]" for="floatingPlaintextInput"
              >Prezime :
            </label>
          </div>
          <div class="form-floating mb-4">
            <input
              v-if="!podatki[0]"
              type="prezime"
              class="form-control"
              id="floatingPlaintextInput"
              v-model="radimU"
            />
            <label v-if="!podatki[0]" for="floatingPlaintextInput"
              >Radim u :
            </label>
          </div>
          <div class="form-floating">
            <textarea
              v-if="!podatki[0]"
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style="height: 100px"
              v-model="kratkiOpisP"
            ></textarea>
            <label v-if="!podatki[0]" for="floatingTextarea2"
              >Kratki opis :
            </label>
            <p></p>
          </div>
          <div class="form-floating mb-4">
            <button
              v-if="!podatki[0]"
              @click="unesiPodatkePoslodavca"
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
      ime: "nedostaje ime",
      prezime: "nedostaje prezime",
      radimU: "nedostaje mjesto rada",
      kratkiOpisP: "nedostaje kratki opis",
      podatki: [],
      imaPodatke: "",
    };
  },
  methods: {
    unesiPodatkePoslodavca() {
      let uservrsta = JSON.parse(localStorage.getItem("korisnikData"));
      let detaljiPoslodavca = {
        email: uservrsta.email,
        vrsta: uservrsta.vrsta,
        ime: this.ime,
        prezime: this.prezime,
        radimU: this.radimU,
        kratkiOpisP: this.kratkiOpisP,
      };
      axios.post("http://localhost:3000/detaljiPoslodavca", detaljiPoslodavca);
      this.$router.go();
    },
    updateIme() {
      let odg = { ime: this.podatki[0].ime };
      let res = axios.patch(
        "http://localhost:3000/detaljiPoslodavca/" + this.podatki[0]._id,
        odg
      );
      this.$router.go();
    },
    updatePrezime() {
      let odg = { prezime: this.podatki[0].prezime };
      let res = axios.patch(
        "http://localhost:3000/detaljiPoslodavca/" + this.podatki[0]._id,
        odg
      );
      this.$router.go();
    },
    updateRadimU() {
      let odg = { radimU: this.podatki[0].radimU };
      let res = axios.patch(
        "http://localhost:3000/detaljiPoslodavca/" + this.podatki[0]._id,
        odg
      );
      this.$router.go();
    },
    updateKratkiOpisP() {
      let odg = { kratkiOpisP: this.podatki[0].kratkiOpisP };
      let res = axios.patch(
        "http://localhost:3000/detaljiPoslodavca/" + this.podatki[0]._id,
        odg
      );
      this.$router.go();
    },
  },
  async mounted() {
    let uservrsta = JSON.parse(localStorage.getItem("korisnikData"));
    let rezultat = await fetch(
      "http://localhost:3000/detaljiPoslodavca?email=" + uservrsta.email
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
