<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="has-text-centered">
          <figure class="image is-inline-block">
            <img src="../assets/couple.png" width="256">
          </figure>
        </div>
        <h1 class="title has-text-centered">Welcome to ICOPE App</h1>
        <div class="columns">
          <div class="column is-one-third is-offset-4 box">
            <b-field label="Country" type="is-danger">
              <b-select placeholder="Select a country" v-model="form.country" size="is-large" expanded required>
                <option value="Thailand">Thailand</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Indonesia">Indonesia</option>
              </b-select>
            </b-field>
            <div class="buttons is-centered">
              <b-button type="is-primary"
                        :disabled="form.country == null"
                        @click="$router.push({ name: 'Menu'})"
                        icon-right="chevron-right"
                        icon-pack="fas">
                Start
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Entry",
  computed: {
    form: {
      get () {
        return this.$store.state.form
      },
      set () {
        this.$store.state.commit('UPDATE_FORM', this.form)
      }
    }
  }
}
</script>

<style scoped>

</style>