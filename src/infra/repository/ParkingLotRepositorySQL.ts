import ParkingLotAdapter from "../../adapter/ParkingLotAdapter";
import ParkedCar from "../../core/entity/ParkedCar";
import ParkingLot from "../../core/entity/ParkingLot";
import ParkingLotRepository from "../../core/repository/ParkingLotRepository";
import database from '../database/database'

export default class ParkingLotRepositorySQL implements ParkingLotRepository {
  async getParkingLot(code: string): Promise<ParkingLot> {
    const parkingLotData = await database.oneOrNone("select *, (select count(*) from parking.parked_car pc where pc.code = pl.code)::int as occupied_spaces from parking.parking_lot pl where pl.code = $1", [code])
    console.log(parkingLotData)
    return ParkingLotAdapter.create(
      parkingLotData.code,
      parkingLotData.capacity,
      parkingLotData.open_hour,
      parkingLotData.close_hour,
      parkingLotData.occupied_spaces
    )
  }

  async saveParkedCar(code: string, plate: string, date: Date): Promise<void> {
    await database.none("insert into parking.parked_car (code, plate, date) values ($1, $2, $3)", [code, plate, date])
  }
}