<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-app-bar-nav-icon @click="moveToPage">
        <v-icon>{{ appbarIcon }}</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title class="hand-pointer" @click="moveToHome">Artists Of Agency</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row no-gutters justify="center">
          <v-col cols="10">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        appbarIcon: 'mdi-music'
      }
    },
    watch: {
      async $route(to) {
        if(to.path == '/') this.appbarIcon = 'mdi-music';
        else this.appbarIcon = 'mdi-chevron-left';
      }
    },
    methods: {
      moveToPage() {
        this.$router.go(-1);
      },
      moveToHome() {
        this.$router.push({ path: '/' });
      }
    },
    created() {
      this.$vuetify.theme.dark = true;
    }
  }
</script>

<style>
.hand-pointer {
  cursor: pointer;
}
</style>