<template>
<div>
  <section class="section">
    <div class="container">
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
              <b-checkbox true-value="pass" false-value="fail" v-model="result">
                If the person identifies the directions of at least three out of four largest Es, s/he <strong>PASS</strong> the near vision screening test.
              </b-checkbox>
            </b-field>
          </div>
        </div>
      </div>
      <div class="buttons is-centered">
        <router-link :to="{ name: 'Menu'}" class="button is-light">Menu</router-link>
        <button class="button is-success">Save</button>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: "DistanceVision"
}
</script>

<style scoped>

</style>