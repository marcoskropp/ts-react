import React, { FunctionComponent, useState, useEffect, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'

import { IProps, IUsers, IUser } from './Interfaces'
import { useStyles } from './Styles'

import { Input } from '../../components/Input/Input'
import { Button } from '../../components/Button/Button'

const EditUser: FunctionComponent<IProps> = ({ match: { params: { id } } }) => {
  const history = useHistory()
  const classes = useStyles({})

  useEffect(() => {
    findUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [user, setUser] = useState<IUser>({
    id,
    name: '',
    password: '',
    birthday: '',
    email: ''
  })

  const [users, setUsers] = useState<IUsers>([])

  const findUser = () => {
    const users = JSON.parse(localStorage.getItem('users'))
    
    setUsers(users)
    
    const findedUser = users.find((user: IUser) => user.id === id && user)

    if(!findedUser) history.push('/')

    setUser(findedUser)
  }

  const handleChange = (event: { target: HTMLInputElement }) => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newUsers = users.filter((user: IUser) => user.id !== id && user)

    newUsers.push(user)

    localStorage.setItem('users', JSON.stringify(newUsers))
    
    history.push('/')
  }

  return (
    <div className={classes.container}>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <div className={classes.formContent}>
          <Input className={classes.input} id='name' name='name' label='Name' value={user.name} onChange={handleChange} />
          <Input className={classes.input} id='email' name='email' label='Email' value={user.email} onChange={handleChange} />
          <Input className={classes.input} id='password' name='password' label='Password' value={user.password} type='password' onChange={handleChange} />
          <Input className={classes.input} id='birthday' name='birthday' label='Birthday' value={user.birthday} type='date' onChange={handleChange} />
        </div>
        <div className={classes.buttons}>
          <Button submit>Submit</Button>
          <Button to='/'>Back</Button>
        </div>
      </form>
    </div>
  )
}

export { EditUser }