<template>
  <!--NOTE Title, CreatorId, Closed, Modified date -->
  <router-link :to="{name: 'BugDetails', params: {id: bug.id}}">
    <div class="row border border-gray">
      <div class="col">
        {{ bug.title }}
      </div>
      <div class="col">
        {{ bug.creator.name }}
      </div>
      <div class="col text-danger" v-if="bug.closed == true">
        Closed
      </div>
      <div class="col text-success" v-else>
        Open
      </div>
      <div class="col">
        {{ new Date(bug.updatedAt).toDateString() }}
      </div>
    </div>
  </router-link>
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
