<template>
<div>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-one-third is-offset-4 box">
          {{ form.country }}
          <b-menu>
            <b-menu-list label="Menu">
              <b-menu-item expanded>
                <template #label="props">
                  Cognitive Capacity
                  <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'"></b-icon>
                </template>
                <b-menu-item label="Screening"
                             tag="router-link" :to="{ name: 'Cognitive' }"></b-menu-item>
                <b-menu-item label="Mini-Cog"
                             tag="router-link" :to="{ name: 'MiniCog' }"></b-menu-item>
              </b-menu-item>
              <b-menu-item expanded>
                <template #label="props">
                  Locomotor Capacity
                  <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'"></b-icon>
                </template>
                <b-menu-item tag="router-link" :to="{ name: 'ChairRiseTest' }"
                             label="Screening"></b-menu-item>
                <b-menu-item tag="router-link" :to="{ name: 'SPPB' }"
                             label="Short Physical Performance Battery (SPPB)"></b-menu-item>
              </b-menu-item>
              <b-menu-item expanded>
                <template #label="props">
                  Mulnutrition
                  <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'"></b-icon>
                </template>
                <b-menu-item tag="router-link" :to="{ name: 'Mulnutrition' }"
                             label="Screening"></b-menu-item>
                <b-menu-item tag="router-link" :to="{ name: 'MNAScreening' }"
                             label="MNA Screening"></b-menu-item>
                <b-menu-item tag="router-link" :to="{ name: 'MNAAssessment' }"
                             label="MNA Assessment"></b-menu-item>
              </b-menu-item>
              <b-menu-item expanded>
                <template #label="props">
                  Visual Capacity
                  <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'"></b-icon>
                </template>
                <b-menu-item tag="router-link" :to="{ name: 'DistanceVision' }"
                             label="Distance vision test"></b-menu-item>
                <b-menu-item tag="router-link" :to="{ name: 'NearVision' }"
                             label="Near vision test"></b-menu-item>
              </b-menu-item>
              <b-menu-item expanded>
                <template #label="props">
                  Hearing Capacity
                  <b-icon class="is-pulled-right"
                          :icon="props.expanded ? 'menu-up' : 'menu-down'"></b-icon>
                </template>
                <b-menu-item tag="router-link"
                             :to="{ name: 'WhisperTest' }"
                             label="Whisper voice test"></b-menu-item>
              </b-menu-item>
              <b-menu-item expanded>
                <template #label="props">
                  Psychological Capacity
                  <b-icon class="is-pulled-right"
                          :icon="props.expanded ? 'menu-up' : 'menu-down'"></b-icon>
                </template>
                <b-menu-item tag="router-link"
                             :to="{ name: 'PsychoScreening' }"
                             label="Screening"></b-menu-item>
                <b-menu-item tag="router-link"
                             :to="{ name: 'MoodAssessment' }"
                             label="Mood Assessment"></b-menu-item>
              </b-menu-item>
              <b-menu-item expanded>
                <template #label="props">
                  Social Care and Support
                  <b-icon class="is-pulled-right"
                          :icon="props.expanded ? 'menu-up' : 'menu-down'"></b-icon>
                </template>
                <b-menu-item tag="router-link"
                             :to="{ name: 'SocialCareScreening' }"
                             label="Screening"></b-menu-item>
              </b-menu-item>
            </b-menu-list>
          </b-menu>
          <div class="buttons is-centered">
            <button @click="finish" class="button is-success">Finish</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import {ToastProgrammatic} from "buefy";

export default {
  name: "Menu",
  computed: {
    form: {
      get () {
        return this.$store.state.form
      },
      set () {
        this.$store.commit('UPDATE_FORM', this.form)
      }
    }
  },
  methods: {
    async finish () {
      if (this.form.country == null) {
        ToastProgrammatic.open({
          type: 'is-warning',
          message: 'Country must be specified.'
        })
      } else {
        await this.$store.dispatch('saveForm')
        await this.$store.dispatch('resetForm')
      }
      this.$router.push({ name: 'Entry'})
    }
  }
}
</script>

<style scoped>

</style>