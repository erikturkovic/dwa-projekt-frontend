<template>
  <div class="home">
    <div class="card-body p-2"></div>
    <div class="card text-center">
      <div class="d-grid col-8 mx-auto">
        <button class="btn btn-primary" type="button">Internship</button>
      </div>
      <div class="container text-center">
<table class="table caption-top">
  <thead class='table-dark'>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead >
  <tbody class='table-dark'>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
        </div>
      </div>
      <div class="card-body p-2"></div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
  },
};
</script>
