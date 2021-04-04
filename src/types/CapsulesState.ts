import Capsule from "./Capsule";

export default interface CapsulesState {
  capsules: [Capsule]|[],
  isLoading: boolean
}
