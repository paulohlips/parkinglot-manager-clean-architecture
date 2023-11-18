export default class ParkingLot {
  occupiedSpaces: number
  constructor (
    readonly code: string,
    readonly capacity: number,
    readonly openHour: number,
    readonly closeHour: number,
    occupiedSpaces: number
    ) {
      this.occupiedSpaces = occupiedSpaces
    }

  isOpen (date: Date) {
    const hour = date.getHours()
    return (hour >= this.openHour && hour <= this.closeHour)
  }

  isFull () {
    return (this.capacity === this.occupiedSpaces)
  }
}