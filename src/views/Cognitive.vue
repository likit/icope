<template>
<div>
  <section class="section">
    <div class="container">
      <b-steps size="is-medium" v-model="activeStep" :has-navigation="false">
        <b-step-item label="Screening for Cognitive Decline" step="1" icon-pack="fas" icon="account">
        </b-step-item>
        <b-step-item label="Mini-Cog" step="2" icon="account"></b-step-item>
      </b-steps>
      <div class="columns">
        <div class="column is-one-third is-offset-4 box">
          <h1 class="title">
            1. Remembering three words
          </h1>
          <p>
            Ask the person to remember three words that you will say. Use simple, concrete words such as "flower", "door", "rice".
          </p>
        </div>
      </div>
      <br>
      <div class="columns">
        <div class="column is-one-third is-offset-4 box">
          <h1 class="title">
            2. Orientation in time and space
          </h1>
          <p>
            Then, ask, "What is the full date today?" and "Where are you now?" (home, clinic, etc.)?
          </p>
        </div>
      </div>
      <br>
      <div class="columns">
        <div class="column is-one-third is-offset-4 box">
          <h1 class="title">
            3. Recalling three words
          </h1>
          <p>
            Now ask the person to repeat the three words that you mentioned
          </p>
        </div>
      </div>
      <br>
      <div class="columns">
        <div class="column is-one-third is-offset-4 box">
          <h1 class="title">
            Pass or fail?
          </h1>
          <p>
            If a person cannot answer one of the two questions about orientation OR cannot remember all three words, <strong>cognitive decline is likely</strong>
            and futher assessment is called for.
          </p>
          <router-link :to="{ name: 'MiniCog'}">Click to assess cognitive capacity</router-link>
        </div>
      </div>
      <div class="buttons is-centered">
        <router-link :to="{ name: 'Menu' }" class="button is-light">Menu</router-link>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: "Cognitive",
  data () {
    return {
      activeStep: 1
    }
  }
}
</script>

<style scoped>

</style>