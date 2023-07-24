const app = Vue.createApp({
  data() {
    return {
      firstOutput: "",
      secondOutput: "",
    };
  },
  methods: {
    buttonAlert() {
      alert("alert pressed");
    },
    setOutput1(event) {
      this.firstOutput = event.target.value;
    },
    setOutput2(event) {
      this.secondOutput = event.target.value;
    },
  },
});
app.mount("#assignment");
