import React, { useContext } from 'react';
import { Box, Button, Grid, Typography, styled } from '@mui/material';
import { Theme } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import { DialInputCtx } from '../context/InputContext';

const CustomDialButton = styled(Button)`
border-radius: 100%;
background-color: #e9dfdf;
align-items: center;
justify-content: center;
flex-direction: column;
margin-bottom: 12px;
margin-left: 18px;

&:hover {
  background-color: #80808061;
}
`
const useStyles = makeStyles((theme: Theme) => ({
  gridItem: {
    fontSize: theme.typography.h3.fontSize,
    fontWeight: 'lighter',
    color: "#060606",
    height: "90px",
    width: "90px"
  },
  letterText: {
    position: "absolute",
height: "5px",
    bottom: 22,
  }
}));

interface ButtonItemProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  label: string | number;
  letters: string;
}

const ButtonItem: React.FC<ButtonItemProps> = ({ letters, label, onClick }) => {
  const classes = useStyles();
  return (
    <Grid key={label} item xs={4}>
      <CustomDialButton className={classes.gridItem} onClick={onClick}>
        {label}
        <Typography className={classes.letterText} fontSize={12}>{letters}</Typography>
      </CustomDialButton>
    </Grid>
  );
};

export const DialGrid = () => {
  const { add, removeOne, clear } = useContext(DialInputCtx);

  return (
    <Box height="100%">
      <Grid container justifyContent="space-around">
        <ButtonItem letters={""} label={1} onClick={() => add(1)} />
        <ButtonItem letters={"ABC"} label={2} onClick={() => add(2)} />
        <ButtonItem letters={"DEF"} label={3} onClick={() => add(3)} />
        <ButtonItem letters={"GHI"} label={4} onClick={() => add(4)} />
        <ButtonItem letters={"JKL"} label={5} onClick={() => add(5)} />
        <ButtonItem letters={"MNO"} label={6} onClick={() => add(6)} />
        <ButtonItem letters={"PQRS"} label={7} onClick={() => add(7)} />
        <ButtonItem letters={"TUY"} label={8} onClick={() => add(8)} />
        <ButtonItem letters={"WKYZ"} label={9} onClick={() => add(9)} />
        <ButtonItem letters={""} label="*" onClick={clear} />
        <ButtonItem letters={"+"} label={0} onClick={() => add(0)} />
        <ButtonItem letters={""} label="#" onClick={removeOne} />
        <ButtonItem letters={""} label="-" onClick={() => add('-')} />
      </Grid>
    </Box>
  );
};

export default DialGrid;
