import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',
  brandTitle: 'Streali UI',
  brandUrl: 'https://ui.streali.com',
  brandImage: 'https://streali.com/logo.svg',
  brandTarget: '_self',

  //
  colorPrimary: '#d0ff1f',
  colorSecondary: '#5129f0',

  // UI
  appBg: '#0b0b0f',
  appContentBg: '#101016',
  appBorderColor: '#1a1a1e',
  appBorderRadius: 4,

  // Text colors
  textColor: '#ffffff',
  textInverseColor: '#000000',

  // Toolbar default and active colors
  barTextColor: '#ffffff',
  barSelectedColor: '#d0ff1f',
  barBg: '#0b0b0f',

  // Form colors
  inputBg: '#0d0d12',
  inputBorder: '#1a1a1e',
  inputTextColor: '#ffffff',
  inputBorderRadius: 4,
});
