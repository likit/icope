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
          <div class="notification">
            <h1 class="title">
              Have you unintentionally lost 3 kgs over the last three months?
            </h1>
            <div class="buttons is-centered">
              <router-link :to="{ name: 'Menu' }" class="button is-text">No</router-link>
              <router-link :to="{ name: 'MNAScreening' }" class="button is-primary">Yes</router-link>
            </div>
          </div>
          <div class="notification">
            <h1 class="title">
              Have you experience loss of appetite?
            </h1>
            <div class="buttons is-centered">
              <router-link :to="{ name: 'Menu' }" class="button is-text">No</router-link>
              <router-link :to="{ name: 'MNAScreening' }" class="button is-primary">Yes</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: "Mulnutrition",
  data () {
    return {
      activeStep: 2
    }
  }
}
</script>

<style scoped>

</style>