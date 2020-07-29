<template>
  <q-page class="bg-grey-3 column">
<template>
  <div class="q-pa-md" >
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="accent"
        align="justify"
      >
        <q-tab name="mails" label="Dev.to" />
        <q-tab name="alarms" label="Hackernoon" />
        <q-tab name="movies" label="hackerNews" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="mails" class="q-pa-none">
          <!-- <q-tab-panel name="mails"> -->
          <!-- <div class="text-h6">Dev.to</div> -->
          <devtofetch></devtofetch>
        </q-tab-panel>

          <q-splitter
            v-model="splitterModel"
            
          >

    

          </q-splitter>
        </q-tab-panel>
          

        <q-tab-panel name="alarms">
          <!-- <div class="text-h6">Hackernoon</div> -->
          <stackoverflowfetch></stackoverflowfetch>
        </q-tab-panel>

        <q-tab-panel name="movies">
          <!-- <div class="text-h6">HackerNews</div> -->
          <hackernewfetch></hackernewfetch>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>s

  </q-page>
</template>

<script>
import devtofetch from '../components/devtofetch.vue'
import hackernewfetch from '../components/hackernewfetch.vue'
import stackoverflowfetch from '../components/stackoverflowfetch.vue'
export default {

  components : {
devtofetch,
hackernewfetch,
stackoverflowfetch
  },
data () {
    return {
     tab: 'mails',
      innerTab: 'innerMails',
      splitterModel: 20
    }
  }
}
</script>
