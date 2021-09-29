<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column box is-one-third is-offset-4">
            <h1 class="title">MNA Assessment</h1>
            <div class="notification">
              <strong>Lives independently (not in nursing home or hospital)</strong>
              <br><br>
              <b-field>
                <b-radio size="is-medium" v-model="G" native-value="1">yes</b-radio>
              </b-field>
              <b-field>
                <b-radio size="is-medium" v-model="G" native-value="0">no</b-radio>
              </b-field>
            </div>
            <div class="notification">
              <strong>Takes more than 3 prescription drugs per day</strong>
              <br><br>
              <b-field>
                <b-radio size="is-medium" v-model="H" native-value="0">yes</b-radio>
              </b-field>
              <b-field>
                <b-radio size="is-medium" v-model="H" native-value="1">no</b-radio>
              </b-field>
            </div>
            <div class="notification">
              <strong>Pressure sores or skin ulcers</strong>
              <br><br>
              <b-field>
                <b-radio size="is-medium" v-model="I" native-value="0">yes</b-radio>
              </b-field>
              <b-field>
                <b-radio size="is-medium" v-model="I" native-value="1">no</b-radio>
              </b-field>
            </div>
            <div class="notification">
              <strong>How many full meals does the patient eat daily?</strong>
              <br><br>
              <b-field>
                <b-radio size="is-medium" v-model="J" native-value="0">1 meal</b-radio>
              </b-field>
              <b-field>
                <b-radio size="is-medium" v-model="J" native-value="1">2 meals</b-radio>
              </b-field>
              <b-field>
                <b-radio size="is-medium" v-model="J" native-value="2">3 meals</b-radio>
              </b-field>
            </div>
            <div class="notification">
              <strong>Selected consumption markers for protein intake</strong>
              <br><br>
              <b-field>
                <b-checkbox size="is-medium" v-model="K" native-value="dairy">At least one serving of dairy products (milk, cheese, yoghurt) per day</b-checkbox>
              </b-field>
              <b-field>
                <b-checkbox size="is-medium" v-model="K" native-value="legumes">Two more servings of legumes or eggs per week</b-checkbox>
              </b-field>
              <b-field>
                <b-checkbox size="is-medium" v-model="K" native-value="meat">Meat, fish or poultry every day</b-checkbox>
              </b-field>
              score {{ Kscore }}
            </div>
            <div class="notification">
              <strong>Consumes two or more servings of fruit or vegetables per day?</strong>
              <br><br>
              <b-field>
                <b-radio size="is-medium" v-model="L" native-value="1">yes</b-radio>
              </b-field>
              <b-field>
                <b-radio size="is-medium" v-model="L" native-value="0">no</b-radio>
              </b-field>
            </div>
            <div class="notification">
              <strong>How much fluid (water, juice, coffee, tea, milk...) is consumed per day?</strong>
              <br><br>
              <b-field>
                <b-radio size="is-medium" v-model="M" native-value="0">less than 3 cups</b-radio>
              </b-field>
              <b-field>
                <b-radio size="is-medium" v-model="M" native-value="0.5">3 to 5 cups</b-radio>
              </b-field>
              <b-field>
                <b-radio size="is-medium" v-model="M" native-value="1.0">more than 5 cups</b-radio>
              </b-field>
            </div>
            <div class="notification">
              <strong>Mode of feeding</strong>
              <br><br>
              <b-field>
                <b-radio size="is-medium" v-model="N" native-value="0">unable to eat without assisstance</b-radio>
              </b-field>
              <b-field>
                <b-radio size="is-medium" v-model="N" native-value="1">self-fed with some difficulty</b-radio>
              </b-field>
              <b-field>
                <b-radio size="is-medium" v-model="N" native-value="2">self-fed without any problem</b-radio>
              </b-field>
            </div>
            <div class="notification">
              <strong>Self view of nutritional status</strong>
              <br><br>
              <b-field>
                <b-radio size="is-medium" v-model="O" native-value="0">views self as being malnourished</b-radio>
              </b-field>
              <b-field>
                <b-radio size="is-medium" v-model="O" native-value="1">is uncertain of nutritional state</b-radio>
              </b-field>
              <b-field>
                <b-radio size="is-medium" v-model="O" native-value="2">views self as having no nutritional problem</b-radio>
              </b-field>
            </div>
            <div class="notification">
              <strong>In comparison with other people of the same age, how does the patient consider his / her health status?</strong>
              <br><br>
              <b-field>
                <b-radio size="is-medium" v-model="P" native-value="0">not as good</b-radio>
              </b-field>
              <b-field>
                <b-radio size="is-medium" v-model="P" native-value="0.5">does not know</b-radio>
              </b-field>
              <b-field>
                <b-radio size="is-medium" v-model="P" native-value="1">as good</b-radio>
              </b-field>
              <b-field>
                <b-radio size="is-medium" v-model="P" native-value="2">better</b-radio>
              </b-field>
            </div>
            <div class="notification">
              <strong>Mid-arm circumference (MAC) in cm</strong>
              <br><br>
              <b-field>
                <b-radio size="is-medium" v-model="Q" native-value="0">MAC less than 21</b-radio>
              </b-field>
              <b-field>
                <b-radio size="is-medium" v-model="Q" native-value="0.5">MAC 21 to 22</b-radio>
              </b-field>
              <b-field>
                <b-radio size="is-medium" v-model="Q" native-value="1">MAC greater than 22</b-radio>
              </b-field>
            </div>
            <div class="notification">
              <strong>Calf circumference (CC)</strong>
              <br><br>
              <b-field>
                <b-radio size="is-medium" v-model="R" native-value="0">CC less than 31</b-radio>
              </b-field>
              <b-field>
                <b-radio size="is-medium" v-model="R" native-value="1">CC 31 or greater</b-radio>
              </b-field>
            </div>
            <h1 class="title">
              Total Score {{ totalScore }}
            </h1>
            <p class="notification is-light is-success" v-if="totalScore >= 24">
              <strong>
                Normal nutritional status (24-30 points)
              </strong>
            </p>
            <p class="notification is-warning is-light" v-if="totalScore >= 17 && totalScore <= 23.5">
              <strong>
                At risk of malnutrition (17-23.5 points)
              </strong>
            </p>
            <p class="notification is-danger is-light" v-if="totalScore < 17">
              <strong>
                Malnourished (less than 17 points)
              </strong>
            </p>
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
  name: "MNAAssessment",
  data () {
    return {
      G: null,
      H: null,
      I: null,
      J: null,
      K: [],
      L: null,
      M: null,
      N: null,
      O: null,
      P: null,
      Q: null,
      R: null,
    }
  },
  computed: {
    Kscore () {
      if (this.K.length < 2)
        return 0.0
      if (this.K.length == 2)
        return 0.5
      else
        return 1.0
    },
    totalScore () {
      // TODO: merge the score from the screening phase
      return parseInt(this.G) + parseInt(this.H) + parseInt(this.I) + parseInt(this.J) +
          this.Kscore + parseInt(this.L) + parseFloat(this.M) + parseInt(this.N) +
          parseInt(this.O) + parseInt(this.P) + parseFloat(this.Q) + parseInt(this.R)
    }
  }
}
</script>

<style scoped>

</style>
