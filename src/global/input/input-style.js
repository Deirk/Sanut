import { makeStyles } from "@mui/styles";
import { colors } from "../../config/colors";



export const commonInputStyle = makeStyles({
  common__input: {
    fontWeight: 400,
    fontSize: '0.75rem',
    borderRadius: '6px',
    color: colors.black,
    border: '0.1rem solid #E8E8E8',
    padding: '0 0.8rem',
    '&:focus':{
       outline: '0.1rem solid #228650',
    },
  },
});
