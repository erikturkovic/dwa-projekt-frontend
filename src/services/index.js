import axios from 'axios';

let Service = axios.create({
    baseURL:'http://localhost:3000',
    timeout:1000
});

let Auth = {
    async login(email,password){
        let response = await Service.post("/auth",{
            email: email,
            password: password,
        });
        let korisnikData = response.data
        localStorage.setItem('korisnikData',JSON.stringify(korisnikData));

        return true
    },
    logout(){
        localStorage.removeItem("korisnikData")
    },
    getkorisnikData(){
        return JSON.parse(localStorage.getItem("korisnikData"));
    },

    authenticated(){
        let korisnikData = Auth.getkorisnikData()
        if(korisnikData && korisnikData.token){
            return true
        }return false
    },

    state:{
        get authenticated(){
            return Auth.authenticated();
        }
    }
}

export {Service,Auth}