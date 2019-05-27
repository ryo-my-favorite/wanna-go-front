<template>
    <v-layout row>
        <v-flex mb-2>
            <v-list two-line subheader>
                <v-list-tile
                    v-for="item in items"
                    :key="item.title"
                    avatar
                    v-on:click="moveTo(item.link)"
                >
                    <v-list-tile-content>
                        <v-list-tile-title>{{item.title}}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
            <p>
                <router-link to="/">
                    <v-btn small>Top Page</v-btn>
                </router-link>
            </p>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
  name: 'itemlist',
  methods: {
    moveTo: function (url) {
      window.open(url, '_blank')
    }
  },
  data: () => ({
    items: [
      {title: 'Savas', link: 'https://www.meiji.co.jp/sports/savas/products/protein.php'},
      {title: 'MyProtein', link: 'https://www.myprotein.jp/'},
      {title: 'GoldStandard', link: 'https://www.goldstandard.org/'}
    ]
  })
}
</script>

<style>
  .v-btn__content{
    border-bottom: none;
  }
</style>
