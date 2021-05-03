import Vue from "vue";
import App from "./App.vue";
import router from './router';
import vuetify from './plugins/vuetify';


import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// Create the apollo client
const apolloClient = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache(),
})

Vue.use(VueApollo)

Vue.config.productionTip = false;

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  router,
  apolloProvider,
  vuetify,
  render: h => h(App)
}).$mount("#app");
