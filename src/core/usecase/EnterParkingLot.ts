import ParkingLotRepository from "../repository/ParkingLotRepository";

export default class EnterParkingLot {
  constructor (readonly parkingLotRepository: ParkingLotRepository) {}

  async execute (code: string, plate: string, date: Date) {
    const parkingLot = await this.parkingLotRepository.getParkingLot(code)
    if (!parkingLot.isOpen(date)) throw new Error("The parking lot is closed")
    if (parkingLot.isFull()) throw new Error("Parking lot is full")
    this.parkingLotRepository.saveParkedCar(code, plate, date)
    return parkingLot
  }
}