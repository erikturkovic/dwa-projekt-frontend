<template>
  <div class="card bg-light">
    <p></p>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <h3>Osnovni podaci</h3>
            <div class="form-floating mb-4">
              <input
                type="email"
                readonly
                class="form-control"
                id="floatingPlaintextInput"
                v-model="email"
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
              type="prezime"
              class="form-control"
              id="floatingPlaintextInput"
              v-model="radimU"
            />
            <label for="floatingPlaintextInput">Radim u : </label>
          </div>
          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style="height: 100px"
              v-model="kratkiOpisP"
            ></textarea>
            <label for="floatingTextarea2">Kratki opis : </label>
            <p></p>
          </div>
          <div class="form-floating mb-4">
            <button
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

    };
  },
  methods: {

    }
  }
</script>
