import { extendTheme, theme as defaultTheme } from '@chakra-ui/react';

import breakpoints from './breakpoints';
import components from './components';
import foundations from './foundations';
import typography from './typography';

const theme = extendTheme(
  {
    components,
    ...typography,
    ...foundations,
  },
  {
    config: defaultTheme.config,
    direction: defaultTheme.direction,
    transition: defaultTheme.transition,
    breakpoints,
    zIndices: defaultTheme.zIndices,
    components: {},
    styles: {},
    borders: {},
    colors: {},
    radii: {},
    shadows: {},
    sizes: {},
    space: {},
    fonts: {},
    fontSizes: {},
    fontWeights: {},
    letterSpacings: {},
    lineHeights: {},
  }
);
export default theme;