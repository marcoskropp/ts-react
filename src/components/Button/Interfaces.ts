export interface IProps {
  className?: string | undefined
  to?: string
  type?: string
  disabled?: boolean | undefined
  children?: any
  submit?: boolean
  color?: 'inherit' | 'primary' | 'secondary' | 'default' | undefined
  variant?: 'text' | 'outlined' | 'contained' | undefined
}