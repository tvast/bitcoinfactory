<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" />

      <q-card-section>
        <div class="text-overline text-orange-9">{{user_name}}</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{user_email}}</div>
        <div class="text-caption text-grey">{{user_solde}}</div>
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="dark" label="profile" />
        <q-btn flat color="primary" label="account" />

        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <!-- {{user_solde}} -->
          <div v-for="(item, index) in user_achat" :key="index">
            <q-card-section class="text-subitle2">achat : {{ item.achat }}</q-card-section>
          </div>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expanded: false
    };
  },
  name: "card",
  props: ["user_solde", "user_name", "user_email", "user_achat"]
};
</script>