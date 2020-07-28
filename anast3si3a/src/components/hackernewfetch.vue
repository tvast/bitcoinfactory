<template>
  <q-page class="bg-grey-3 column">


<template>
  <div class="q-pa-md" >
    <q-list>
      <q-item class="q-px-lg q-pt-xl q-mb-md" v-for="(item, index) in listOfarticleHN" :key="index">
        <q-item-section>
          <a :href="item.url"><q-item-label>{{item.title}}</q-item-label></a> 
          <q-item-label caption>{{item.author}}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>Number of comments :{{item.num_comments}}</q-item-label>
        </q-item-section>
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
      let request= "http://hn.algolia.com/api/v1/search?tags=front_page"
     fetch(request) .then(function (res) {
                return res.json();
            })
            .then(x=> {
              this.listOfarticleHN = x.hits
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
