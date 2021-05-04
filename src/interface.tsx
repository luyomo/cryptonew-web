interface ITabEntity {
    tabName: string,
    tabType: string,
}

interface IMenuEntity {
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
