<template>
<div>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-one-third is-offset-4 box">
          <b-menu>
            <b-menu-list label="Menu">
              <b-menu-item icon="settings" :active="isActive" expanded>
                <template #label="props">
                  Cognitive Capacity
                  <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'"></b-icon>
                </template>
                <b-menu-item label="Screening"></b-menu-item>
                <b-menu-item label="Mini-Cog"></b-menu-item>
              </b-menu-item>
              <b-menu-item icon="settings" :active="isActive" expanded>
                <template #label="props">
                  Locomotor Capacity
                  <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'"></b-icon>
                </template>
                <b-menu-item tag="router-link" :to="{ name: 'ChairRiseTest' }"
                             label="Screening"></b-menu-item>
                <b-menu-item tag="router-link" :to="{ name: 'MNAScreening' }"
                             label="MNA Screening"></b-menu-item>
                <b-menu-item tag="router-link" :to="{ name: 'MNAAssessment' }"
                             label="MNA Assessment"></b-menu-item>
              </b-menu-item>
              <b-menu-item icon="settings" :active="isActive" expanded>
                <template #label="props">
                  Mulnutrition
                  <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'"></b-icon>
                </template>
                <b-menu-item tag="router-link" :to="{ name: 'Mulnutrition' }"
                             label="Screening"></b-menu-item>
                <b-menu-item tag="router-link" :to="{ name: 'SPPB' }"
                             label="Short Physical Performance Battery (SPPB)"></b-menu-item>
              </b-menu-item>
              <b-menu-item icon="settings" :active="isActive" expanded>
                <template #label="props">
                  Visual Capacity
                  <b-icon class="is-pulled-right" :icon="props.expanded ? 'menu-up' : 'menu-down'"></b-icon>
                </template>
                <b-menu-item tag="router-link" :to="{ name: 'DistanceVision' }"
                             label="Distance vision test"></b-menu-item>
                <b-menu-item tag="router-link" :to="{ name: 'NearVision' }"
                             label="Near vision test"></b-menu-item>
              </b-menu-item>
              <b-menu-item icon="settings" :active="isActive" expanded>
                <template #label="props">
                  Hearing Capacity
                  <b-icon class="is-pulled-right"
                          :icon="props.expanded ? 'menu-up' : 'menu-down'"></b-icon>
                </template>
                <b-menu-item tag="router-link"
                             :to="{ name: 'WhisperTest' }"
                             label="Whisper voice test"></b-menu-item>
              </b-menu-item>
              <b-menu-item icon="settings" :active="isActive" expanded>
                <template #label="props">
                  Psychological Capacity
                  <b-icon class="is-pulled-right"
                          :icon="props.expanded ? 'menu-up' : 'menu-down'"></b-icon>
                </template>
                <b-menu-item tag="router-link"
                             :to="{ name: 'PsychoScreening' }"
                             label="Screening"></b-menu-item>
              </b-menu-item>
              <b-menu-item icon="settings" :active="isActive" expanded>
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
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  name: "Menu"
}
</script>

<style scoped>

</style>