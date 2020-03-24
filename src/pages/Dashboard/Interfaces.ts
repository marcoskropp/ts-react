export interface IUsers extends Array<IUser> { }

export interface IUser {
  id: string
  name: string
  birthday?: string
  email?: string
}