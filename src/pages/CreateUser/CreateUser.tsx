import React, { FunctionComponent, FormEvent, useState } from 'react'
import uuid from 'uuid/v4'

import { IProps, IUser } from './Interfaces'
import { useStyles } from './Styles'

import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Button/Button'

const CreateUser: FunctionComponent<IProps> = ({ history }) => {
  const classes = useStyles({})
  const [user, setUser] = useState<IUser>({
    name: '',
    password: '',
    birthday: '',
    email: ''
  })

  const handleChange = (event: { target: HTMLInputElement }): void => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    
    if(!user.name || !user.password) {
      return alert('Please fill inputs')
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]')

    users.push({ id: uuid(), ...user })

    localStorage.setItem('users', JSON.stringify(users))

    history.push('/')
  }

  return (
    <div className={classes.container}>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <div className={classes.formContent}>
          <Input className={classes.input} id='name' name='name' label='Name' onChange={handleChange} />
          <Input className={classes.input} id='email' name='email' label='Email' onChange={handleChange} />
          <Input className={classes.input} id='password' name='password' label='Password' type='password' onChange={handleChange} />
          <Input className={classes.input} id='birthday' name='birthday' label='Birthday' type='date' onChange={handleChange} />
        </div>
        <div className={classes.buttons}>
          <Button submit>Submit</Button>
          <Button to='/'>Back</Button>
        </div>
      </form>
    </div>
  )
}

export { CreateUser }