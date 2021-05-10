// 1. Google OAUTH2 authentication
export const GOOGLE_OAUTH2 = "GOOGLE_OAUTH2";

export const GOOGLE_INIT_STATE = {ft: {
  Qt: "admin@cryptonews.com"
, Ue: "admin"
, iJ: "https://st4.depositphotos.com/16552764/20957/v/600/depositphotos_209572350-stock-illustration-block-chain-logo-illustration-block.jpg"
}};

// 2. Menu definition
export interface ITabEntity {
    tabName: string,
    tabType: string,
}

export interface IMenuEntity {
    id?:         number,
    path?:       string,
    name?:       string,
    locale?:     string,
    menuName?:   string,
    component?:  string,
    hideInMenu?: boolean,
    collapsed?:  boolean,
    children?:   IMenuEntity[],
    tabs?:       ITabEntity[],
}

export enum TabsActionTypes {
    TAB_SWITCH_MENU = "@@tabs/SWITCH_MENU",
}

export interface TabsState {
    readonly menuName: string,
    readonly data: ITabEntity[]
}
