import { createTheme } from '@mui/material/styles';
import { colors } from './shared-theme';

export const tableTheme = createTheme({
  palette: {
    contrastThreshold: 3,
    tonalOffset: 0.1,
  },
  shadows: [
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
  ],
  typography: {
    allVariants: {
      textTransform: 'none',
      display: 'flex',
      alignItems: 'center',
      fontFamily: 'Condensed',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '17px',
      letterSpacing: 'normal',
      lineHeight: 'normal',
      color : colors.MAIN_GREY,
      width:'fill',


    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          '&.MuiTableContainer-root': {
            backgroundColor: "#FAF8F6",
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: 'separate',
          borderSpacing: '0px 5px !important',
          '.grey': {
            opacity: 0.3,
          },
          '.black': {
            color: colors.BLACK,
          },
          '.colored': {
            fontWeight: 'bold',
            fontFamily: 'Arial-BoldMT',
          },
          '.icon_hover': {
            backgroundColor: colors.WHITE,
            '& .hidden_cell': {
              opacity: '0',
            },
            '&:hover .hidden_cell': {
              opacity: '1',
              color: '#d8d8d8',
            },
          },
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: colors.MAIN_BLUE,
          margin: 15,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: `0 4px 12px 0 ${colors.HOVER_COLOR}`,
          },
          height: 64,
          widhth:'100%',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          border: 'none',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: colors.MAIN_BLUE,
          '&.Mui-checked': {
            color: colors.MAIN_BLUE,
          },
        },
        checked: {},
      },
    },



  },
});
