<template>
  <div>
    <section class="section">
      <div class="container">
        <b-steps size="is-medium" :has-navigation="false">
          <b-step-item label="Screening" step="1" icon-pack="fas" icon="account">
          </b-step-item>
          <b-step-item label="SPPB" step="2" icon="account"></b-step-item>
        </b-steps>
        <div class="columns">
          <div class="column is-one-third is-offset-4 box">
            <h1 class="title">
              Chair Rise Test
            </h1>
            <h2 class="subtitle">
              A simple test can decide whether an older person needs further assessment for limited mobility.
            </h2>
              Ask the person, "Do you think it would be safe for you to try to stand up from a chair five times without
              using your arms?"
              <br><br>
              <em>If YES, ask them to</em>:
            <div class="content">
            <ul>
              <li>sit in the middle of the chair</li>
              <li>cross and keep their arms over their chest</li>
              <li>rise to full standing position and then sit down again</li>
              <li>repeat five times as quickly as possible without stopping</li>
            </ul>
            </div>
            Time the person taking the test - further assessment is needed if they <strong>cannot stand up five times
            within 14 seconds.</strong>
            &nbsp;<router-link :to="{ name: 'ChairRiseTest' }">Further assessment >>></router-link>
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
  name: "ChairRiseTest"
}
</script>

<style scoped>

</style>