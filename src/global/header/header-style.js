import { makeStyles } from "@mui/styles";
import { colors } from "../../config/colors";

export const headerStyle = makeStyles({
  header: {
      width: '100vw',
      height: '8vh',
      boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.08)',
      display: 'flex', 
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      position: 'fixed',
      zIndex: 100,
  },
  'title-container__img': {
    width: 'auto',
    height: '50%',

  },
  navigation__container:{
    width: '55%',
    display: 'flex', 
    flexDirection: 'row',
    justifyContent: 'space-around',

  },
  navigation__item:{
    width: '25%',
    height: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
},
'navigation__item--border':{
    borderRight: '0.1rem solid #228650',
},
'header-container__a': {
    width: '80%',
    height: '100%',
    textDecoration: 'none',
    padding: '3% 0',
    margin: 0,
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.125rem',
    color: colors.gris,
    borderRadius: '0.75rem',
    '&:hover': {
        background: 'rgba(234, 246, 230, 0.8)',
        opacity: '0.6',
    }
  },
  'header-container__a--active': {
      background: colors.green__mint,
      color: colors.green__sanut,
  },
});