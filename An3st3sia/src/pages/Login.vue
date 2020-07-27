<template>
  <div class="q-pa-xl">
    <div class="q-gutter-y-xl vertical-middle plg" style="max-width: 100%">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="flex"
          narrow-indicator
        >
          <q-tab name="Login" label="Login" />
          <q-tab name="SignUp" label="SignUp" />
          <q-tab name="telegram" label="telegram" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="Login">
            <!-- <div class="text-h6">Mails</div> -->
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

          <q-tab-panel name="SignUp">
            <!-- <div class="text-h6">Alarms</div> -->
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

          <q-tab-panel name="telegram">
            <!-- <div class="text-h6">Telegram</div> -->
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
      </q-card>
    </div>
  </div>
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
      tab: "Login"
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
