<template>
  <q-page class="flex flex-center">
        <!-- Page Content-->
        <div class="container-fluid p-0">
            <!-- About-->
            <section class="resume-section" id="about">
                <div class="resume-section-content">
                    <h4 class="mb-0">
                       <span class="text-primary">
    <vue-typed-js loop fadeOutClass :strings="['Hacker', 'Developer','Citizen','curious']">
  <h3>Hey <span class="typing"></span></h3>
</vue-typed-js></span>
 Welcome to th best tech source for your peronal knowledge management
                        
                    </h4>
                    <div class="subheading mb-5">
                        Our algorythm choose the best hacker link, follow us on telegram and ACAB ! ·
                        <a href="https://t.me/joinchat/AAAAAFeNdCqgR8mspAFAPQ">Go to telegram</a>
                    </div>
                    <!-- <p class="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p> -->
                    <div class="social-icons">
                        <!-- <a class="social-icon" href="#"><i class="fab fa-linkedin-in"></i></a>
                        <a class="social-icon" href="#"><i class="fab fa-github"></i></a>
                        <a class="social-icon" href="#"><i class="fab fa-twitter"></i></a> -->
                        <a class="" href="https://t.me/joinchat/AAAAAFeNdCqgR8mspAFAPQ">           <div class=""><div>
  <svg width="83.775" height="83.776" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 83.775002 83.776001"><path fill="#007bff" d="M35.722 50.212l3.404 2.537c-1.186 1.17-2.374 2.341-3.556 3.51-.11.113-.213.231-.321.346l.057-.774c.136-1.872.273-3.747.416-5.619zm9.321-16.504c-5.763 3.635-11.526 7.28-17.292 10.913-.117.073-.245.13-.375.189.755 2.414 1.51 4.829 2.263 7.245.538 1.7 1.096 3.396 1.605 5.103.21.708.574 1.087 1.342.953.213-2.889.417-5.776.635-8.666.025-.337.065-.679.106-1.016-.326-.187-.183-.545-.07-.663.199-.205.398-.414.597-.622.071-.066.145-.133.214-.199l.296-.311c.477-.444.952-.896 1.429-1.342a298.74 298.74 0 0 1 3.052-2.838c1.914-1.74 3.867-3.44 5.785-5.173a960.19 960.19 0 0 0 7.306-6.669c.178-.247.293-.565.449-.837-.434.058-.943-.014-1.288.189-2.039 1.215-4.045 2.478-6.054 3.744zm38.732 8.18c0 23.134-18.754 41.888-41.888 41.888C18.752 83.776 0 65.022 0 41.888 0 18.753 18.752 0 41.887 0c23.134 0 41.888 18.753 41.888 41.888zM60.592 25.2c-.022-.16-.038-.324-.07-.481-.369-1.778-1.343-2.315-3.087-1.718-.256.086-.518.142-.778.213-.973.402-1.936.832-2.923 1.201-1.636.617-3.288 1.194-4.938 1.789-1.006.419-2.005.857-3.02 1.254-2.543.994-5.091 1.969-7.638 2.953a65866.85 65866.85 0 0 1-15.731 6.062c-1.178.455-2.366.886-3.532 1.371-1.025.423-2.071.833-3.015 1.401-.418.251-.878.911-.83 1.33.046.423.693.785 1.089 1.163.072.069.195.091.299.123 2.779.86 5.558 1.72 8.339 2.578-.015.29.018.586.109.879l1.011 3.243 1.329 4.255c.156.494.313.979.467 1.464.378 1.185.771 2.409 1.128 3.607.778 2.599 2.876 2.8 3.501 2.8.093 0 .192-.006.29-.01.096.004.192.007.287.007 1.605 0 2.636-.884 3.25-1.413.113-.099.221-.19.299-.25.127-.095.246-.198.348-.313.08-.083.153-.169.232-.251.129-.144.25-.279.357-.385.933-.924 1.864-1.845 2.799-2.767l1.108-1.093.469.322c2.521 1.882 5.038 3.773 7.568 5.645 1.888 1.396 3.208 1.034 4.122-1.099.389-1.799.776-3.602 1.162-5.397.354-1.795.704-3.585 1.054-5.376.225-.984.447-1.971.669-2.954.59-2.772 1.179-5.547 1.766-8.32.191-.885.378-1.769.568-2.654.046-.21.101-.421.143-.633.602-2.849 1.2-5.696 1.799-8.546z"></path></svg>
</div>
</div></a>
                    </div>
         
                </div>
            </section>
        </div>
  </q-page>
</template>

<script>
import Vue from 'vue'
import { VueTypedJs } from 'vue-typed-js'
 
Vue.use(VueTypedJs)
export default {
  components: {

    VueTypedJs
  }
}
</script>
<style lang="scss" scoped>
.social-icons .social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 3.5rem;
  width: 3.5rem;
  background-color: #495057;
  color: #fff;
  border-radius: 100%;
  font-size: 1.5rem;
  margin-right: 1.5rem;
}
.social-icons .social-icon:last-child {
  margin-right: 0;
}
.social-icons .social-icon:hover {
  background-color: #bd5d38;
}

.dev-icons {
  font-size: 3rem;
}
// here it start
section.resume-section {
  display: flex;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
  max-width: 75rem;
}
section.resume-section .resume-section-content {
  width: 100%;
}

@media (min-width: 768px) {
  section.resume-section {
    min-height: 100vh;
  }
}
@media (min-width: 992px) {
  section.resume-section {
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
}
</style>