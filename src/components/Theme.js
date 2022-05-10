/** 🌹oddFEELING */

export const theme = {
  colors: {
    success: (alpha) => '#4AAB3A' + (alpha || ''),
    info: (alpha) => '#35BACC' + (alpha || ''),
    warn: (alpha) => '#E9BE24' + (alpha || ''),
    error: (alpha) => '#E07454' + (alpha || ''),
    dk_1: (alpha) => '#192928' + (alpha || ''),
    dk_2: (alpha) => '#676767' + (alpha || ''),
    dk_3: (alpha) => '#B2B2B2' + (alpha || ''),
    lt_1: (alpha) => '#FFFFFF' + (alpha || ''),
    lt_2: (alpha) => '#F5F7F9' + (alpha || ''),
  },

  fonts: {
    main: `'Montserrat', sans-serif`,
    pri: `'Lora', serif;`,
    sec: `'Tapestry', cursive`,
    size: {
      xs: 'clamp(.5rem, .6vw, 1rem)',
      sm: 'clamp(.8rem, .8vw, 1.2rem )',
      md: 'clamp(1rem, 1vw, 1.5rem)',
      lg: 'clamp(1.3rem, 1.5vw, 3rem)',
      xl: 'clamp(1.5rem, 2.1vw, 5rem)',
      xxl: 'clamp(1.8rem, 2.5vw, 5rem)',
    },
  },

  shadow: {
    xs: '0 0px .5px  rgba(0,0,0,0.05)',
    sm: '0 4px 6px 3px rgba(0,0,0,0.1)',
    md: '1px 5px 15px 3px rgba(0,0,0,0.1)',
    lg: '3px 12px 20px 8px rgba(0,0,0,0.15)',
    xl: '5px 15px 40px 10px rgba(0,0,0,0.2)',
  },

  radius: {
    sm: '.3vw',
    md: '.6vw',
    lg: '1vh',
  },

  transition: (speed = '1x') => {
    if (speed === '1x') return '300ms all ease-in-out';
    if (speed === '2x') return '600ms all ease-in-out ';
    if (speed === '3x') return '900ms all ease-in-out';
    if (speed === '4x') return '1200ms all ease-in-out';
  },
};
