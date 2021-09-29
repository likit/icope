<template>
<div>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column box is-one-third is-offset-4">
          <div class="notification">
            <h1 class="title">
              Have you unintentionally lost 3 kgs over the last three months?
            </h1>
            <div class="buttons is-centered">
              <router-link :to="{ name: 'Menu' }" class="button is-text">No</router-link>
              <router-link :to="{ name: 'MNAScreening' }" class="button is-primary">Yes</router-link>
            </div>
          </div>
          <div class="notification">
            <h1 class="title">
              Have you experience loss of appetite?
            </h1>
            <div class="buttons is-centered">
              <router-link :to="{ name: 'Menu' }" class="button is-text">No</router-link>
              <router-link :to="{ name: 'MNAScreening' }" class="button is-primary">Yes</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: "Mulnutrition"
}
</script>

<style scoped>

</style>