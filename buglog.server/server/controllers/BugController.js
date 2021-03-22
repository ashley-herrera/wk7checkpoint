import { Auth0Provider } from '@bcwdev/auth0provider'
import BaseController from '../utils/BaseController.js'
import { bugService } from '../services/BugService.js'

export class BugController extends BaseController {
  constructor() {
    super('api/bugs')
    this.router
      .get('/', this.getBugs)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:id', this.getBugById)
      .post('', this.createBug)
      .put('/:id', this.editBug)
  }

  async getBugs(req, res, next) {
    try {
      return res.send(await bugService.getBugs())
    } catch (error) {
      next(error)
    }
  }

  async getBugById(req, res, next) {
    try {
      return res.send(await bugService.getBugById(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  async createBug(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      res.send(await bugService.createBug(req.body))
    } catch (error) {
      next(error)
    }
  }

  async editBug(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      res.send(await bugService.editBug(req.params.id, req.userInfo.id, req.body))
    } catch (error) {
      next(error)
    }
  }

  // async deleteBug(req, res, next) {
  //   try {

  //   } catch (error) {

  //   }
  // }
}
