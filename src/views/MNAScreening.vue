<template>
<div>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column box is-one-third is-offset-4">
          <h1 class="title">MNA Screening</h1>
          <div class="notification">
            <strong>Has food intake declined over the past 3 months due to loss of appetite,
              digestive problems, chewing or swallowing difficulties?</strong>
            <br><br>
            <b-field>
              <b-radio size="is-medium" v-model="MNA.A" native-value="0">severe decrease in food intake</b-radio>
            </b-field>
            <b-field>
              <b-radio size="is-medium" v-model="MNA.A" native-value="1">moderate decrease in food intake</b-radio>
            </b-field>
            <b-field>
              <b-radio size="is-medium" v-model="MNA.A" native-value="2">no decrease in food intake</b-radio>
            </b-field>
          </div>
          <div class="notification">
            <strong>Weight loss during the last 3 months</strong>
            <br><br>
            <b-field>
              <b-radio size="is-medium" v-model="MNA.B" native-value="0">weight loss greater than 3kg (6.6lbs)</b-radio>
            </b-field>
            <b-field>
              <b-radio size="is-medium" v-model="MNA.B" native-value="1">does not know</b-radio>
            </b-field>
            <b-field>
              <b-radio size="is-medium" v-model="MNA.B" native-value="2">weight loss between 1 and 3kg (2.2 and 6.6 lbs)</b-radio>
            </b-field>
            <b-field>
              <b-radio size="is-medium" v-model="MNA.B" native-value="3">no weight loss</b-radio>
            </b-field>
          </div>
          <div class="notification">
            <strong>Mobility</strong>
            <br><br>
            <b-field>
              <b-radio size="is-medium" v-model="MNA.C" native-value="0">bed or chair bound</b-radio>
            </b-field>
            <b-field>
              <b-radio size="is-medium" v-model="MNA.C" native-value="1">able to get out of bed / chair but does not go out</b-radio>
            </b-field>
            <b-field>
              <b-radio size="is-medium" v-model="MNA.C" native-value="2">goes out</b-radio>
            </b-field>
          </div>
          <div class="notification">
            <strong>Has suffered psychological stress or acute disease in the past 3 months?</strong>
            <br><br>
            <b-field>
              <b-radio size="is-medium" v-model="MNA.D" native-value="0">yes</b-radio>
            </b-field>
            <b-field>
              <b-radio size="is-medium" v-model="MNA.D" native-value="1">no</b-radio>
            </b-field>
          </div>
          <div class="notification">
            <strong>Neuropsychological problems</strong>
            <br><br>
            <b-field>
              <b-radio size="is-medium" v-model="MNA.E" native-value="0">severe dementia or depression</b-radio>
            </b-field>
            <b-field>
              <b-radio size="is-medium" v-model="MNA.E" native-value="1">mild dementia</b-radio>
            </b-field>
            <b-field>
              <b-radio size="is-medium" v-model="MNA.E" native-value="2">no psychological problems</b-radio>
            </b-field>
          </div>
          <div class="notification">
            <strong>Body Mass Index (BMI) = weight in kg / (height in m)<sup>2</sup></strong>
            <br><br>
            <b-field>
              <b-radio size="is-medium" v-model="MNA.F" native-value="0">BMI less than 19</b-radio>
            </b-field>
            <b-field>
              <b-radio size="is-medium" v-model="MNA.F" native-value="1">BMI 19 to less than 21</b-radio>
            </b-field>
            <b-field>
              <b-radio size="is-medium" v-model="MNA.F" native-value="2">BMI 21 to less than 23</b-radio>
            </b-field>
            <b-field>
              <b-radio size="is-medium" v-model="MNA.F" native-value="3">BMI 23 or greater</b-radio>
            </b-field>
          </div>
          <h1 class="title">
            Total Score {{ totalScore }}
          </h1>
          <p class="notification is-light is-success" v-if="totalScore > 11">
            <strong>
              Normal nutritional status (12-14 points)
            </strong>
          </p>
          <p class="notification is-warning is-light" v-if="totalScore > 7 && totalScore < 12">
            <strong>
              At risk of malnutrition (8-11 points)
            </strong>
          </p>
          <p class="notification is-danger is-light" v-if="totalScore < 8">
            <strong>
              Malnourished (0-7 points)
            </strong>
          </p>
          <router-link :to="{ name: 'MNAAssessment' }">Further assessment >>></router-link>
        </div>
      </div>
      <pre>
        {{ $store.state.form.MNA }}
      </pre>
      <div class="buttons is-centered">
        <router-link :to="{ name: 'Menu'}" class="button is-light">Menu</router-link>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: "MNAScreening",
  computed: {
    MNA: {
      get () {
        return this.$store.state.form.MNA
      },
      set () {
        this.$store.commit('UPDATE_MNA', this.MNA)
      }
    },
    totalScore () {
      return parseInt(this.MNA.A) + parseInt(this.MNA.B) + parseInt(this.MNA.C) + parseInt(this.MNA.D) +
          parseInt(this.MNA.E) + parseInt(this.MNA.F)
    }
  },
  watch: {
    totalScore (value) {
      this.$store.commit('UPDATE_MNA_SCREEN_SCORE', value)
      this.$store.commit('UPDATE_MNA_TOTAL_SCORE')
    }
  }
}
</script>

<style scoped>

</style>