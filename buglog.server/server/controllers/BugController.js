import { Auth0Provider } from '@bcwdev/auth0provider'
import BaseController from '../utils/BaseController.js'
import { bugService } from '../services/BugService.js'

export class BugController extends BaseController {
  constructor() {
    super('api/bugs')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/', this.getBugs)
  }

  async getBugs(req, res, next) {
    try {
      return res.send(await bugService.getBugs(req.id))
    } catch (error) {
      next(error)
    }
  }
}
