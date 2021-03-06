import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class BugService {
  async getBugs() {
    return await dbContext.Bug.find({}).populate('creator')
  }

  async getBugById(query) {
    return await dbContext.Bug.findById(query).populate('creator')
  }

  async createBug(body) {
    return await dbContext.Bug.create(body)
  }

  async editBug(id, userId, body) {
    if (body.creatorId === userId) {
      return await dbContext.Bug.findOneAndUpdate({ _id: id, creatorId: userId, closed: false }, body, { new: true })
    } else {
      throw new BadRequest('You are not the CREATOR OR BAD ID')
    }
  }

  async deleteBug(id, userId) {
    const bug = await this.getBugById(id)
    if (!bug.closed) {
      bug.closed = true
      return await dbContext.Bug.findByIdAndUpdate({ _id: id, creatorId: userId }, bug, { new: true })
    } else {
      throw new BadRequest('You are not the CREATOR OR BAD ID')
    }
  }
}

export const bugService = new BugService()
