import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  container: {
    margin: '4rem 30rem 0',
    alignContent: 'center',
    justifyContent: 'center'
  },
  formContent: {
    marginBottom: '1rem',
    display: 'flex', 
    flexDirection: 'column'
  },
  input: {
    marginBottom: '1rem'
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between'
  }
})

export { useStyles }