<template>
    <v-layout row>
        <v-flex mb-2>
            <v-card>
                <v-container
                    fluid
                    grid-list-md>
                    <v-layout row wrap>
                        <v-flex
                            v-for="result in results"
                            :key="result">
                            <v-card>
                                <v-img
                                    class="profile"
                                    :src="result.picture.medium"
                                    height="100px"
                                    width="100px"
                                    />
                                <p>Name: {{ result.name.last + " " + result.name.first }}</p>
                                <p>E-mail: {{ result.email }}</p>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
                <router-link to="/">
                    <v-btn small>Top Page</v-btn>
                </router-link>
                <v-btn v-on:click="request()">Next</v-btn>
        </v-flex>
    </v-layout>
</template>

<script>
import axios from 'axios'
export default {
  name: 'developers',
  data () {
    return {
      results: ''
    }
  },
  methods: {
    request: function () {
      axios.get('https://randomuser.me/api/')
        .then((res) => {
          this.results = res.data.results
          console.log(res)
        })
        .catch((res) => {
          console.error(res)
        })
    },
    testFunc: function () {
      this.mes = 'HOOOOOO'
    }
  }
}
</script>
<style>
</style>
