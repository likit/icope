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
          <div class="column is-two-thirds is-offset-2 box">
            <h1 class="title">
              MiniCog
            </h1>
            <table class="table">
              <tr>
                <td>
                  <b-field>
                    <b-numberinput v-model="minicog.recall" min="0" max="3"></b-numberinput>
                  </b-field>
                </td>
                <td>
                  1 point for each word spontaneously recall without cueing
                </td>
              </tr>
              <tr>
                <td>
                  <b-field>
                    <b-numberinput min="0" max="2" step="2" v-model="minicog.clock"></b-numberinput>
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
        <div class="buttons is-centered">
          <router-link :to="{ name: 'Menu' }" class="button is-light">Menu</router-link>
          <button @click="save" class="button is-success">Save</button>
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
      activeStep: 0
    }
  },
  computed: {
    minicog: {
      get () {
        return this.$store.state.form.minicog
      },
      set () {
        this.$store.state.commit('UPDATE_MINICOG', this.minicog)
      }
    },
    totalScore : {
      get () {
        if (this.minicog.recall != null && this.minicog.clock != null) {
          return this.minicog.recall + this.minicog.clock
        } else {
          return null
        }
      },
    }
  },
  watch: {
    totalScore (newValue) {
      this.$store.commit('UPDATE_MINICOG_SCORE', newValue)
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
