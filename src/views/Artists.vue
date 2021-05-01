<template>
  <v-container>
    <v-row>
      <v-col
        v-for="artist in artists"
        :key="artist.id"
        cols="3"
      >
        <v-card class="mx-auto my-2" light>
          <v-img
            :src="artist.img"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title v-text="artist.name"></v-card-title>
          </v-img>

          <v-card-actions>
            <v-spacer />
            <v-btn
              color="primary"
              text
              @click="moveToArtistDetail(artist.id)"
            >
              아티스트 상세보기
            </v-btn>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'Agency',
  data() {
    return {
      artists: []
    }
  },
  methods: {
    moveToArtistDetail(id) {
      this.$router.push({ path: `/artists/${id}` });
    }
  },
  async created() {
    const result = await this.$apollo.query({
      // Query
      query: gql`query {
        agencies(id: ${ this.$route.query.agencyId }) {
          name
          artists {
            id
            name
            img
          }
        }
      }`,
    });
    this.artists = result.data.agencies[0].artists;
  }
}
</script>

<style>

</style>