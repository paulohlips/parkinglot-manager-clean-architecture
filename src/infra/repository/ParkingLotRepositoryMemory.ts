import ParkingLotAdapter from "../../adapter/ParkingLotAdapter";
import ParkedCar from "../../core/entity/ParkedCar";
import ParkingLot from "../../core/entity/ParkingLot";
import ParkingLotRepository from "../../core/repository/ParkingLotRepository";

export default class ParkingLotRepositoryMemory implements ParkingLotRepository {
  private parkingLots = [
   {
    code: "shopping",
    capacity: 5,
    open_hour: 8,
    close_hour:22
   }
  ]

  private parkedCars = []

  async getParkingLot(code: string): Promise<ParkingLot> {
    const { capacity, close_hour, code: parkLotCode, open_hour } = this.parkingLots.find(parkingLot => parkingLot.code === code)
    const occupiedSpaces = this.parkedCars.length
    const parkingLot = ParkingLotAdapter.create(parkLotCode, capacity, open_hour, close_hour, occupiedSpaces)
    return Promise.resolve(parkingLot)
  }

  saveParkedCar(code: string, plate: string, date: Date): void {
    this.parkedCars.push({ code, date, plate })
  }
}