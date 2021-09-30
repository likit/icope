<template>
<div>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column box is-one-third is-offset-4">
          <h1 class="title">Social Care Screening</h1>
          <b-field>
            <b-checkbox>Do you have difficulty getting around indoors?</b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox>Do you have difficulty using the toilet (or commode)?</b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox>Do you have difficulty dressing yourself?</b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox>Do you have difficulty using bath or shower?</b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox>Do you have difficulty keeping up your personal appearance?</b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox>Do you have difficulty feeding yourself?</b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox>Do you have problems with the place where you live (accommodation)?</b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox>Do you have problems with your finances?</b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox>Do you feel lonely?</b-checkbox>
          </b-field>
          <b-field>
            <b-checkbox>Are you able to pursue leisure interests, hobbies, work, volunteering, supporting your family, educational or spiritual activities that are important to you?</b-checkbox>
          </b-field>
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
  name: "SocialCareScreening",
  data () {
    return {
      result: null
    }
  }
}
</script>

<style scoped>

</style>