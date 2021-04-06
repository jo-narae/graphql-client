<template>
  <div>
    {{ agencies }}
  </div>
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
  },
  async created() {
    const result = await this.$apollo.query({
      // Query
      query: gql`query {
        agencies {
          id
          ceo
        }
      }`,
    });
    this.agencies = result.data.agencies;
  }
}
</script>

<style>

</style>