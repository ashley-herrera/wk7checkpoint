export class Note {
  constructor(data = {}) {
    this.id = data._id || data.id || ''
    this.body = data.body || ''
    this.bugId = data.bug || ''
    this.creatorId = data.creatorId || ''
  }
}
