<template>
  <div class="container align-items-center justify-content-center">
    <h1 class="m-3">
      Current Bugs
      <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#bugModal">
        Report
      </button>
      <!-- Modal -->
      <div class="modal fade"
           id="bugModal"
           tabindex="-1"
           role="dialog"
           aria-labelledby="exampleModalLabel"
           aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Report a bug
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="Title">Title</label>
                <input type="title" class="form-control" id="title" placeholder="Bug name..." v-model="newBug.title">
              </div>
              <div class="form-group">
                <label for="description" class="form-label">Description</label>
                <textarea type="text"
                          name="description"
                          class="form-input"
                          placeholder=""
                          rows="3"
                          v-model="newBug.description"
                >
                </textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Close
              </button>
              <router-link :to="{name: 'BugDetails', params: {id: newBug.id}}">
                <button type="button" class="btn btn-success" @submit="createBug()">
                  Report
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <!-- Bug Table -->
    </h1>
    <div class="card">
      <div class="row border font-weight-bold">
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
    const newBug = {}
    const state = reactive({
      bugs: computed(() => AppState.bugs)
    })
    onMounted(() => {
      bugService.getBugs()
    })

    return {
      state,
      newBug,
      async createBug() {
        bugService.createBug(newBug)
        // bugService.getBugById(newBug)
      }
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
