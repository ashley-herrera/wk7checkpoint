import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class BugService {
  async getBugs() {
    return await dbContext.Bug.find({})
  }

  async getBugById(query) {
    return await dbContext.Bug.findById(query)
  }

  async createBug(body) {
    return await dbContext.Bug.create(body)
  }

  async editBug(id, userId, body) {
    const post = await dbContext.Bug.findOneAndUpdate({ _id: id, creatorId: userId }, body, { new: true })
    if (!post) {
      throw new BadRequest('You are not the CREATOR OR BAD ID')
    }
  }

  async deleteBug(id, userId) {
    const post = await dbContext.Bug.findByIdAndRemove({ _id: id, creatorId: userId })
    if (!post) {
      throw new BadRequest('You are not the CREATOR OR BAD ID')
    }
  }
}

export const bugService = new BugService()
