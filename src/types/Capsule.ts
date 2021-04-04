export default interface Capsule {
  serial: string,
  status: Status,
  type: Type,
  dragon: string,
  reuse_count: number,
  water_landings: number,
  land_landings: number,
  last_update: string,
  launches: []
}


enum Status {
  "unknown",
  "active",
  "retired",
  "destroyed"
}

enum Type {
  "Dragon 1.0",
  "Dragon 1.1",
  "Dragon 2.0"
}
