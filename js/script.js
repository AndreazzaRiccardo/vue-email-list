const { createApp } = Vue;

createApp({
    data() {
        return {
            arrayEmail:[],
            numberOfEmail: "",
            inputNumberOfEmail: "",
            isLoading: false
        }
    },
    methods: {
        generateRndMail() {
            if(this.inputNumberOfEmail != 0) {
                this.isLoading = true;
                this.arrayEmail = [];
                this.numberOfEmail = this.inputNumberOfEmail;
                for (let i = 0; i < this.numberOfEmail; i++) {
                    axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((resp) => {
                        this.arrayEmail.push(resp.data.response);
                        if(this.arrayEmail.length === this.numberOfEmail){
                            this.isLoading = false;
                        }
                    }) 
                }
                this.inputNumberOfEmail = "";
            }
        },
    },
}).mount("#app")