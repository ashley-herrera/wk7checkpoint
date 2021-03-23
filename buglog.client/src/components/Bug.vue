<template>
  <div class="row">
    <div class="card">
      <!-- Title, CreatorId, Closed, Modified date? -->
      {{ bug.title }}
    </div>
  </div>
</template>

<script>

export default {
  name: 'Bug',
  props: {
    bug: Object
  },
  setup(props) {
    return {

    }
  }
}
</script>

<style>

</style>
