import ParkingLotRepository from "../repository/ParkingLotRepository";

export default class EnterParkingLot {
  constructor (readonly parkingLotRepository: ParkingLotRepository) {}

  async execute (code: string) {
    const parkingLot = await this.parkingLotRepository.getParkingLot(code)
    return parkingLot
  }
}