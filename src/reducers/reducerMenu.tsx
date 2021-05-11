//import { Reducer } from "redux"
//import { ITabEntity, IMenuEntity, TabsState, TabsActionTypes } from "../types/constants"
//
//export const initialState: TabsState = {
//    menuName: "",
//    data: [],
//}
//
//const reducer: Reducer<TabsState> = (state = initialState, action) => {
//  switch (action.type) {
//    case TabsActionTypes.TAB_SWITCH_MENU: {
//        return { menuName: "test", data: [{tabName: 'tab 001', tabType: 'table'}, {tabName: 'tab 002', tabType: 'table'}]}
//    }
//    default: {
//      return state
//    }
//  }
//}
//
//export { reducer as tabsReducer }







import { MENU_SWITCH, MENU_INIT_STATE } from "../types/constants";
 
export const menuReducer = (state = MENU_INIT_STATE, action) => {
  switch (action.type) {
    case MENU_SWITCH: {
      return action.payload;
    }
    default:
      return state;
  }
};
