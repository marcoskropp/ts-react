import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  gradientButton: {
    background: 'linear-gradient(45deg, #ED0062 10%, #FF812D 85%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 40,
    padding: '0 35px'
  }
})

export { useStyles }