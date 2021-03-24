<template>
  <div class="container">
    <div class="row mt-3">
      <h1>{{ state.bug.title }}</h1>
      <div class="col d-flex justify-content-end">
        <button class="btn btn-danger">
          Close
        </button>
      </div>
    </div>
    <div class="row mt-3">
      <span>Reported by: Name</span>
      <!-- {{ state.bug.creator.name }} -->
      <span class="ml-auto font-weight-bold">Status:
        <h3 class="text-danger" v-if="state.bug.closed == true">
          Closed
        </h3>
        <h3 class="text-success" v-else>
          Open
        </h3>
      </span>
    </div>
    <div class="row mt-3 border border-dark">
      {{ state.bug.description }}
    </div>
    <!-- Notes -->
    <div class="row mt-5">
      <h1>Notes</h1>
      <div class="col">
        <button class="btn btn-success">
          Add
        </button>
      </div>
    </div>
    <div class="row">
      <div class="row border border-dark font-weight-bold">
        <div class="col">
          Name
        </div>
        <div class="col">
          Message
        </div>
        <div class="col">
          Delete
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { bugService } from '../services/BugService'
// import Bug from '../components/Bug'

export default {
  name: 'BugDetails',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const state = reactive({
      bug: computed(() => AppState.selectedBug)
      // note: computed(() => AppState.notes)
    })

    onMounted(() => {
      bugService.getBugById(route.params.id)
      // noteService.getNotes(route.params.id)
    })

    return {
      route,
      router,
      state
    }
  },
  components: {
    // Bug
  }
}
</script>

<style>

</style>
