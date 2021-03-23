<template>
  <!--NOTE Title, CreatorId, Closed, Modified date -->
  <div class="row">
    <div class="col">
      {{ bug.title }}
      <!--TODO Bug details page router link -->
    </div>
    <div class="col">
      {{ bug.creatorId }}
    </div>
    <div class="col">
      {{ bug.closed ? "Closed" : "Open" }}
    </div>
    <div class="col">
      {{ new Date(bug.updatedAt).toDateString() }}
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { reactive, computed, onMounted } from 'vue'
import { bugService } from '../services/BugService'

export default {
  name: 'Bug',
  props: {
    bug: Object
  },
  setup() {
    const state = reactive({
      user: computed(() => AppState.user)
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
