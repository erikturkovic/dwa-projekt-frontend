<template>
  <div class="about">
    <h1>Register</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="InputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="InputEmail1"
                aria-describedby="emailHelp"
                placeholder="Upiši email"
                v-model="email"
              />
            </div>
            <div class="form-group">
              <label for="InputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="InputPassword1"
                placeholder="Lozinka"
                v-model="password"
              />
            </div>
            <form class="container-fluid justify-content-start">
              <div>Ja sam: {{ selected }}</div>

              <select v-model="vrsta">
                <option disabled value=null>
                  Odaberite "Student" ili "Poslodavac"
                </option>
                <option>Student</option>
                <option>Poslodavac</option>
              </select>
            </form>
            <button @click="register" type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import {Auth} from "@/services";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      vrsta: "",
    };
  },
  methods: {
    register() {
      let korisnikData = {
        email: this.email,
        password: this.password,
        vrsta: this.vrsta,
      };
      axios.post("http://localhost:3000/korisnici", korisnikData);
      this.$router.push({ name: "ponude" });
    },
  },
};
</script>
