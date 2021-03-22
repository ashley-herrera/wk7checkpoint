import { dbContext } from '../db/DbContext'
// import { BadRequest } from '../utils/Errors'

class BugService {
  async getBugs() {
    return await dbContext.Bug.find({})
  }

  async getBugById(query) {
    return await dbContext.Bug.findById(query)
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
