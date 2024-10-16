import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  backgroundModal: {
    background: 'black',
    opacity: '0.6',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 5,
  },
  absolute: {
    position: 'absolute',
    right: theme.spacing(3),
    bottom: theme.spacing(0),
  },
  fabButton: {
    backgroundColor: 'transparent',
    boxShadow: 'none', // Remove sombra
    color: theme.palette.primary.main,
    fontSize: '24px',
    '&:hover': {
      backgroundColor: 'transparent',
      opacity: 0.9,
    },
  },
}));

export default useStyles;
