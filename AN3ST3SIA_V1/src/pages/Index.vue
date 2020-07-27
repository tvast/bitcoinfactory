<template>
  <q-page class="flex flex-center">
    <div v-for="(postit,index) in post" :key="index">
      <card
        :user_achat="postit.transaction"
        :user_solde="postit.sold"
        :user_name="postit.solde"
        :user_email="postit.email"
      ></card>
      <!-- {{post}} -->
    </div>
    <div v-for="(ifoo,index) in userprofile" :key="index">
      <card user_solde="1500" :user_name="ifoo.name" :user_email="ifoo.email"></card>
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
  mounted() {
    console.log(this);
  },
  method: {},
  apollo: {
    post: {
      query: gql`
        query {
          post: accounts {
            sold
            transaction
            id
            userId
          }
        }
      `
    },
    userprofile: {
      query: gql`
        query {
          userprofile: users {
            name
            lastname
            email
            id
          }
        }
      `
    }
  }
};
</script>
