<template>
  <div class="container">
    <div class="row mt-3">
      <h1>{{ state.bug.title }}</h1>
      <!-- Close Bug Modal -->
      <div class="col d-flex justify-content-end">
        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#closeConfirm">
          Close
        </button>
        <div class="modal fade"
             id="closeConfirm"
             tabindex="-1"
             role="dialog"
             aria-labelledby="exampleModalLabel"
             aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h3 class="modal-title" id="exampleModalLabel">
                  Are You Sure?
                </h3>
                <span>This cannot be undone.</span>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-success" data-dismiss="modal">
                  Yes
                </button>
                <button type="button" class="btn btn-danger">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <span>Reported by: </span>
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
        <button class="btn btn-success" type="button" data-toggle="modal" data-target="#noteModal">
          Add
        </button>
        <div class="modal fade"
             id="noteModal"
             tabindex="-1"
             role="dialog"
             aria-labelledby="exampleModalLabel"
             aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Leave a note
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="form-group">
                  <label for="Title"></label>
                  <input type="title" class="form-control" id="message" placeholder="">
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">
                  Close
                </button>
                <button type="button" class="btn btn-success">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="row border border-dark font-weight-bold">
          <div class="col">
            Name
          </div>
          <div class="col">
            Message
          </div>
          <div class="col d-flex justify-content-end">
            Delete
          </div>
        </div>
        <Note v-for="note in state.notes" :key="note.id" :note="note" />
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { bugService } from '../services/BugService'
import Note from '../components/Note'

export default {
  name: 'BugDetails',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const state = reactive({
      bug: computed(() => AppState.selectedBug),
      notes: computed(() => AppState.notes)
    })

    onMounted(() => {
      bugService.getBugById(route.params.id)
      bugService.getNotesByBugId(route.params.id)
    })

    return {
      route,
      router,
      state
    }
  },
  components: {
    Note
  }
}
</script>

<style>

</style>
