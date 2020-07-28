<template>
  <q-page class="bg-grey-3 column">
 <q-input rounded outlined v-model="inputSearch" label="Rounded outlined" />
<!-- getDevtoArticle() -->

<q-btn outline rounded @click="getDevtoArticle()" color="primary" label="Outline Rounded" />
<q-separator />
<div class="row center">
  
  <template v-if="listOfarticle">
     <q-card v-for="(item, index) in listOfarticle" :key="index" class="my-card col-5 q-px-lg q-pt-xl q-mb-md">
      <template v-if="item.cover_image">
      <q-parallax
        :src="item.social_image"
        :height="100" :speed="0.9"
      />
  </template>
  <template v-else>
<q-parallax
        src="../assets/matrix.jpg"
        :height="100" :speed="0.5"
      />
  </template>
      <q-card-section>
        <a :href="item.url"><div  class="text-h6">{{item.title}}</div> </a>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>
      
      <q-card-actions>
        <q-btn flat color="dark" label="Share" />
        <q-btn flat color="primary" label="Book" />

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
          <q-card-section class="text-subitle2">
            {{ item.description}}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
   
    </template>
    </div> 
  </q-page>
</template>

<script>
export default {
    props:['subject'],
data () {
    return {
      expanded: false,
     inputSearch : 'hack',
      listOfarticle : null,
      listOfarticleHN : null,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  
  },methods : {
    getDevtoArticle(){


      let request= "https://dev.to/api/articles?tag="+this.inputSearch
     fetch(request) .then(function (res) {
                return res.json();
            })
            .then(x=> {
              this.listOfarticle = x
                console.log(x);
            }).catch(function (err) {
                console.log(err)
            })
    },
    //     getHackernews(){
    //   let request= "http://hn.algolia.com/api/v1/search?tags=front_page"
    //  fetch(request) .then(function (res) {
    //             return res.json();
    //         })
    //         .then(x=> {
    //           this.listOfarticleHN = x
    //             console.log(x);
    //         }).catch(function (err) {
    //             console.log(err)
    //         })
    // }
  },
    mounted() {
        this.getDevtoArticle();
        // this.getHackernews();
    }
}
</script>
