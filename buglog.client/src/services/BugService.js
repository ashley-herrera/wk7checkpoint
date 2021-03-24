import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'
import { Bug } from '../models/Bug'

class BugService {
  async getBugs() {
    try {
      const res = await api.get('api/bugs')
      AppState.bugs = res.data.map(b => new Bug(b))
    } catch (error) {
      logger.error(error)
    }
  }

  async getBugById(id) {
    try {
      const res = await api.get('api/bugs/' + id)
      AppState.selectedBug = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async getNotesByBugId(id) {
    try {
      const res = await api.get(`api/bugs/${id}/notes`)
      AppState.notes = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async createBug(bugData) {
    try {
      await api.post('api/bugs', new Bug(bugData))
      this.getBugs()
    } catch (error) {
      logger.error(error)
    }
  }

  async editBug(id) {
    try {
      const res = await api.put('api/bugs/' + id)
      AppState.bugs = res.data
    } catch (error) {

    }
  }

  async deleteBug(id) {
    await api.delete(`api/bugs/${id}`)
    this.getBugs()
  }
}
export const bugService = new BugService()
