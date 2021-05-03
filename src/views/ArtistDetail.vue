<template>
  <v-container v-if="artist">
    <v-img
      :src="artist.img"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="500px"
    />
    <v-alert
      border="left"
      dark
    >
      <div class="text-h3">{{ artist.name }}</div>
      {{ artist.description }}
    </v-alert>
    <v-row class="mx-auto my-2">
      <template>
        <v-col
          class="mt-2"
          cols="12"
        >
          <strong>멤버 소개</strong>
        </v-col>

        <v-col
          v-for="member in artist.members"
          :key="member.id"
          cols="4"
          md="3"
        >
          <v-img
            :src="member.img"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title v-text="member.name"></v-card-title>
          </v-img>
        </v-col>
      </template>

      <v-row v-if="artist.albums.length">
        <v-col
          class="mt-6"
          cols="12"
        >
          <strong>앨범 목록</strong>
        </v-col>
        <v-col
          cols="12"
          md="12"
        >
          <v-carousel
            reverse-transition="fade-transition"
            transition="fade-transition"
            hide-delimiters
            v-model="albumIndex"
            class="mx-auto"
          >
            <v-carousel-item
              v-for="album in artist.albums"
              :key="album.id"
            >
              <v-img
                :src="album.img"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="500px"
              >
                <v-card-title v-text="album.name"></v-card-title>
              </v-img>
            </v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col
            cols="12"
            md="12"
          >
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">
                  Track
                </th>
                <th class="text-left">
                  Name
                </th>
                <th class="text-left">
                  Paly Time
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="music in artist.albums[albumIndex].music"
                :key="music.id"
              >
                <td>{{ music.track }}</td>
                <td>{{ music.name }}
                  <v-chip v-if="music.title" class="ml-2" dark x-small>
                    Title
                  </v-chip>
                </td>
                <td>{{ music.play_time }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'Agency',
  data() {
    return {
      artist: null,
      albumIndex: 0
    }
  },
  async created() {
    const result = await this.$apollo.query({
      // Query
      query: gql`query {
        artists(id: ${ this.$route.params.id }) {
          name
          img
          description
          members {
            id
            name
            img
          }
          albums {
            id
            name
            img
            music {
              id
              track
              name
              title
              play_time
            }
          }
        }
      }`,
    });
    this.artist = result.data.artists[0];
  }
}
</script>

<style>

</style>