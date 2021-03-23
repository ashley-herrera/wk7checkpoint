<template>
  <div class="row">
    <div class="card">
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { reactive, computed } from 'vue'

export default {
  name: 'Bug',
  props: {
    bug: Object
  },
  setup(props) {
    const state = reactive({
      user: computed(() => AppState.user)// NOTE What is this doing and do I need it?
    })
    return {
      state
    }
  }
}
</script>

<style>

</style>
