<template>
  <div class="about">
    <h1>Login</h1>
    <form class="container-fluid justify-content-start">
<div>Selected: {{ selected }}</div>

<select v-model="vrsta">
  <option disabled value="">Odaberite "Student" ili "Poslodavac"</option>
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
                placeholder="Enter email"
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
            <button @click="register" type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name:'Register',
  data(){
    return{
      email:'',
      ime:'',
      prezime:'',
      password:'',
      vrsta:'',


    }
  },
  methods:{
    register(){
      console.log(this.email);
      console.log(this.ime);
      console.log(this.prezime);
      console.log(this.password);
      console.log(this.vrsta)
    },

  }
}
</script>
