<template>
  <q-page class="bg-grey-3 column">
    <div class="q-pa-md" style="max-width: 350px">
 <q-input class="q-px-lg q-pt-xl q-mb-md" rounded  v-model="inputSearch" label="Hack, Vue, Node, Linux..." />
<!-- getDevtoArticle() -->

<q-btn sizes="md" rounded @click="getDevtoArticle()" color="primary" label="Search topics on Dev.to" />
    </div>
<q-separator />

<template>
  <div class="q-pa-md" >
    <q-list bordered separator>
            <q-intersection
        v-for="(item, index) in listOfarticle" :key="index"
        class="example-item"
      >
      <q-item class="q-px-lg q-pt-xl q-mb-md" >
        <q-item-section>
          <a :href="item.url"><q-item-label>{{item.title}}</q-item-label></a> 
          <q-item-label caption>Author : {{item.user.name}}</q-item-label>
          <q-item-label caption>Description :{{ item.description}}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>Number of comments :{{item.comments_count}}</q-item-label>
        </q-item-section>
             <!-- <template v-if="item.cover_image">
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
  </template> -->
      </q-item>
   
      </q-intersection>
    </q-list>
  </div>
</template>
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
