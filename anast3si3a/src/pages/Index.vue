<template>
  <q-page class="bg-grey-3 column">


<div class="row center">
  <template v-if="listOfarticle">
     <q-card v-for="(item, index) in listOfarticle" :key="index" class="my-card col-5 q-px-lg q-pt-xl q-mb-md">
      <template v-if="item.cover_image">
      <q-parallax
        :src="item.cover_image"
        :height="150"
      />
  </template>
  <template v-else>
<q-parallax
        src="../assets/matrix.jpg"
        :height="150"
      />
  </template>
      <q-card-section>
        <div class="text-h6">{{item.title}}</div>
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
data () {
    return {
      expanded: false,
      story : [
        {
          title : "test1",
          content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'"
        },
         {
          title : "test2",
          content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'"
        },
         {
          title : "test3",
          content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'"
        },
         {
          title : "test4",
          content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'"
        },
         {
          title : "test5",
          content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'"
        },
         {
          title : "test6",
          content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'"
        },
         {
          title : "test7",
          content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'"
        },
         {
          title : "test8",
          content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'"
        },
         {
          title : "test9",
          content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'"
        },
         {
          title : "test10",
          content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'"
        },
         {
          title : "test11",
          content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'"
        }

      ],
      listOfarticle : null,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  
  },methods : {
    getDevtoArticle(){
      let request= "https://dev.to/api/articles?tag=hack"
     fetch(request) .then(function (res) {
                return res.json();
            })
            .then(x=> {
              this.listOfarticle = x
                Console.log(x);
            }).catch(function (err) {
                console.log(err)
            })
    }
  },
    mounted() {
        this.getDevtoArticle()
    }
}
</script>
