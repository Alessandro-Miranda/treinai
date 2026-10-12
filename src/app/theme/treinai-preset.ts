import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const TreinaiPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#F4F3FF',
      100: '#EAE8FF',
      200: '#D7D3FF',
      300: '#B9B2FF',
      400: '#9187FF',
      500: '#5F5AFA',
      600: '#5148E5',
      700: '#4338CA',
      800: '#3730A3',
      900: '#2E287F',
      950: '#1D1952',
    },

    colorScheme: {
      light: {
        primary: {
          color: '{primary.500}',
          contrastColor: '#FFFFFF',
          hoverColor: '{primary.600}',
          activeColor: '{primary.700}',
        },
        surface: {
          0: '#FFFFFF',
          50: '#FAFAFC',
          100: '#F4F5F9',
          200: '#E8EAF0',
          300: '#D6DAE4',
          400: '#A6ADBD',
          500: '#737D91',
          600: '#535D70',
          700: '#394356',
          800: '#252E40',
          900: '#182133',
          950: '#0C1322',
        },
        formField: {
          hoverBorderColor: '{primary.color}',
        },
      },
    },
    focusRing: {
      width: '2px',
      style: 'solid',
      color: '{primary.300}',
      offset: '2px',
    },
  },
});
