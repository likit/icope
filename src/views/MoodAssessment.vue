<template>
<div>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column box is-one-third is-offset-4">
          <h1 class="title">Mood Assessment</h1>
          <strong>
            Over the past two weeks, have you been bothered by any of the following problems:
          </strong>
          <br><br>
          <b-field>
            <b-checkbox size="is-medium" v-model="psycho.mood" native-value="sleeping">
              Troubling falling or staying asleep, or sleeping too much.
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox size="is-medium" v-model="psycho.mood" native-value="energy">
              Feeling tired or having little energy.
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox size="is-medium" v-model="psycho.mood" native-value="eating">
              Poor appetite or overeating.
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox size="is-medium" v-model="psycho.mood" native-value="feeling">
              Feeling bad about yourself or that you are a failure or that you have let yourself or your family down.
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox size="is-medium" v-model="psycho.mood" native-value="concentrating">
              Trouble concentrating on things such as reading the newspaper or watching television.
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox size="is-medium" v-model="psycho.mood" native-value="slowing">
              Moving or speaking so slowly that other people could have noticed.
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox size="is-medium" v-model="psycho.mood" native-value="moving">
              Being so fidgetly or restless that you have been moving around a lot more than usual.
            </b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox size="is-medium" v-model="psycho.mood" native-value="hurting">
              Thoughts that you would be better off dead or of hurting yourself in some way.
            </b-checkbox>
          </b-field>
        </div>
      </div>
      <pre>
        {{ $store.state.form.psychology }}
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
  name: "PsychoScreening",
  computed: {
    psycho: {
      get () {
        return this.$store.state.form.psychology
      },
      set () {
        this.$store.commit('UPDATE_MOOD', this.psycho)
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