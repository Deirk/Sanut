import { makeStyles } from "@mui/styles";
import { colors } from "../../config/colors";



export const commonButtonStyle = makeStyles({
  common__button: {
    background: colors.green__sanut,
    fontWeight: 600,
    color: colors.white,
    fontSize: '0.875rem',
    borderRadius: '6px',
    border: 'none',
    '&:hover':{
      opacity: 0.8,
    }
  },
});
