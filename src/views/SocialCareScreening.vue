<template>
<div>
  <section class="section">
    <div class="container">
      <b-steps size="is-medium" v-model="activeStep" :has-navigation="false">
        <b-step-item label="Cognitive Capacity" step="1" icon="account">
        </b-step-item>
        <b-step-item label="Locomotor Capacity" step="2" icon="account"></b-step-item>
        <b-step-item label="Malnutrition" step="3" icon="account"></b-step-item>
        <b-step-item label="Visual Capacity" step="4" icon="account"></b-step-item>
        <b-step-item label="Hearing Capacity" step="5" icon="account"></b-step-item>
        <b-step-item label="Psychological Capacity" step="6" icon="account"></b-step-item>
        <b-step-item label="Social Care and Support" step="7" icon="account"></b-step-item>
      </b-steps>
      <div class="columns">
        <div class="column box is-one-third is-offset-4">
          <h1 class="title">Social Care Screening</h1>
          <b-field>
            <b-checkbox native-value="gettingAround"
                        v-model="socialCare.result">Do you have difficulty getting around indoors?</b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox native-value="usingToilet"
                        v-model="socialCare.result">Do you have difficulty using the toilet (or commode)?</b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox native-value="dressing" v-model="socialCare.result">Do you have difficulty dressing yourself?</b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox native-value="bathing"
                        v-model="socialCare.result">Do you have difficulty using bath or shower?</b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox native-value="appearance"
                        v-model="socialCare.result">Do you have difficulty keeping up your personal appearance?</b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox native-value="feeding"
                        v-model="socialCare.result">Do you have difficulty feeding yourself?</b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox native-value="livingPlace"
                        v-model="socialCare.result">Do you have problems with the place where you live (accommodation)?</b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox native-value="finance"
                        v-model="socialCare.result">Do you have problems with your finances?</b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox native-value="loneliness" v-model="socialCare.result">Do you feel lonely?</b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox native-value="losingInterest"
                        v-model="socialCare.result">Are you able to pursue leisure interests, hobbies, work, volunteering, supporting your family, educational or spiritual activities that are important to you?</b-checkbox>
          </b-field>
        </div>
      </div>
      <pre>
        {{ $store.state.form.socialCare }}
      </pre>
      <div class="buttons is-centered">
        <router-link :to="{ name: 'Menu'}" class="button is-light">Menu</router-link>
        <button class="button is-success" @click="save">Save</button>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: "SocialCareScreening",
  data () {
    return {
      activeStep: 8
    }
  },
  computed: {
    socialCare: {
      get () {
        return this.$store.state.form.socialCare
      },
      set () {
        this.$store.commit('UPDATE_SOCIAL_CARE', this.socialCare)
      }
    }
  },
  methods: {
    save () {
      this.$store.dispatch('saveForm')
    }
  }
}
</script>

<style scoped>

</style>