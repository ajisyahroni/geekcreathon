<template>
<div>
  <v-toolbar color="primary" dark>
    <v-toolbar-title>Ekspedisi Apps</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn text>Login</v-btn>
      <v-btn text>Register</v-btn>
    </v-toolbar-items>

  </v-toolbar>
  <v-app>
    <router-view></router-view>
  </v-app>
</div>
</template>

<script>
import a from "axios";
export default {
  mounted() {},
  methods: {},
  name: "App"
};
</script>
