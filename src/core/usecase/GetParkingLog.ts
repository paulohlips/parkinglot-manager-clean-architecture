import ParkingLotRepository from "../repository/ParkingLotRepository";

export default class GetParkingLot {
  constructor (readonly parkingLotRepository: ParkingLotRepository) {}

  async execute (code: string) {
    return await this.parkingLotRepository.getParkingLot(code)
  }
}