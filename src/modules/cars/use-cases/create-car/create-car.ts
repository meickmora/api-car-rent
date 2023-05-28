import { inject, injectable } from 'tsyringe'
import { Car } from '../../model/Car'
import { ICarsRepository } from '../../repositories/interfaces/cars-repository'

interface IRequest {
  name: string
  description: string
  daily_rate: number
  license_plate: string
  fine_amount: number
  brand: string
  categoryId: string
}

@injectable()
class CreateCar {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository
  ) {}

  async execute({
    brand,
    categoryId,
    daily_rate,
    description,
    fine_amount,
    license_plate,
    name,
  }: IRequest): Promise<Car> {
    const car = await this.carsRepository.create({
      brand,
      categoryId,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
    })

    return car
  }
}

export { CreateCar }
