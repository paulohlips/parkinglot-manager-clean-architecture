export default class ParkedCar {
  constructor (readonly code: string, readonly plate: string, readonly date: Date) {
    if (!/[A-Z]{3}-[0-9]{4}/.test(plate)) throw new Error("Invalid plate")
  }
}