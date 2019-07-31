<template>
  <div>this is login</div>
</template>

<script>
import a from "axios";
export default {
  mounted() {
    this.goLogin();
  },
  data() {
    return {
      dataLogin: {
        username: "sfelix_martins@hotmail.com",
        password: "secret",
        provider: "users"
      }
    };
  },
  methods: {
    goLogin() {
      a.post(
        "http://10.200.179.166/geekcreation/public/api/login",
        this.dataLogin
      ).then(res => {
        let { access_token } = res.data;
        console.log(access_token);
      });
    }
  }
};
</script>

<style>
</style>
