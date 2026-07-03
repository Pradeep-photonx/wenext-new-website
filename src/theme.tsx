import React from 'react';
import { createTheme } from '@mui/material/styles';
import { CheckBoxIconSvg, CheckedIcon, IntermediateIcon } from './components/icons/CheckboxIcons';
import { ChevronDownIcon } from './components/icons/CommonIcons';

const BaseFontStack = [
  "'Geist'",
  'system-ui',
  'sans-serif',
].join(',');

// Secondary-first stack (exported) to use wherever heading/serif is required.
export const SecondaryFontStack = [
  "'Courier Prime'",
  'ui-monospace',
  'monospace',
].join(',');

export const fontWeightStyles = {
  regular: {
    fontWeight: 400,
  },
  medium: {
    fontWeight: 500,
  },
  semiBold: {
    fontWeight: 600,
  },
  bold: {
    fontWeight: 700,
  },
};

// Generate standard size font styles dynamically
const generateFontStyles = () => {
  const styles: any = {};
  const weights = [
    { key: 'b', style: fontWeightStyles.bold },
    { key: 'sb', style: fontWeightStyles.semiBold },
    { key: 'm', style: fontWeightStyles.medium },
    { key: 'r', style: fontWeightStyles.regular },
  ];

  weights.forEach(w => {
    for (let size = 10; size <= 70; size++) {
      let lh = 'normal';
      if (w.key === 'b' && size === 12) lh = '18px';
      else if (w.key === 'b' && size === 14) lh = '20px';
      else if (w.key === 'b' && size === 16) lh = '20px';
      else if (w.key === 'b' && size === 18) lh = '22px';
      else if (w.key === 'b' && size === 20) lh = '24px';
      else if (w.key === 'b' && size === 24) lh = '28px';
      else if (w.key === 'b' && size === 30) lh = '30px';
      else if (w.key === 'b' && size === 36) lh = '60px';
      else if (w.key === 'sb' && size === 12) lh = '16px';
      else if (w.key === 'sb' && size === 14) lh = '24px';
      else if (w.key === 'sb' && size === 16) lh = '21px';
      else if (w.key === 'sb' && size === 18) lh = '24px';
      else if (w.key === 'sb' && size === 20) lh = '26px';
      else if (w.key === 'sb' && size === 24) lh = '24px';
      else if (w.key === 'sb' && size === 30) lh = '40px';
      else if (w.key === 'm' && size === 10) lh = '18px';
      else if (w.key === 'm' && size === 12) lh = '16px';
      else if (w.key === 'm' && size === 13) lh = '17px';
      else if (w.key === 'm' && size === 14) lh = '16px';
      else if (w.key === 'm' && size === 16) lh = '21px';
      else if (w.key === 'm' && size === 18) lh = '24px';
      else if (w.key === 'm' && size === 20) lh = '26px';
      else if (w.key === 'm' && size === 24) lh = '30px';
      else if (w.key === 'r' && size === 10) lh = '14px';
      else if (w.key === 'r' && size === 12) lh = '16px';
      else if (w.key === 'r' && size === 14) lh = '16px';
      else if (w.key === 'r' && size === 16) lh = '21px';
      else if (w.key === 'r' && size === 18) lh = '24px';
      else if (w.key === 'r' && size === 24) lh = '30px';

      styles[`${w.key}${size}`] = {
        ...w.style,
        fontSize: `${size}px`,
        lineHeight: lh,
      };
    }
  });
  return styles;
};

export const fontStyles = generateFontStyles();

// Common styles for reusable components
export const commonStyles = {
  sectionTitle: {
    ...fontWeightStyles.medium,
    fontSize: '20px',
    lineHeight: '100%',
    fontFamily: BaseFontStack,
  },
  brandName: {
    ...fontWeightStyles.regular,
    fontSize: '12px',
    lineHeight: '100%',
    fontFamily: BaseFontStack,
  },
  priceBreakdown: {
    ...fontWeightStyles.medium,
    fontSize: '16px',
    lineHeight: '100%',
    fontFamily: BaseFontStack,
  },
};

export const colors = {
  white: '#ffffff',
  black: '#000000',
  boxShadow: 'rgba(0, 0, 0, 0.08)',
  appPrimary: '#06b349',      // WeNext Green primary
  appsecondary: '#0c221f',    // WeNext charcoal secondary
  error: '#FF676B',
  errorLight: 'rgba(236, 70, 40, 0.2)',
  blue: '#155DFC',
  green: '#06b349',
  greenLight: '#e5f6e7',
  yellow: '#FFC127',
  grey1: '#0c221f',
  grey2: '#60584c',
  grey3: '#f8f5ec',
  grey4: '#293854',
  grey5: '#0c221f',
  profileActive: '#F7F7F7',
  statusActiveBg: '#e5f6e7',
  statusActiveText: '#06b349',
  statusInactiveBg: '#E7E7E7',
  statusInactiveText: '#9D9D9D',
};

const baseTheme = createTheme({
  spacing: (num: number) => num * 5,
  palette: {
    text: {
      primary: colors.grey5,
      secondary: colors.grey2,
    },
    primary: {
      main: colors.appPrimary,
    },
    secondary: {
      main: colors.appsecondary,
    },
    warning: {
      main: colors.yellow,
    },
    error: {
      main: colors.error,
      light: colors.errorLight,
    },
    success: {
      main: colors.green,
      light: colors.greenLight,
    },
    action: {
      active: colors.blue,
    },
    common: {
      white: colors.white,
      black: colors.black,
    },
    grey: {
      100: colors.grey1,
      200: colors.grey5,
      300: colors.grey2,
      500: colors.grey3,
      900: colors.grey4,
    },
    profileActive: colors.profileActive,
  },
  typography: {
    ...fontStyles,
    fontFamily: BaseFontStack,
    h1: {
      ...fontStyles.b24,
    },
    h2: {
      ...fontStyles.b20,
    },
    h3: {
      ...fontStyles.b16,
    },
    h4: {
      ...fontStyles.m18,
    },
    h5: {
      ...fontStyles.b16,
    },
    h6: {
      ...fontStyles.b14,
    },
    subtitle1: {
      ...fontStyles.m14,
    },
    subtitle2: {
      ...fontStyles.sb14,
    },
    body1: {
      ...fontStyles.r14,
      color: '#808CA0',
    },
    body2: {
      ...fontStyles.sb18,
    },
    caption: {
      fontSize: '10px',
    },
  },
});

const theme = createTheme(baseTheme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@keyframes logos-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        '@keyframes fade-up': {
          from: { opacity: 0, transform: 'translateY(12px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        '@keyframes scale-in': {
          from: { opacity: 0, transform: 'scale(0.96)' },
          to: { opacity: 1, transform: 'scale(1)' },
        },
        '@keyframes bar-fill': {
          from: { width: 0 },
        },
        '@keyframes soft-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(6,179,73,0.35)' },
          '50%': { boxShadow: '0 0 0 6px rgba(6,179,73,0)' },
        },
        '@keyframes msg-in': {
          from: { opacity: 0, transform: 'translateY(10px) scale(0.96)' },
          to: { opacity: 1, transform: 'translateY(0) scale(1)' },
        },
        '@keyframes typing-bounce': {
          '0%, 60%, 100%': { transform: 'translateY(0)', opacity: 0.35 },
          '30%': { transform: 'translateY(-4px)', opacity: 1 },
        },
        '[class*="Geist"]': {
          fontFamily: "'Geist', system-ui, sans-serif !important",
        },
        '[class*="Courier_Prime"]': {
          fontFamily: "'Courier Prime', ui-monospace, monospace !important",
        },
        'html, body, #root': {
          margin: 0,
          padding: 0,
          width: '100%',
          minHeight: '100%',
          backgroundColor: '#f8f5ec',
        },
        body: {
          ...fontStyles.r14,
          color: colors.black,
          WebkitTextSizeAdjust: '100%',
          MozTextSizeAdjust: '100%',
          textSizeAdjust: 'none',
          fontFamily: BaseFontStack,
        },
        html: {
          scrollBehavior: 'smooth',
        },
        '*': {
          fontFamily: BaseFontStack,
        },
        a: {
          textDecoration: 'none',
          color: 'inherit',
        },
        'input[type=number]::-webkit-inner-spin-button, &input[type=number]::-webkit-outer-spin-button': {
          WebkitAppearance: 'none',
          margin: 0,
        },
        'input[type=number]': {
          MozAppearance: 'textfield',
        },
        '.step-panel': {
          animation: 'scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
        },
        '.step-stagger > *': {
          animation: 'fade-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
        },
        '.step-stagger > *:nth-child(1)': { animationDelay: '0.05s' },
        '.step-stagger > *:nth-child(2)': { animationDelay: '0.13s' },
        '.step-stagger > *:nth-child(3)': { animationDelay: '0.21s' },
        '.step-stagger > *:nth-child(4)': { animationDelay: '0.29s' },
        '.step-stagger > *:nth-child(5)': { animationDelay: '0.37s' },
        '.step-stagger > *:nth-child(6)': { animationDelay: '0.45s' },
        '.step-bar': {
          animation: 'bar-fill 1.2s cubic-bezier(0.65, 0, 0.35, 1) 0.2s both',
        },
        '.step-live-dot': {
          animation: 'soft-pulse 2.2s ease-in-out infinite',
        },
        '.msg-in': {
          animation: 'msg-in 0.45s cubic-bezier(0.16, 1, 0.3, 1) both',
        },
        '.typing-dot': {
          animation: 'typing-bounce 1.2s ease-in-out infinite',
        },
        '.typing-dot:nth-child(2)': { animationDelay: '0.15s' },
        '.typing-dot:nth-child(3)': { animationDelay: '0.3s' },
        // ── Speed & Scale — pro-level mockup animations ──
        '@keyframes step-shimmer': {
          '0%': { transform: 'translateX(-130%)' },
          '100%': { transform: 'translateX(230%)' },
        },
        '@keyframes step-ring-draw': {
          from: { strokeDashoffset: 94.25 },
          to: { strokeDashoffset: 5.65 },
        },
        '@keyframes step-glow': {
          '0%, 100%': { boxShadow: '0 8px 20px -8px rgba(6,179,73,0.5)', transform: 'translateY(0)' },
          '50%': { boxShadow: '0 14px 30px -6px rgba(6,179,73,0.85)', transform: 'translateY(-1px)' },
        },
        '@keyframes step-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        '@keyframes step-scan': {
          '0%': { transform: 'translateY(-40%)', opacity: 0 },
          '12%': { opacity: 1 },
          '88%': { opacity: 1 },
          '100%': { transform: 'translateY(1600%)', opacity: 0 },
        },
        '@keyframes step-pop': {
          '0%': { transform: 'scale(0)', opacity: 0 },
          '60%': { transform: 'scale(1.28)' },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        '@keyframes step-count': {
          '0%': { opacity: 0, transform: 'translateY(8px) scale(0.9)', filter: 'blur(4px)' },
          '100%': { opacity: 1, transform: 'translateY(0) scale(1)', filter: 'blur(0)' },
        },
        '@keyframes step-signal': {
          '0%, 100%': { transform: 'scaleY(0.35)' },
          '50%': { transform: 'scaleY(1)' },
        },
        '@keyframes step-orbit': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        '.step-shimmer': { position: 'relative', overflow: 'hidden' },
        '.step-shimmer::after': {
          content: '""', position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'linear-gradient(105deg, transparent 32%, rgba(255,255,255,0.6) 50%, transparent 68%)',
          transform: 'translateX(-130%)',
          animation: 'step-shimmer 2.8s ease-in-out infinite',
        },
        '.step-shimmer:nth-child(2)::after': { animationDelay: '0.4s' },
        '.step-shimmer:nth-child(3)::after': { animationDelay: '0.8s' },
        '.step-shimmer:nth-child(4)::after': { animationDelay: '1.2s' },
        '.step-ring-anim': { animation: 'step-ring-draw 1.5s cubic-bezier(0.65,0,0.35,1) 0.35s both' },
        '.step-glow': { animation: 'step-glow 2.4s ease-in-out infinite' },
        '.step-float': { animation: 'step-float 3.2s ease-in-out infinite' },
        '.step-scan': { animation: 'step-scan 3.4s ease-in-out infinite' },
        '.step-pop': { animation: 'step-pop 0.55s cubic-bezier(0.34,1.56,0.64,1) 0.5s both' },
        '.step-count': { animation: 'step-count 0.6s cubic-bezier(0.16,1,0.3,1) both' },
        '.step-count:nth-child(1)': { animationDelay: '0.15s' },
        '.step-count:nth-child(2)': { animationDelay: '0.3s' },
        '.step-count:nth-child(3)': { animationDelay: '0.45s' },
        '.step-signal > span': { transformOrigin: 'bottom', animation: 'step-signal 1s ease-in-out infinite' },
        '.step-signal > span:nth-child(2)': { animationDelay: '0.16s' },
        '.step-signal > span:nth-child(3)': { animationDelay: '0.32s' },
        '.step-orbit': { animation: 'step-orbit 12s linear infinite', transformOrigin: 'center' },
        '@keyframes nav-enter': { from: { transform: 'translateY(-100%)', opacity: 0 } },
        '.nav-enter': { animation: 'nav-enter 0.5s cubic-bezier(0.16,1,0.3,1)' },
        // ── Security & Trust — pro-level console animations ──
        '@keyframes sec-verify': {
          '0%, 100%': { borderColor: '#e0dac6', boxShadow: '0 0 0 0 rgba(6,179,73,0)', transform: 'translateY(0)' },
          '40%': { borderColor: 'rgba(6,179,73,0.5)', boxShadow: '0 10px 24px -12px rgba(6,179,73,0.6)', transform: 'translateY(-2px)' },
        },
        '@keyframes sec-sheen': {
          '0%': { transform: 'translateX(-140%) skewX(-18deg)', opacity: 0 },
          '18%': { opacity: 1 },
          '82%': { opacity: 1 },
          '100%': { transform: 'translateX(360%) skewX(-18deg)', opacity: 0 },
        },
        '@keyframes sec-ripple': {
          '0%': { transform: 'scale(0.75)', opacity: 0.7 },
          '100%': { transform: 'scale(1.9)', opacity: 0 },
        },
        '@keyframes sec-stream': {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '16px 0' },
        },
        '@keyframes sec-check-pop': {
          '0%, 72%, 100%': { transform: 'scale(1)' },
          '80%': { transform: 'scale(1.35)' },
          '88%': { transform: 'scale(0.92)' },
        },
        '.sec-verify': { animation: 'sec-verify 4s ease-in-out infinite' },
        '.sec-verify:nth-child(1)': { animationDelay: '0s' },
        '.sec-verify:nth-child(2)': { animationDelay: '1s' },
        '.sec-verify:nth-child(3)': { animationDelay: '2s' },
        '.sec-verify:nth-child(4)': { animationDelay: '3s' },
        '.sec-sheen': { position: 'relative', overflow: 'hidden' },
        '.sec-sheen::after': {
          content: '""', position: 'absolute', top: 0, bottom: 0, left: 0, width: '45%', pointerEvents: 'none',
          background: 'linear-gradient(90deg, transparent, rgba(52,211,110,0.28), transparent)',
          transform: 'translateX(-140%) skewX(-18deg)',
          animation: 'sec-sheen 3.6s ease-in-out infinite',
        },
        '.sec-ripple': { animation: 'sec-ripple 2.4s ease-out infinite' },
        '.sec-stream': { animation: 'sec-stream 0.7s linear infinite' },
        '.sec-check-pop': { animation: 'sec-check-pop 4s ease-in-out infinite', transformOrigin: 'center' },
        '.sec-check-pop:nth-child(1)': { animationDelay: '0s' },
        '.sec-check-pop:nth-child(2)': { animationDelay: '1s' },
        '.sec-check-pop:nth-child(3)': { animationDelay: '2s' },
        '.sec-check-pop:nth-child(4)': { animationDelay: '3s' },
        '.spotlight-card': {
          cursor: 'pointer',
        },
        '.spotlight-card .spot-row': {
          transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s ease, filter 0.45s ease',
          position: 'relative',
        },

      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          '& .MuiTouchRipple-ripple': {
            color: `${baseTheme.palette.secondary.main} !important`,
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontWeight: '500',
          textTransform: 'initial',
          '&.Mui-selected': {
            color: 'secondary.main',
            bgColor: 'primary.main',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'initial',
          padding: '12px 24px',
          height: 'unset !important',
          minWidth: 'auto',
          ...fontStyles.r14,
          borderRadius: '8px',           // WeNext button rounding
          fontWeight: '500',
          fontSize: '15px',
          letterSpacing: '0.01em',
          boxShadow: 'none',
          '& .MuiTouchRipple-ripple': {
            color: `rgba(255,255,255,0.3) !important`,
          },
          transition: 'all 0.25s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
          },
          '&:active': {
            transform: 'translateY(0px)',
            transition: 'all 0.1s ease',
          }
        },
        containedPrimary: {
          backgroundColor: colors.appPrimary,
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#05a043',
          },
        },
        outlinedPrimary: {
          borderColor: colors.appsecondary,
          color: colors.appsecondary,
          height: '48px',
          borderRadius: '8px',
          border: `1.5px solid ${colors.appsecondary}`,
          padding: '12px 24px',
          textTransform: 'none',
          fontSize: '15px',
          fontWeight: 500,
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: colors.appsecondary,
            color: '#FFFFFF',
            border: `1.5px solid ${colors.appsecondary}`,
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.15)',
          },
        },
        outlinedSecondary: {
          border: `1.5px solid ${colors.appsecondary}`,
          color: colors.appsecondary,
          borderRadius: '8px',
          '&:hover': {
            backgroundColor: colors.appsecondary,
            color: '#FFFFFF',
          },
        },
        text: {
          padding: '8px 16px',
          minWidth: 'auto',
          color: colors.appsecondary,
          '&:hover': {
            transform: 'none',
            boxShadow: 'none',
            backgroundColor: 'rgba(0,0,0,0.04)',
          },
          '&:active': {
            transform: 'none',
          },
        }
      }
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          boxShadow: 'none !important',
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '15px 0 15px 20px',
          color: "#08090A !important",
          fontWeight: 500,
          whiteSpace: 'nowrap',
          '&.Mui-selected': {
            backgroundColor: 'transparent',
          },
          borderBottom: "1px solid #f6f6f6",
        },
        head: {
          background: '#f6f6f6',
          textTransform: 'capitalize !important',
          color: baseTheme.palette.grey[900],
          textAlign: 'left',
          fontWeight: 500,
          "&:first-child": {
            borderTopLeftRadius: '12px !important',
          },
          "&:last-child": {
            borderTopRightRadius: '12px !important',
          },
        },
        body: {
          ...fontStyles.m14,
          color: baseTheme.palette.grey[300],
          textTransform: 'capitalize !important',
          textAlign: 'left',
        }
      }
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          ...fontStyles.m14,
          color: baseTheme.palette.grey[900],
          borderColor: baseTheme.palette.grey[900],
          '&.Mui-selected': {
            background: baseTheme.palette.primary.main,
            color: baseTheme.palette.common.white,
            '&:hover': {
              background: baseTheme.palette.primary.main,
              color: baseTheme.palette.common.white,
            }
          }
        },
      }
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          '& .MuiTablePagination-spacer': {
            display: 'none',
          },
          '& .MuiToolbar-root': {
            padding: '0',
          },
          '& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows': {
            ...fontStyles.m14,
            color: baseTheme.palette.grey[900],
            margin: 0,
          },
          '& .MuiTablePagination-input': {
            margin: '0 10px',
            border: `1px solid ${baseTheme.palette.grey[900]}`,
            borderRadius: "5px",
            '& > .MuiSelect-select': {
              padding: '5px 37px 5px 15px !important',
              ...fontStyles.m14,
              lineHeight: '21px',
              color: baseTheme.palette.grey[900],
            },
            '& .MuiSvgIcon-root': {
              marginRight: '8px',
              color: baseTheme.palette.grey[900],
            }
          }
        },
      }
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          marginBottom: '20px',
          '&:before': {
            display: 'none',
            backgroundColor: baseTheme.palette.secondary.main,
          },
          '&.Mui-expanded': {
            margin: 0,
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          borderRadius: '5px',
          backgroundColor: baseTheme.palette.secondary.main,
          '&.Mui-expanded': {
            minHeight: '48px',
          },
        },
        content: {
          margin: 0,
          '&.Mui-expanded': {
            margin: '12px 0',
          },
        },
        expandIconWrapper: {
          color: '#000',
          '&.Mui-expanded': {
            transform: 'rotate(180deg)',
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '16px',
          backgroundColor: baseTheme.palette.common.white,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: '#fff',
          height: '42px',
          borderRadius: '12px',
          border: 'none',
          '& fieldset': {
            borderColor: '#D1D5DC',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: baseTheme.palette.primary.main,
            borderWidth: '1px',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: baseTheme.palette.primary.main,
            borderWidth: '1px',
          },
          '&.Mui-disabled': {
            backgroundColor: '#F7F7F7',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#E5DFD1',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#E5DFD1',
            },
          },
          '&:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 100px #fff inset',
            WebkitTextFillColor: baseTheme.palette.text.primary,
            borderRadius: '8px',
          },
          '& input:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 100px #fff inset',
            WebkitTextFillColor: baseTheme.palette.text.primary,
            borderRadius: '8px',
          },
        },
        notchedOutline: {
          borderColor: baseTheme.palette.grey[500],
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: baseTheme.palette.text.secondary,
          fontWeight: '500',
          paddingTop: '4px',
          '&.Mui-focused': {
            color: baseTheme.palette.primary.main,
          },
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          width: '20px',
          height: '20px',
          color: baseTheme.palette.grey[900],
          '&.Mui-active': {
            color: baseTheme.palette.action.active
          },
          '&.Mui-completed': {
            color: baseTheme.palette.action.active
          }
        },
        text: {
          opacity: 0,
        },
      }
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          color: baseTheme.palette.grey[900],
          marginTop: '10px !important',
          ...baseTheme.typography.r14,
          '&.Mui-active': {
            ...baseTheme.typography.r14,
            color: baseTheme.palette.action.active,
          }
        },
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        root: {
          top: '10px',
        }
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: baseTheme.palette.grey[900],
          }
        },
        asterisk: {
          color: baseTheme.palette.error.main,
        },
      }
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: 0,
          width: '14px',
          height: '14px',
          '& .MuiSvgIcon-root': {
            fontSize: '14px',
          }
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        icon: <CheckBoxIconSvg />,
        checkedIcon: <CheckedIcon />,
        indeterminateIcon: <IntermediateIcon />,
      },
      styleOverrides: {
        root: {
          width: '16px',
          height: '16px',
          padding: 0,
          background: '#fff',
        }
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: baseTheme.palette.grey[900],
          color: baseTheme.palette.common.white,
        },
        arrow: {
          color: baseTheme.palette.grey[900],
        }
      },
    },
    MuiTypography: {
      defaultProps: {
        variant: 'inherit',
      },
      styleOverrides: {
        root: {
          fontFamily: BaseFontStack,
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          marginLeft: '0px',
          marginTop: '14px',
          borderRadius: '8px',
          boxShadow: ' 0px 4px 30px 0px #0000001A',
          padding: '10px',
          backgroundColor: baseTheme.palette.common.white,
        },
        list: {
          padding: 0,
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        IconComponent: ChevronDownIcon,
      },
      styleOverrides: {
        icon: {
          color: baseTheme.palette.text.secondary,
          right: 10,
        },
        iconOutlined: {
          color: baseTheme.palette.text.secondary,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          margin: '4px 0',
          color: baseTheme.palette.text.secondary,
          '&:hover': {
            backgroundColor: '#e5f6e7',
          },
          '&.Mui-selected': {
            backgroundColor: '#e5f6e7',
            color: baseTheme.palette.primary.main,
          },
          '&.Mui-selected:hover': {
            backgroundColor: '#e5f6e7',
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          zIndex: '1',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            borderColor: colors.appPrimary,
          },
          '&.Mui-disabled': {
            backgroundColor: '#F7F7F7',
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#E5DFD1',
            },
          },
        },
        input: {
          color: '#333',
          '&::placeholder': {
            color: '#808CA0',
            opacity: 1,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          background: 'transparent',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 360,
      s: 400,
      sm: 600,
      m: 768,
      md: 960,
      l: 1100,
      lg: 1248,
      xl: 1440,
      xxl: 1700,
    },
  },
});

export default theme;
