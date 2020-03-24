import { History } from 'history'

export interface IProps {
  history?: History
 }

export interface IUser {
  name: string
  password: string
  birthday?: string
  email?: string
}
