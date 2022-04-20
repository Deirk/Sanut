import { makeStyles } from "@mui/styles";
import { colors } from "../../config/colors";

export const welcomeStyle = makeStyles({
  welcome: {
      width: '100vw',
      height: '100vh',
      background: 'url(/content/img/welcome-bg/welcome-bg.png)',
      backgroundSize: 'height',
      backgroundRepeat: 'no-repeat',
  },
  welcome__container: {
    width: '26vw',
    height: '90vh',
    boxShadow: '2px 0px 25px rgba(0, 0, 0, 0.11)',
    '@media screen and (max-height:720px)': {
      height: '90vh',
    },
    '@media screen and (max-height:768px)': {
      height: '84vh',
    },
    '@media screen and (max-height:1080px)': {
      height: '86vh',
    },
  },
  'welcome__title-container': {
    padding: '15% 10%',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'flex-start',
  },
  'title-container__title': {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: colors.gris,
    textAlign: 'left',
    margin: '0',
  },
  'title-container__img': {
    width: '50%',
  },
  'welcome__loyalty-container': {
    padding: '0 10%',
  },
  'loyalty-container__p': {
    textAlign: 'left',
    fontSize: '0.75rem',
    margin: '0',
    fontWeight: 500,
    color: colors.gris,
  },
  'loyalty-container__h4': {
    textAlign: 'left',
    fontSize: '1.25rem',
    margin: '0',
    fontWeight: 700,
    color: colors.black,
  },
  'welcome__input-container': {
    padding: '3% 10%',
    display: 'flex',
    flexDirection: 'column',
  },
  'input-container__label': {
    textAlign: 'left',
    fontSize: '0.75rem',
    margin: '0',
    fontWeight: 500,
    color: colors.gris,
    marginBottom: '0.5rem',
  },
  'input-radio__container': {
    width: '40%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: '0.625rem',
  },
  'password-reminder__container': {
    padding: '0% 10%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'space-between',
    marginBottom: '5%',
  },
  'password-reminder__a': {
    fontSize: '0.625rem',
    width: 'auto',
  },
  'btn__container': {
    width: '100%',
    padding: '0% 10%',
  },
});
