<template>
  <cardPonuda />
</template>

<script>
import Vue from "vue";
import { TableComponent, TableColumn } from "vue-table-component";
import cardPonuda from "@/components/cardPonuda.vue";

export default {
  data: function () {
    return {
      ponude: [],
    };
  },
  name: "Ponude",
  components: {
    cardPonuda,
  },
  mounted() {
   
  },
};
</script>
