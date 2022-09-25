<template>
  <v-container fill-height fluid class="justify-center">
    <p></p>
    <div v-if="provjeren">
      <cardProfileS/>
    </div>
    <div v-if="!provjeren">
      <cardProfileP/>
    </div>
  </v-container>
</template>

<script>
import { Auth } from "@/services";
import axios from "axios";
import cardProfileS from "@/components/cardProfileS.vue";
import cardProfileP from "@/components/cardProfileP.vue";



export default {
  data() {
    return {
      ...Auth.state,
      selected: "",
      Sam: "",
      test: "",
    };
  },
  name: "Profil",
  components: {
    cardProfileP,
    cardProfileS,
  },
  methods: {

  },
  mounted() {

  },
};
</script>
