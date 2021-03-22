import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class NoteService {
  async getNotesByBugId(id) {
    return await dbContext.Note.findById(id).populate('bug', 'title', 'body')
  }

  async createNote(body) {
    return await dbContext.Note.create(body)
  }

  async deleteNote(id, userId) {
    const post = await dbContext.Note.findOneAndRemove({ _id: id, creatorId: userId })
    if (!post) {
      throw new BadRequest('You are not the CREATOR or BAD ID.')
    }
  }
}

export const noteService = new NoteService()
