import { legacy_createStore } from "redux";
import Reducer from "./Reducer";

export const UsersStore = legacy_createStore(Reducer)