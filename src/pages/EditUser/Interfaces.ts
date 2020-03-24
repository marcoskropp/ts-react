export interface IProps {
  match: {
    params: {
      id: string
    }
  }
}

export interface IUsers extends Array<IUser> {}

export interface IUser {
  id: string
  name: string
  password: string
  birthday?: string
  email?: string
}