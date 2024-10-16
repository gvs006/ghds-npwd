import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  modalRoot: {
    zIndex: 20,
    position: 'absolute',
    height: '115%',
    width: '100%',
    background: 'white',
    top: '-10%',
    paddingTop: '18%',
  },
  input: {
    marginBottom: 20,
  },
  inputPropsTitle: {
    fontSize: 28,
  },
  inputPropsContent: {
    fontSize: 20,
    lineHeight: 1.2,
  },
  absolute: {
    position: 'absolute',
    left: theme.spacing(4),
    bottom: theme.spacing(6.5),
  }
}));

export default useStyles;
