import { dbContext } from '../db/DbContext'
// import { BadRequest } from '../utils/Errors'

class BugService {
  async getBugs() {
    return await dbContext.Bug.find({})
  }

  async getBugById(id) {
    return await dbContext.Bug.findById(id)
  }

  async createBug(title) {
    return await dbContext.Bug.create(title)
  }

  // async editBug() {

  // }

  // async deleteBug() {

  // }
}

export const bugService = new BugService()
