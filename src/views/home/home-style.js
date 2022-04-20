import { makeStyles } from "@mui/styles";
import { colors } from "../../config/colors";

export const homeStyle = makeStyles({
  home: {
      width: '80vw',
      padding: '0 10%',
      paddingTop: '9vh',
      background: colors.white,
  },
  home__title: {
      color: '#464E5F',
      width: '100%',
      fontSize: '1.375rem',
      marginTop: '5vh',
      paddingBottom: '3vh',
      borderBottom: '0.1rem solid #EBEBEB',
  },
  'search-input': {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
},
  'search-input__container': {
    width: '80%',
    height: '6vh',
    paddingLeft: '1rem',
    background: 'rgba(99, 117, 128, 0.05)',
    borderRadius: '6.25rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
},
'search-input__input-container': {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
},
'input-container__icon': {
    width: '5%',
},
'input-container__input': {
    width: '95%',
    height: '4vh',
    background: 'none',
    border: 'none',
    padding: '0 0.8rem',
    fontSize: '0.75rem',
    color: colors.black,
    '&:focus':{
        outline: 'none',
     },
},
'search-input__button': {
    height: '6vh',
    width: '6vh',
    borderRadius: '6.25rem',
    background: colors.green__sanut,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "center",
    '&:hover':{
        opacity: 0.8,
      }
},
'add-button': {
    height: '6vh',
    width: '10vw',
    padding: '0 1rem',
    borderRadius: '6.25rem',
    background: colors.green__sanut,
    color: colors.white,
    fontWeight: 600,
    fontSize: '0.875rem',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    '&:hover':{
        opacity: 0.8,
      }
},
    'table-header': {
        width: '100%',
        display: 'flex',
        marginTop: '4vh',
        flexDirection: 'row',
        fontWeight: 700,
        color: '#464E5F',
        fontSize: '0.875rem',
        borderBottom: '0.1rem solid #EBEBEB',
        paddingBottom: '2vh',
    },
    'table-contain': {
        width: '100%',
    },

});