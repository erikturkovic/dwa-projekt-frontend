<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <a class="navbar-brand" href="#">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Praksomat</a>
        </div>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-taget="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li v-if="authenticated" class="nav-item">
            <router-link to="/ponude" class="nav-link">Ponude</router-link>
          </li>
          <li v-if="authenticated" class="nav-item">
            <router-link to="/profil" class="nav-link">Profil</router-link>
          </li>
          <li v-if="!authenticated" class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li v-if="!authenticated" class="nav-item">
            <router-link to="/register" class="nav-link">Register</router-link>
          </li>
          <li v-if="authenticated" class="nav-item">
            <a href="#" @click.prevent="logout()" class="nav-link">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="containter">
      <router-view />
    </div>
  </div>
</template>

<script>
import { Auth } from "@/services";
import axios from "axios";
import Vue from "vue";

export default {
  data() {
    return {
      ...Auth.state,
    };
  },
  methods: {
    logout() {
      Auth.logout();
      this.$router.go();
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
