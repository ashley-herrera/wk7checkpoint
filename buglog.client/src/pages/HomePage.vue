<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <h3 class="card-title m-3 bg-dark text-light p-3 d-flex">
      <span>Title |</span>
      <span>Reported By |</span>
      <span>Status |</span>
      <span>Last Modified</span>
    </h3>
    <div class="card-body">
      <!-- NOTE v-for is grabbing a singular post from state -->
      <!-- NOTE Key identifies child post from component -->
      <!-- NOTE ~~~Data is a prop grabbing the object type with its name -->
      <Bug v-for="bug in state.bugs" :key="bug.id" :bug="bug" />
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
  text-align: center;
  user-select: none;
  }
</style>
