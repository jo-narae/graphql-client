<template>
  <v-container>
    <v-row>
      <v-col
        v-for="agency in agencies"
        :key="agency.id"
        cols="3"
      >
      <v-card class="mx-auto my-2" light>
        <v-img
          :src="agency.img"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="200px"
        >
          <v-card-title v-text="agency.name"></v-card-title>
        </v-img>

        <v-card-text>
          <div class="my-4 subtitle-1">
            대표자명 : {{ agency.ceo }}
          </div>

          <div>주소 : {{ agency.address }}</div>
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            text
            @click="moveToArtists(agency.id)"
          >
            소속 아티스트 보기
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
      agencies: []
    }
  },
  methods: {
    moveToArtists(agencyId) {
      this.$router.push({ path: '/artists', query: { agencyId } });
    }
  },
  async created() {
    const result = await this.$apollo.query({
      // Query
      query: gql`query {
        agencies {
          id
          name
          ceo
          address
          img
        }
      }`,
    });
    this.agencies = result.data.agencies;
  }
}
</script>

<style>

</style>