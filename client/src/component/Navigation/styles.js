import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 250;
const toolbarHeight = 70;
const iconLeftPadding = 11;
const iconBottomPadding = 1;

const useStyles = makeStyles((theme) => ({
    navDrawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        marginTop: toolbarHeight,
    },
    root: {
        flexGrow: 1,

    },
    paper: {
        width: 450
    },
    appBar: {
        backgroundColor: 'rgb(255,166,0)'
    },
    toolbar: { minHeight: 70 },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    icon: {
        paddingLeft: iconLeftPadding,
    },
    sushi_type_icon: {
        paddingLeft: iconLeftPadding,
        paddingBottom: iconBottomPadding
    },
    cartButton: {
        marginLeft: 'auto',
    },
    checkOutTitle: {
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25
    },
    bottomPush: {
        position: "fixed",
        bottom: 0,
        textAlign: "center",
        paddingBottom: 10,
        width: '100%'
    }
}));

export default useStyles
