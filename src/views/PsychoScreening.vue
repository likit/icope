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
          <h1 class="title">Screening</h1>
          <hr>
          <strong>
            Over the past two weeks, have you been bothered by:
          </strong>
          <br><br>
          <p>
            Feeling down, depressed or hopeless?
          </p>
          <router-link :to="{ name: 'MoodAssessment' }" class="button is-text">Yes</router-link>
          <br><br>
          <p>
            Little interest or pleasure in doing things?
          </p>
          <router-link :to="{ name: 'MoodAssessment' }" class="button is-text">Yes</router-link>
        </div>
      </div>
      <div class="buttons is-centered">
        <router-link :to="{ name: 'Menu'}" class="button is-light">Menu</router-link>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: "PsychoScreening",
  data () {
    return {
      result: null,
      activeStep: 5
    }
  }
}
</script>

<style scoped>

</style>