const { createApp } = Vue;

createApp({
    data() {
        return {
            arrayEmail:[],
            numberOfEmail: "",
            inputNumberOfEmail: ""
        }
    },
    methods: {
        generateRndMail() {
            this.arrayEmail = [];
            this.numberOfEmail = this.inputNumberOfEmail
            for (let i = 0; i < this.numberOfEmail; i++) {
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((resp) => {
                    this.arrayEmail.push(resp.data.response);
                }) 
            }
        },
    },
}).mount("#app")