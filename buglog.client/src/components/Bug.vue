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
import { AppState } from '../AppState'
import { reactive, computed, onMounted } from 'vue'
import { bugService } from '../services/'

export default {
  name: 'Bug',
  props: {
    bug: Object
  },
  setup() {
    const state = reactive({
      user: computed(() => AppState.user),
      bug: computed(() => AppState.user)
    })
    onMounted(() => {
      bugService.getBugs()
    })
    return {
      state
    }
  }
}
</script>

<style>

</style>
