<template>
<div>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column box is-one-third is-offset-4">
          <div class="notification">
            <strong>1. Test with the four small Es at 3 meters.</strong>
            <br><br>
            <b-field>
              <b-radio native-value="pass" v-model="distance.smallE">
                Vision is 6/18 or better if the direction of at least three out of four small Es can be seen (PASS the distance vision screening test)
              </b-radio>
            </b-field>
            <b-field>
              <b-radio native-value="fail" v-model="distance.smallE">
                If not able to see at least three out of the small Es (FAIL the distance vision screening test)
              </b-radio>
            </b-field>
          </div>
          <div class="notification">
            <strong>2. Test with the large Es at 3 metres.</strong>
            <br><br>
            <b-field>
              <b-checkbox true-value="pass" false-value="fail" v-model="distance.largeEfar">
                If the Es are seen, vision is 6/60.
              </b-checkbox>
            </b-field>
          </div>
          <div class="notification">
            <strong>3. Test with the large Es at 1.5 metres.</strong>
            <br><br>
            <b-field>
              <b-checkbox true-value="pass" false-value="fail" v-model="distance.largeEnear">
                If at least three out of four Es are seen, vision is 3/60.
              </b-checkbox>
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
  name: "DistanceVision",
  computed: {
    distance: {
      get () {
        return this.$store.state.form.vision.distance
      },
      set () {
        this.$store.commit('UPDATE_DISTANCE_VISION', this.distance)
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