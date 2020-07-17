<template>
  <q-page class="flex flex-center">
    <div v-for="(postit,index) in post" :key="index">
      <card solde="1500" :name="postit.userName" :email="postit.userEmail"></card>
      <!-- {{post}} -->
    </div>
  </q-page>
</template>

<script>
import card from "../components/card.vue";
import gql from "graphql-tag";
export default {
  name: "PageIndex",
  components: {
    card
  },
  method: {},
  apollo: {
    post: {
      query: gql`
        query {
          post: users {
            userId
            userName
            userEmail
          }
        }
      `
    }
  }
};
</script>
