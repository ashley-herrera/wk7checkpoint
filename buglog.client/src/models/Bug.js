export class Bug {
  constructor(data = {}) {
    this.id = data._id || data.id || ''
    this.closed = data.closed || ''
    this.description = data.description || ''
    this.title = data.title || ''
    this.closedDate = data.closedData || ''
    this.creatorId = data.creatorId || ''
    this.updatedAt = data.updatedAt || ''
  }
}
