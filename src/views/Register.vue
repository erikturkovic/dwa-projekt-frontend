<template>
  <div class="about">
    <h1>Login</h1>
    <form class="container-fluid justify-content-start">
      <div>Ja sam: {{ selected }}</div>

      <select v-model="vrsta">
        <option disabled value="Student">
          Odaberite "Student" ili "Poslodavac"
        </option>
        <option>Student</option>
        <option>Poslodavac</option>
      </select>
    </form>
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
              <label for="InputPassword1">Ime</label>
              <input
                type="text"
                class="form-control"
                id="InputPassword1"
                placeholder="Upiši ime"
                v-model="ime"
              />
            </div>
            <div class="form-group">
              <label for="InputPassword1">Prezime</label>
              <input
                type="text"
                class="form-control"
                id="InputPassword1"
                placeholder="Upiši prezime"
                v-model="prezime"
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

export default {
  name: "Register",
  data() {
    return {
      email: "",
      ime: "",
      prezime: "",
      password: "",
      vrsta: "",
    };
  },
  methods: {
    register() {
      if (this.vrsta == "Student") {
        let student = {
          email: this.email,
          ime: this.ime,
          prezime: this.prezime,
          password: this.password,
          vrsta: this.vrsta,
        };
        console.log(student);
        axios.post("http://localhost:3000/studenti", student);
      } else {
        let poslodavac = {
          email: this.email,
          ime: this.ime,
          prezime: this.prezime,
          password: this.password,
          vrsta: this.vrsta,
        };
        console.log(poslodavac);
        axios.post("http://localhost:3000/poslodavci", poslodavac);
      }
    },
  },
};
</script>