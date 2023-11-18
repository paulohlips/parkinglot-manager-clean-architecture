import ParkingLot from "../src/core/entity/ParkingLot"
import EnterParkingLot from "../src/core/usecase/EnterParkingLot"
import ParkingLotRepository from "../src/infra/repository/ParkingLotRepositoryMemory"

test("should test enter parking lot", async () => {
  const parkingLotRepository = new ParkingLotRepository()
  const enterParkingLot = new EnterParkingLot(parkingLotRepository)
  const parkingLot = await enterParkingLot.execute("shopping")
  expect(parkingLot.code).toBe("shopping")
})