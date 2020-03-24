import React, { FunctionComponent } from 'react'
import { TextField } from '@material-ui/core'

import { IProps } from './Interfaces'

const Input: FunctionComponent<IProps> = ({ id, name, type = 'text', label, value, className, onChange }) => {
  return (
    <TextField
      id={id}
      name={name}
      className={className}
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      InputLabelProps={{
        shrink: true
      }}
    />
  )
}

export { Input }