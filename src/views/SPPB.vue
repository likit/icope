<template>
<div>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column box is-one-third is-offset-4">
          <h1 class="title has-text-centered">
            Short Physical Performance Battery (SPPB)
          </h1>
        </div>
      </div>
      <br>
      <div class="columns">
        <div class="column box is-one-third is-offset-4">
          <h2 class="title has-text-centered">
            Balance Tests
          </h2>
          <p class="notification is-light">
            <strong>A. Side-by-side stand</strong>
            score {{ standScore }}
            <b-field>
              <b-radio v-model="SPPB.stand" native-value="1">Held for 10 seconds</b-radio>
            </b-field>
            <b-field>
              <b-radio v-model="SPPB.stand" native-value="2">Not held for 10 seconds</b-radio>
            </b-field>
            <b-field>
              <b-radio v-model="SPPB.stand" native-value="3">Not attempted</b-radio>
            </b-field>
          </p>
          <p class="notification is-light">
            <strong>B. Semi-tandem stand</strong>
            score {{ semiTandemStandScore }}
            <b-field>
              <b-radio v-model="SPPB.semiTandemStand" native-value="1">Held for 10 seconds</b-radio>
            </b-field>
            <b-field>
              <b-radio v-model="SPPB.semiTandemStand" native-value="2">Not held for 10 seconds</b-radio>
            </b-field>
            <b-field>
              <b-radio v-model="SPPB.semiTandemStand" native-value="3">Not attempted</b-radio>
            </b-field>
          </p>
          <p class="notification is-light">
            <strong>B. Tandem stand</strong>
            score {{ tandemStandScore }}
            <b-field>
              <b-radio v-model="SPPB.tandemStand" native-value="1">Held for 10 seconds</b-radio>
            </b-field>
            <b-field>
              <b-radio v-model="SPPB.tandemStand" native-value="2">Not held for 10 seconds</b-radio>
            </b-field>
            <b-field>
              <b-radio v-model="SPPB.tandemStand" native-value="3">Not attempted</b-radio>
            </b-field>
          </p>
        </div>
      </div>
      <br>
      <div class="columns">
        <div class="column box is-one-third is-offset-4">
          <h2 class="title has-text-centered">
            Gait speed test: Time to walk four meters
          </h2>
          <p class="notification is-light">
            Time for four-metre walk: score {{ SPPB.gait }}
            <b-field>
              <b-radio v-model="SPPB.gait" native-value="4">&lt;&nbsp;4.82 seconds 4 points</b-radio>
            </b-field>
            <b-field>
              <b-radio v-model="SPPB.gait" native-value="3">4.82 - 6.20 seconds 3 points</b-radio>
            </b-field>
            <b-field>
              <b-radio v-model="SPPB.gait" native-value="2">6.21 - 8.70 seconds 2 points</b-radio>
            </b-field>
            <b-field>
              <b-radio v-model="SPPB.gait" native-value="1">&gt;&nbsp; 8.70 seconds 1 points</b-radio>
            </b-field>
            <b-field>
              <b-radio v-model="SPPB.gait" native-value="0">Unable to complete 0 points</b-radio>
            </b-field>
          </p>
        </div>
      </div>
      <br>
      <div class="columns">
        <div class="column box is-one-third is-offset-4">
          <h2 class="title has-text-centered">
            Chair rise test: Time to rise from a chair five times
          </h2>
          <p class="notification is-light">
            score {{ SPPB.rise }}
            <b-field>
              <b-radio v-model="SPPB.rise" native-value="4">&lt;&nbsp;11.19 seconds 4 points</b-radio>
            </b-field>
            <b-field>
              <b-radio v-model="SPPB.rise" native-value="3">11.2 - 13.69 seconds 3 points</b-radio>
            </b-field>
            <b-field>
              <b-radio v-model="SPPB.rise" native-value="2">13.7 - 16.69 seconds 2 points</b-radio>
            </b-field>
            <b-field>
              <b-radio v-model="SPPB.rise" native-value="1">16.7 - 59.9 seconds 1 points</b-radio>
            </b-field>
            <b-field>
              <b-radio v-model="SPPB.rise" native-value="0">Unable to complete 0 points</b-radio>
            </b-field>
          </p>
        </div>
      </div>
      <br>
      <div class="columns">
        <div class="column box is-one-third is-offset-4">
          <h2 class="title has-text-centered">
            Total Score = {{ totalScore }}
          </h2>
          <div class="has-text-centered">
            <p v-if="totalScore < 10">
              Limited mobility (0 - 9 points)
            </p>
            <p v-else>
              Normal mobility (10 - 12 points)
            </p>
          </div>
          <pre>
            {{ this.SPPB }}
          </pre>
          <div class="buttons is-centered">
            <router-link :to="{ name: 'Menu' }" class="button is-light">Menu</router-link>
            <button class="button is-success" @click="save">Save</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: "SPPB",
  computed: {
    SPPB: {
      get () {
        return this.$store.state.form.SPPB;
      },
      set () {
        this.$store.commit('UPDATE_SPPB', this.SPPB)
      }
    },
    standScore () {
      if (this.SPPB.stand == null) {
        return null
      }
      return parseInt(this.SPPB.stand) > 1 ? 0 : 1
    },
    semiTandemStandScore () {
      if (this.SPPB.semiTandemStand == null) {
        return null
      }
      return parseInt(this.SPPB.semiTandemStand) > 1 ? 0 : 1
    },
    tandemStandScore () {
      if (this.SPPB.tandemStand == null) {
        return null
      }
      return parseInt(this.SPPB.tandemStand) > 1 ? 0 : 1
    },
    totalScore () {
      let stand = this.SPPB.stand == null ? 0 : this.standScore
      let tandem = this.SPPB.tandemStand == null ? 0 : this.tandemStandScore
      let semi = this.SPPB.semiTandemStand == null ? 0 : this.semiTandemStandScore
      let gait = this.SPPB.gait == null ? 0 : parseInt(this.SPPB.gait)
      let rise = this.SPPB.rise == null ? 0 : parseInt(this.SPPB.rise)
      return stand + tandem + semi + gait + rise
    }
  },
  watch: {
    totalScore (newValue) {
      this.$store.commit('UPDATE_SPPB_SCORE', newValue)
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