<template>
  <div>
    <section class="section">
      <div class="container">
        <b-steps size="is-medium" :has-navigation="false" v-model="activeStep">
          <b-step-item label="Screening for Cognitive Decline"
                       step="1" icon-pack="fas" icon="account">
          </b-step-item>
          <b-step-item label="Mini-Cog" step="2" icon="account"></b-step-item>
        </b-steps>
        <div class="columns">
          <div class="column is-two-thirds is-offset-2 box">
            <h1 class="title">
              MiniCog
            </h1>
            <table class="table">
              <tr>
                <td>
                  <b-field>
                    <b-numberinput v-model="recall" min="0" max="3"></b-numberinput>
                  </b-field>
                </td>
                <td>
                  1 point for each word spontaneously recall without cueing
                </td>
              </tr>
              <tr>
                <td>
                  <b-field>
                    <b-numberinput min="0" max="2" step="2" v-model="clock"></b-numberinput>
                  </b-field>
                </td>
                <td>
                  Normal clock = 2 points. Inability or refusal to draw a clock = 0 points.
                </td>
              </tr>
              <tr>
                <td>
                  <b-field>
                    <b-numberinput v-model="totalScore" disabled></b-numberinput>
                  </b-field>
                </td>
                <td>
                  A cut point of &lt;3 has been validated for dementia screening.
                </td>
              </tr>
            </table>
          </div>
        </div>
        <br>
        <div class="columns">
          <div class="column is-one-third is-offset-4 box">
            <h1 class="title">
              Pass or fail?
            </h1>
            <p>
              If fail, <strong>cognitive decline is likely</strong>
            </p>
            <a>Click to assess cognitive capacity</a>
          </div>
        </div>
        <div class="buttons is-centered">
          <router-link :to="{ name: 'Cognitive' }" class="button is-light">Back</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MiniCog",
  data () {
    return {
      activeStep: 2,
      recall: 0,
      clock: 0
    }
  },
  computed: {
    totalScore () {
      if (this.recall != null && this.clock != null) {
        return this.recall + this.clock
      } else {
        return null
      }
    }
  }
}
</script>

<style scoped>

</style>
