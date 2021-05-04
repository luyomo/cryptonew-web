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
