import { dbContext } from '../db/DbContext'
// import { BadRequest } from '../utils/Errors'

class BugService {
  async getBugs(id) {
    return await dbContext.Bug.find(id)
  }
}

export const bugService = new BugService()
