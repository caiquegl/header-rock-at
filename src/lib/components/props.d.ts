import { ReactElement } from "react";

declare module "*.png"

export interface IProps {
    user: IUser;
    listOrganization: IOrganization[]
    organizationActive: IOrganization
    changeOrganization: (organization:IOrganization) => void
    listWorkspace: IWorkspace[]
    workspaceActive: IWorkspace
    changeWorkspace: (workspace:IWorkspace) => void
    listApp: IApp[]
    appActive: IApp
    changeApp: (workspace:IApp) => void
    logout?: () => void
    listMenu?: ReactElement

}

export interface IUser {
    name:string
    email:string
    avatar_url:string
}

export interface IOrganization {
    name: string
    avatar_url: string | undefined
    id: number
}

export interface IWorkspace {
    name: string
    avatar_url: string | undefined
    id: number
}

export interface IApp {
    name: string
    avatar_url: string | undefined
    id: number
}