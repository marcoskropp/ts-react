import { ChangeEvent } from 'react'

export interface IProps {
  onChange(event: ChangeEvent<HTMLInputElement>): void
  id?: string
  name: string
  type?: string
  value?: string
  label?: string
  className?: string
}