import React, { FunctionComponent, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Fab } from '@material-ui/core'
import { Edit, Delete } from '@material-ui/icons'

import { IUser, IUsers } from './Interfaces'
import { useStyles } from './Styles'

import { Button } from '../../components/Button/Button'

const Dashboard: FunctionComponent = () => {
  const classes = useStyles({})
  const [users, setUsers] = useState<IUsers>([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = (): void => {
    const users = JSON.parse(localStorage.getItem('users'))

    users && setUsers(users)
  }

  const deleteUser = (userId: string): void => {
    const removedUser = users.filter(({ id }) => id !== userId)

    const shouldDelete = window.confirm(`Are you sure you want to remove`)
    
    if(!shouldDelete) return

    localStorage.setItem('users', JSON.stringify(removedUser))

    getUsers()
  }

  const dateFormat = (date: string): string => {
    return new Date(date).toLocaleDateString('pt-BR')
  }

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>Dashboard</h1>
        <Button color='default' to='/users/create'>Create</Button>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Birthday</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              users.map(({ id, name, birthday, email }: IUser) => (
                <TableRow key={id}>
                  <TableCell component="th" scope="row">{name}</TableCell>
                  <TableCell align="right">{dateFormat(birthday)}</TableCell>
                  <TableCell align="right">{email}</TableCell>
                  <TableCell align="right">
                    <Link className={classes.space} to={{ pathname: `/users/${id}/edit` }}>
                      <Fab color="primary" aria-label="add" size="medium">
                        <Edit />
                      </Fab>
                    </Link>
                    <Fab color="secondary" aria-label="add" size="medium" onClick={() => deleteUser(id)}>
                      <Delete />
                    </Fab>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export { Dashboard }