<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="drawer = !drawer"
        />
      </q-toolbar>
<div class="q-px-lg q-pt-xl q-mb-md">
  <div class="text-subtitle">
          An another day on hearth : {{getDateNow}}
        </div>
      <div class="text-h3">
      
        AN3ST3SIA
         
      </div>
       <div class="text-subtitle">
            hacker story website
        </div>
        </div>
        <q-img class="header-image absolute-top" src="../assets/matrix.jpg"></q-img>
    </q-header>

    <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item to="/" clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                Inbox
              </q-item-section>
            </q-item>

            <q-item to="/about"active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>

              <q-item-section>
               About
              </q-item-section>
            </q-item>
            <q-item to="/"active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="message" />
              </q-item-section>

              <q-item-section>
                Blog
              </q-item-section>
            </q-item>

        
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="../assets/matrix.jpg" style="height: 206px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Razvan Stoenescu</div>
            <div>@rstoenescu</div>
          </div>
        </q-img>
      </q-drawer>

    <q-page-container>

      <router-view />

    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksData = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev"
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework"
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev"
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev"
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev"
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev"
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev"
  }
];
import { date } from 'quasar'
export default {
  
  name: "MainLayout",
  components: { EssentialLink },
  data() {
    return {
      drawer: false,
      essentialLinks: linksData
    };
  }, computed: {
    getDateNow() {
      let timeStamp = Date.now()
       let formattedString = date.formatDate(timeStamp, 'dddd D MMMM')
      return formattedString
    }
  }
};
</script>
<style lang="scss">
.header-image {
  height: 100%;
  z-index: -1;
  opacity: 0.4;
  filter: grayscale(100%);
}
</style>