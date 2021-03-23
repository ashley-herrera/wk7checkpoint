<template>
  <div class="container align-items-center justify-content-center">
    <h1 class="m-3">
      Current Bugs
      <button class="btn btn-danger" @click="">
        Report
      </button>
    </h1>
    <div class="card">
      <div class="row mx-1 border border-bottom-danger">
        <div class="col">
          Title
        </div>
        <div class="col">
          Reported By
        </div>
        <div class="col">
          Status
        </div>
        <div class="col">
          Last Modified
        </div>
      </div>
      <div class="col">
        <!-- NOTE v-for is grabbing a singular post from state -->
        <!-- NOTE Key identifies child post from component -->
        <!-- NOTE ~~~Data is a prop grabbing the object type with its name -->
        <Bug v-for="bug in state.bugs" :key="bug.id" :bug="bug" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import Bug from '../components/Bug'
import { bugService } from '../services/BugService'

export default {
  name: 'Home',
  setup() {
    const state = reactive({
      bugs: computed(() => AppState.bugs)
    })
    onMounted(() => {
      bugService.getBugs()
    })

    return {
      state
    }
  },

  components: {
    Bug
  }
}
</script>

<style scoped lang="scss">
  .home{
  // text-align: center;
  user-select: none;
  }
</style>
