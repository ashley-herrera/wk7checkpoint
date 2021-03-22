import { dbContext } from '../db/DbContext'
// import { BadRequest } from '../utils/Errors'

class BugService {
  async getBugs() {
    return await dbContext.Bug.find({})
  }
}

export const bugService = new BugService()
