import EnterParkingLot from "../src/core/usecase/EnterParkingLot"
import ParkingLotRepository from "../src/infra/repository/ParkingLotRepositoryMemory"

test("should test enter parking lot", async () => {
  const parkingLotRepository = new ParkingLotRepository()
  const enterParkingLot = new EnterParkingLot(parkingLotRepository)
  const parkingLot = await enterParkingLot.execute("shopping", "JHP-8105", new Date("2023-11-17T21:00:00"))
  expect(parkingLot.code).toBe("shopping")
})