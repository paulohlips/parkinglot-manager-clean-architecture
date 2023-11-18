import ParkedCar from "../../core/entity/ParkedCar";
import ParkingLot from "../../core/entity/ParkingLot";
import ParkingLotRepository from "../../core/repository/ParkingLotRepository";

export default class ParkingLotRepositoryMemory implements ParkingLotRepository {
  private parkingLots = [
    new ParkingLot("shopping", 5, 8, 22)
  ]

  private parkedCars = []

  getParkingLot(code: string): Promise<ParkingLot> {
    return Promise.resolve(this.parkingLots.find(parkingLot => parkingLot.code === code))
  }

  saveParkedCar(code: string, plate: string, date: Date): void {
    this.parkedCars.push({ code, date, plate })
  }
}