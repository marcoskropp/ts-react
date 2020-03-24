import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { Button as MaterialButton } from '@material-ui/core'

import { IProps } from './Interfaces'
import { useStyles } from './Styles'

const Button: FunctionComponent<IProps> = ({ 
  to, 
  submit, 
  disabled, 
  color = 'primary', 
  variant = 'outlined', 
  children 
}) => {
  const classes = useStyles({})
  const params = {}

  if (to) {
    Object.assign(params, {
      component: Link,
      to
    })
  }

  if (submit) {
    Object.assign(params, {
      type: "submit"
    })
  }

  return (
    <MaterialButton
      className={classes.gradientButton}
      disabled={disabled}
      variant={variant}
      color={color}
      {...params}
    >
      {children}
    </MaterialButton>
  )
}

export { Button }