<template>
  <div>
    <div class="q-pa-md" style="max-width: 600px">
      <q-splitter v-model="splitterModel">
        <template v-slot:before>
          <q-tabs v-model="tab" vertical class="text-accent">
            <q-tab name="mails" label="Mails" />
            <q-tab name="signup" label="SignUp" />
            <q-tab name="newsletter" label="Newsletter" />
          </q-tabs>
        </template>

        <template v-slot:after>
          <q-tab-panels
            v-model="tab"
            animated
            swipeable
            vertical
            transition-prev="flip-down"
            transition-next="scale"
            class="fixed-center"
          >
            <q-tab-panel name="mails">
              <div class="text-h4 q-mb-md">Mails</div>
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
            </q-tab-panel>

            <q-tab-panel name="signup">
              <div class="text-h4 q-mb-md">SignUp</div>
              <fg-input
                class="no-border"
                placeholder="First Name..."
                addon-left-icon="now-ui-icons users_circle-08"
              ></fg-input>

              <fg-input
                class="no-border"
                placeholder="Last Name..."
                addon-left-icon="now-ui-icons text_caps-small"
              ></fg-input>

              <fg-input
                class="no-border"
                placeholder="Email"
                addon-left-icon="now-ui-icons ui-1_email-85"
              ></fg-input>
            </q-tab-panel>

            <q-tab-panel name="newsletter">
              <div class="text-h4 q-mb-md">Newsletter</div>

              <fg-input
                class="no-border input-lg"
                addon-left-icon="now-ui-icons text_caps-small"
                placeholder="Email"
                v-model="emailNewsletter"
              ></fg-input>
            </q-tab-panel>
          </q-tab-panels>
        </template>
      </q-splitter>
    </div>
  </div>

  <!-- here is the login -->
</template>
<script>
import { Card, Button, FormGroupInput } from "@/components";
import SignupForm from "./components/SignupForm";
// import MainFooter from '@/layout/MainFooter';
export default {
  name: "login-page",
  bodyClass: "login-page",
  data() {
    return {
      tab: "mails",
      splitterModel: 20,
      emailNewsletter: "hello@hello.com"
    };
  },
  components: {
    // Card,
    // MainFooter,
    // SignupForm,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  }
};
</script>
<style></style>
