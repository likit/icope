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
          <h1 class="title">Near Vision Test</h1>
          <h1 class="subtitle">With WHO Simple Eye Chart</h1>
          <div class="notification">
            <p>
              Let the person hold the near vision test card as close as s/he wants. Test from the largest to the smallest Es.
            </p>
            <br>
            <b-field>
              <b-radio native-value="pass" v-model="near.result">
                If the person identifies the directions of at least three out of four largest Es, s/he <strong>PASS</strong> the near vision screening test.
              </b-radio>
            </b-field>
            <b-field>
              <b-radio native-value="fail" v-model="near.result">
                <strong>FAIL</strong>
              </b-radio>
            </b-field>
          </div>
        </div>
      </div>
      <pre>
        {{ $store.state.form.vision }}
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
  name: "NearVision",
  data () {
    return {
      activeStep: 3
    }
  },
  computed: {
    near: {
      get () {
        return this.$store.state.form.vision.near
      },
      set () {
        this.$store.commit('UPDATE_NEAR_VISION', this.near)
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