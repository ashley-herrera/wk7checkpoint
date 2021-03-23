<template>
  <!-- Title, CreatorId, Closed, Modified date? -->
  <div class="row">
    <div class="col">
      {{ bug.title }}
    </div>
    <div class="col">
      {{ bug.creatorId }}
    </div>
    <div class="col">
      {{ bug.closed }}
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
