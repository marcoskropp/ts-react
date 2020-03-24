import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  container: {
    margin: '4rem 10rem 0',
    alignContent: 'center',
    justifyContent: 'center'
  },
  header: {
    paddingBottom: '1rem'
  },
  table: {
    minWidth: 600
  },
  space: {
    marginRight: '0.5rem'
  },
  flex: {
    display: 'flex'
  }
})

export { useStyles }