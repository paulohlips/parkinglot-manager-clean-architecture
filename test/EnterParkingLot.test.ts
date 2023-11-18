import EnterParkingLot from "../src/core/usecase/EnterParkingLot"
import GetParkingLot from "../src/core/usecase/GetParkingLog"
import ParkingLotRepository from "../src/infra/repository/ParkingLotRepositoryMemory"

test("should test enter parking lot", async () => {
  const parkingLotRepository = new ParkingLotRepository()
  const enterParkingLot = new EnterParkingLot(parkingLotRepository)
  const getParkingLot = new GetParkingLot(parkingLotRepository)
  const parkingLotBeforeEnter = await getParkingLot.execute("shopping")
  expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0)
  await enterParkingLot.execute("shopping", "JHP-8105", new Date("2023-11-17T10:00:00"))
  const parkingLotAfterEnter = await getParkingLot.execute("shopping")
  expect(parkingLotAfterEnter.occupiedSpaces).toBe(1)
})

test("should not enter when parking lot is closed", async () => {
  const parkingLotRepository = new ParkingLotRepository()
  const enterParkingLot = new EnterParkingLot(parkingLotRepository)
  await expect(enterParkingLot.execute("shopping", "JHP-8105", new Date("2023-11-17T00:00:00")))
    .rejects
    .toThrow(new Error("The parking lot is closed"))
})

test("should not enter when parking lot is full", async () => {
  const parkingLotRepository = new ParkingLotRepository()
  const enterParkingLot = new EnterParkingLot(parkingLotRepository)
  await enterParkingLot.execute("shopping", "JHP-8105", new Date("2023-11-17T10:00:00"))
  await enterParkingLot.execute("shopping", "JHP-8105", new Date("2023-11-17T10:00:00"))
  await enterParkingLot.execute("shopping", "JHP-8105", new Date("2023-11-17T10:00:00"))
  await enterParkingLot.execute("shopping", "JHP-8105", new Date("2023-11-17T10:00:00"))
  await enterParkingLot.execute("shopping", "JHP-8105", new Date("2023-11-17T10:00:00"))
  await expect(enterParkingLot.execute("shopping", "JHP-8105", new Date("2023-11-17T10:00:00")))
    .rejects
    .toThrow(new Error("Parking lot is full"))
})