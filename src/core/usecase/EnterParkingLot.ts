import ParkingLotRepository from "../repository/ParkingLotRepository";

export default class EnterParkingLot {
  constructor (readonly parkingLotRepository: ParkingLotRepository) {}

  async execute (code: string, plate: string, date: Date) {
    const parkingLot = await this.parkingLotRepository.getParkingLot(code)
    if (!parkingLot.isOpen(date)) throw new Error("The parking lot is closed")
    this.parkingLotRepository.saveParkedCar(code, plate, date)
    return parkingLot
  }
}