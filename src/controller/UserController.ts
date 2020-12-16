import { Request, Response } from 'express'
import Queue from '../lib/Queue'
import User from '../models/User'

export default class UserController {
  static create = async (request: Request, response: Response) => {
    try {
      const user = request.body
      await User.create(user)
      await Queue.add('RegistrationMail', { user })
      return response.status(201).send()
    } catch (error) {
      return response.status(400).send(error)
    }
  }
  static all = async (request: Request, response: Response) => {
    const users = await User.find()
    return response.send(users)
  }
}
