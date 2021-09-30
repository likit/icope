<template>
<div>
  <section class="section">
    <div class="container">
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
      result: null
    }
  }
}
</script>

<style scoped>

</style>