
<template>
  <q-page class="bg-grey-3 column">


<template>
  <div v-if="listOfarticleHN" class="q-pa-md" >
    <q-list>
      <q-item class="q-px-lg q-pt-xl q-mb-md" v-for="(item, index) in listOfarticleHN" :key="index">
        <q-item-section>
          <a :href="item.link"><q-item-label>{{item.title}}</q-item-label></a> 
          <q-item-label caption>{{item.author}}</q-item-label>
        </q-item-section>

        <!-- <q-item-section side top>
          <q-item-label caption>Number of comments :{{item.author}}</q-item-label>
        </q-item-section> -->

       
      </q-item>
      <q-separator spaced inset />
    </q-list>
  </div>
</template>
  </q-page>
</template>

<script>
export default {
data () {
    return {
      expanded: false,
     
    //   listOfarticle : null,
      listOfarticleHN : null,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  
  },methods : {
    // getDevtoArticle(){
    //   let request= "https://dev.to/api/articles?tag=hack"
    //  fetch(request) .then(function (res) {
    //             return res.json();
    //         })
    //         .then(x=> {
    //           this.listOfarticle = x
    //             console.log(x);
    //         }).catch(function (err) {
    //             console.log(err)
    //         })
    // },
        getHackernews(){
      let request= "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fhackernoon.com%2Ffeed"



     fetch(request) .then(function (res) {
                return res.json();
            })
            .then(x=> {
              this.listOfarticleHN = x.items
                console.log(x);
            }).catch(function (err) {
                console.log(err)
            })
    }
  },
    mounted() {
        // this.getDevtoArticle();
        this.getHackernews();
    }
}
</script>
