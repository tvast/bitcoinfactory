<template>
  <q-splitter v-model="splitterModel">
    <template v-slot:before>
      <q-tabs v-model="tab" vertical class="text-teal">
        <q-tab name="mails" icon="mail" label="Mails" />
        <q-tab name="alarms" icon="alarm" label="Alarms" />
        <q-tab name="movies" icon="movie" label="Movies" />
      </q-tabs>
    </template>

    <template v-slot:after>
      <q-tab-panels
        v-model="tab"
        animated
        swipeable
        vertical
        transition-prev="jump-up"
        transition-next="jump-up"
      >
        <q-tab-panel name="mails">
          <div class="text-h4 q-mb-md">Mails</div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
        </q-tab-panel>

        <q-tab-panel name="alarms">
          <div class="text-h4 q-mb-md">Alarms</div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
        </q-tab-panel>

        <q-tab-panel name="movies">
          <div class="text-h4 q-mb-md">Movies</div>
          <div class="page-header clear-filter" filter-color="orange">
            <div class="page-header-image" style="background-image: url('img/login.jpg')"></div>
            <div class="content">
              <div class="container">
                <div class="col-md-5 ml-auto mr-auto">
                  <card type="login" plain>
                    <div slot="header" class="logo-container">
                      <img v-lazy="'img/now-logo.png'" alt />
                    </div>

                    <fg-input
                      class="no-border input-lg"
                      addon-left-icon="now-ui-icons users_circle-08"
                      placeholder="First Name..."
                    ></fg-input>

                    <fg-input
                      class="no-border input-lg"
                      addon-left-icon="now-ui-icons text_caps-small"
                      placeholder="Last Name..."
                    ></fg-input>

                    <template slot="raw-content">
                      <div class="card-footer text-center">
                        <a
                          href="#pablo"
                          class="btn btn-primary btn-round btn-lg btn-block"
                        >Get Started</a>
                      </div>
                      <div class="pull-left">
                        <h6>
                          <a href="#pablo" class="link footer-link">Create Account</a>
                        </h6>
                      </div>
                      <div class="pull-right">
                        <h6>
                          <a href="#pablo" class="link footer-link">Need Help?</a>
                        </h6>
                      </div>
                    </template>
                  </card>
                </div>
              </div>
            </div>
            <!-- <main-footer></main-footer> -->
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </template>
  </q-splitter>

  <!-- here is the login -->
</template>
<script>
import { Card, Button, FormGroupInput } from "@/components";
// import MainFooter from '@/layout/MainFooter';
export default {
  name: "login-page",
  bodyClass: "login-page",
  data() {
    return {
      tab: "mails",
      splitterModel: 20
    };
  },
  components: {
    Card,
    // MainFooter,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  }
};
</script>
<style></style>
