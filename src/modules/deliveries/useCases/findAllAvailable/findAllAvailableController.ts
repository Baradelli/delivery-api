import { Request, Response } from 'express'
import { FindAllAvailableUseCase } from './findAllAvailableUseCase'

export class FindAllAvailableController {
  async handle(req: Request, res: Response) {
    const findAllAvailableUseCase = new FindAllAvailableUseCase()

    const deliveries = await findAllAvailableUseCase.execute()

    return res.json(deliveries)
  }
}
