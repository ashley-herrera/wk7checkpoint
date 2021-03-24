<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <input class="form-control" placeholder="title" type="text" v-model="state.editable.title">
    </div>
    <div>
      <textarea class="form-control" placeholder="description" type="text" v-model="state.editable.description"></textarea>
    </div>
  </form>
</template>

<script>
import { reactive, watchEffect } from 'vue'
import Bug from '../models/Bug'
import { bugService } from '../services/BugService'
export default {
  name: 'BugForm',
  props: {
    bugForm: { type: Object, default: () => new Bug() }
  },
  setup(props) {
    const state = reactive({
      editable: new Bug()
    })
    watchEffect(() => {
      state.editable = props.bug
    })
    return {
      state,
      async handleSubmit() {
        if (state.editable.id) {
          bugService.editBug(state.editable)
        } else {
          bugService.createBug(state.editable)
        }
      }
    }
  }
}
</script>

<style>

</style>
