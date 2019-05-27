<template>
  <v-app>
    <v-toolbar app class="teal">
      <v-toolbar-title class="headline white--text text-camelcase">
        <span>WannaGo</span>
        <span class="font-weight-light"></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon class="white--text">search</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
    <v-footer height="auto" color="teal">
      <v-layout justify-center align-content-space-around wrap>
        <v-btn icon><v-icon class="white--text">home</v-icon></v-btn>
        <v-btn icon><v-icon class="white--text">message</v-icon></v-btn>
        <v-btn icon><v-icon class="white--text">mdi-account</v-icon></v-btn>
        <v-btn icon><v-icon class="white--text">mdi-menu</v-icon></v-btn>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
    }
  }
}
</script>
