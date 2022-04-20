import { makeStyles } from "@mui/styles";
import { colors } from "../../../config/colors";

export const patientRowStyle = makeStyles({
'table-header': {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: '0.875rem',
        color: '#B5B5C3',
        borderBottom: '0.1rem solid #EBEBEB',
        padding: '2vh 0',
    },
    common__button: {
        background: colors.green__mint,
        fontWeight: 600,
        color: colors.green__sanut,
        fontSize: '0.875rem',
        borderRadius: '6px',
        border: 'none',
        '&:hover':{
          opacity: 0.8,
        }
      },
});