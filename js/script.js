const { createApp } = Vue

createApp({
  data() {
    return {
     email: [],
     emailsGeneratorAll: true,
    }
  },
  methods: {
    generateMails: function () {
        this.emailsGeneratorAll= false;
        this.email=[];
        for (let i = 0; i < 10; i++ ) {
        axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((resp) => {
          //console.log(resp.data.response);
         
          this.email.push(resp.data.response);
          console.log(this.email)
          
          if (this.email.length === 10) {
            this.emailsGeneratorAll = true
          }
          
        });
    }
    },
  }
}).mount('#app')
