import { makeStyles } from "@mui/styles";
import { colors } from "../../config/colors";

export const modalStyle = makeStyles({
'modal-black-screen': {
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.4)',
        position: "fixed",
        zIndex: 200,
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    'modal-container': {
        width: '30vw',
        height: '15vh',
        borderRadius: '0.5rem',
        background: colors.white,
        padding: '5% 4%',
    },
    'modal-container__title': {
        textAlign: 'center',
        margin: '0',
        color: colors.green__sanut
    },
    'modal-container__text': {
        textAlign: 'center',
        color: colors.gris,
        marginBottom: '2rem',
    },
});