const app = Vue.createApp({
  data() {
    return {
      name: "Jose",
      age: 5,
      url: "https://ca-times.brightspotcdn.com/dims4/default/e039caf/2147483647/strip/true/crop/5437x3625+0+0/resize/1200x800!/format/webp/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F8a%2Fc0%2F56668fee45068cd66d0dd12d0438%2F636352-sd-no-vista-school-open-jv119.JPG",
    };
  },
  methods: {
    getInFive() {
      return this.age + 5;
    },
    favNumber() {
      return Math.random();
    },
  },
});
app.mount("#assignment");
