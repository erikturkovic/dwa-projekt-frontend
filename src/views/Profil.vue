<template>
  <v-container fill-height fluid class="justify-center">
    <div class="container">
      <div class="row">
        <p></p>
        <div class="col-sm" v-if="provjeren">
          <cardProfileS />
        </div>
        <div class="col-sm" v-if="!provjeren">
          <cardProfileP />
        </div>
        <div class="col-sm" v-if="!provjeren">
          <cardObjavaPonude />
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import { Auth } from "@/services";
import axios from "axios";
import cardProfileS from "@/components/cardProfileS.vue";
import cardProfileP from "@/components/cardProfileP.vue";
import cardObjavaPonude from "@/components/cardObjavaPonude.vue";
import cardPodaciP from "@/components/cardPodaciP.vue";

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
    cardObjavaPonude,
    cardPodaciP,
  },
  methods: {},
  mounted() {},
};
</script>
