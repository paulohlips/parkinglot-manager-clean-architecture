import Express from "express"
import ParkingLotRepositorySQL from "../repository/ParkingLotRepositorySQL"
import GetParkingLot from "../../core/usecase/GetParkingLog"
import ExpressAdapter from "../../adapter/ExpressAdapter"
import ParkingLotController from "../../controller/ParkingLotController"

const app = new Express()

app.get("/parkingLot/:code", async (req, res) => {
  const parkingLotRepositorySQL = new ParkingLotRepositorySQL()
  const getParkingLot = new GetParkingLot(parkingLotRepositorySQL)
  const parkingLot = await getParkingLot.execute(req.params.code)
  res.json(parkingLot)
})

app.get("/parkingLot/:code", ExpressAdapter.create(ParkingLotController.getParkingLot))

app.listen(3000)