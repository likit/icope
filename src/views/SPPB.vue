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
              <b-radio v-model="stand" native-value="1">Held for 10 seconds</b-radio>
            </b-field>
            <b-field>
              <b-radio v-model="stand" native-value="2">Not held for 10 seconds</b-radio>
            </b-field>
            <b-field>
              <b-radio v-model="stand" native-value="3">Not attempted</b-radio>
            </b-field>
          </p>
          <p class="notification is-light">
            <strong>B. Semi-tandem stand</strong>
            score {{ semiTandemStandScore }}
            <b-field>
              <b-radio v-model="semiTandemStand" native-value="1">Held for 10 seconds</b-radio>
            </b-field>
            <b-field>
              <b-radio v-model="semiTandemStand" native-value="2">Not held for 10 seconds</b-radio>
            </b-field>
            <b-field>
              <b-radio v-model="semiTandemStand" native-value="3">Not attempted</b-radio>
            </b-field>
          </p>
          <p class="notification is-light">
            <strong>B. Tandem stand</strong>
            score {{ tandemStandScore }}
            <b-field>
              <b-radio v-model="tandemStand" native-value="1">Held for 10 seconds</b-radio>
            </b-field>
            <b-field>
              <b-radio v-model="tandemStand" native-value="2">Not held for 10 seconds</b-radio>
            </b-field>
            <b-field>
              <b-radio v-model="tandemStand" native-value="3">Not attempted</b-radio>
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
            Time for four-metre walk: score {{ gait }}
            <b-field>
              <b-radio v-model="gait" native-value="4">&lt;&nbsp;4.82 seconds 4 points</b-radio>
            </b-field>
            <b-field>
              <b-radio v-model="gait" native-value="3">4.82 - 6.20 seconds 3 points</b-radio>
            </b-field>
            <b-field>
              <b-radio v-model="gait" native-value="2">6.21 - 8.70 seconds 2 points</b-radio>
            </b-field>
            <b-field>
              <b-radio v-model="gait" native-value="1">&gt;&nbsp; 8.70 seconds 1 points</b-radio>
            </b-field>
            <b-field>
              <b-radio v-model="gait" native-value="0">Unable to complete 0 points</b-radio>
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
            score {{ rise }}
            <b-field>
              <b-radio v-model="rise" native-value="4">&lt;&nbsp;11.19 seconds 4 points</b-radio>
            </b-field>
            <b-field>
              <b-radio v-model="rise" native-value="3">11.2 - 13.69 seconds 3 points</b-radio>
            </b-field>
            <b-field>
              <b-radio v-model="rise" native-value="2">13.7 - 16.69 seconds 2 points</b-radio>
            </b-field>
            <b-field>
              <b-radio v-model="rise" native-value="1">16.7 - 59.9 seconds 1 points</b-radio>
            </b-field>
            <b-field>
              <b-radio v-model="rise" native-value="0">Unable to complete 0 points</b-radio>
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
          <div class="buttons is-centered">
            <router-link :to="{ name: 'Menu' }" class="button is-light">Menu</router-link>
            <button class="button is-success">Save</button>
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
  data () {
    return {
      stand: null,
      tandemStand: null,
      semiTandemStand: null,
      gait: null,
      rise: null
    }
  },
  computed: {
    standScore () {
      if (this.stand == null) {
        return null
      }
      return parseInt(this.stand) > 1 ? 0 : 1
    },
    semiTandemStandScore () {
      if (this.semiTandemStand == null) {
        return null
      }
      return parseInt(this.semiTandemStand) > 1 ? 0 : 1
    },
    tandemStandScore () {
      if (this.tandemStand == null) {
        return null
      }
      return parseInt(this.tandemStand) > 1 ? 0 : 1
    },
    totalScore () {
      let stand = this.stand == null ? 0 : this.standScore
      let tandem = this.tandemStand == null ? 0 : this.tandemStandScore
      let semi = this.semiTandemStand == null ? 0 : this.semiTandemStandScore
      let gait = this.gait == null ? 0 : parseInt(this.gait)
      let rise = this.rise == null ? 0 : parseInt(this.rise)
      return stand + tandem + semi + gait + rise
    }
  }
}
</script>

<style scoped>

</style>