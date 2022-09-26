import axios from "axios";
import $router from "@/router";
import cardProfileS from "@/components/cardProfileS.vue";
import cardProfileP from "@/components/cardProfileP.vue";

const Service = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 10000,
});

//Service.interceptors.request.use((request) => {
//  let token = Auth.getToken;

//  if (!token) {
//    $router.go();
//    return
//  }
//  else{
//    request.headers("Authorization")="Bearer "+ token;

// }

// return request;
//});


let Auth = {
  async login(email, password) {
    let response = await Service.post("/auth", {
      email: email,
      password: password,
    });
    let korisnikData = response.data;
    localStorage.setItem("korisnikData", JSON.stringify(korisnikData));

    return true;
  },
  logout() {
    localStorage.removeItem("korisnikData");
  },
  getkorisnikData() {
    return JSON.parse(localStorage.getItem("korisnikData"));
  },
  getToken() {
    let korisnikData = Auth.getkorisnikData();
    if (korisnikData && korisnikData.token) {
      return korisnikData.token;
    }
  },
  getVrsta() {
    let korisnikData = Auth.getkorisnikData();
    if (korisnikData.vrsta == "Student") {
      return true;
    }
    return false;
  },
  authenticated() {
    let korisnikData = Auth.getkorisnikData();
    if (korisnikData && korisnikData.token) {
      return true;
    }
    return false;
  },

  provjeren() {
    let korisnikData = Auth.getkorisnikData();
    if (korisnikData.vrsta == "Student") {
      return true;
    }
    return false;
  },


  state: {
    get authenticated() {
      return Auth.authenticated();
    },
    get provjeren(){
      return Auth.provjeren();
    }
  },
};

export { Service, Auth};
