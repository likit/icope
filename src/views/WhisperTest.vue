<template>
<div>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column box is-one-third is-offset-4">
          <h1 class="title">Whisper Voice Test</h1>
          <div class="content">
            <ul>
              <li>Stand about an arm's length away behind and to one side of the person</li>
              <li>Ask the person or an assistant to close off the opposite ear by pressing on the tragus. (The tragus is the projection in front of and partly covering the opening of the ear.)</li>
              <li>Breathe out and then softly whisper four words. Use any common unrelated words.</li>
              <li>Ask the person to repeat your words. The words should be spoken one by one, and wait for the response to each one at a time.</li>
              <li>Move to the other side of the person and test the other ear. Use different words</li>
            </ul>
          </div>
          <div class="notification">
            <b-field>
              <b-radio native-value="pass" v-model="hearing.result">
                If the person repeats more than three words and you are sure that s/he can hear you clearly, then the person is likely to have normal hearing in that ear.
              </b-radio>
            </b-field>
            <b-field>
              <b-radio native-value="fail" v-model="hearing.result">
                <strong>FAIL</strong>
              </b-radio>
            </b-field>
          </div>
          <div class="content">
            Example words:
            <ul>
              <li>factory</li>
              <li>sky</li>
              <li>fire</li>
              <li>number</li>
              <li>fish</li>
              <li>bicycle</li>
              <li>garden</li>
              <li>yellow</li>
            </ul>
          </div>
        </div>
      </div>
      <pre>
        {{ $store.state.form.hearing }}
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
  name: "WhisperTest",
  computed: {
    hearing: {
      get () {
        return this.$store.state.form.hearing
      },
      set () {
        this.$store.commit('UPDATE_HEARING', this.hearing)
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