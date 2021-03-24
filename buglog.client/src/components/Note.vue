<template>
  <div class="row">
    <div class="col">
      Creator
    </div>
    <div class="col">
      Message
    </div>
    <div class="col">
      <i class="fa fa-trash" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
// import { bugService } from '../services/BugService'

export default {
  name: 'Note',
  props: {
    note: Object
  },
  setup() {
    const state = reactive({
      user: computed(() => AppState.user)
    })

    return {
      state
    }
  }

}
</script>

<style>

</style>
