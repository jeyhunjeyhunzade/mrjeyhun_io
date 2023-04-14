const baseStyle = {
    borderRadius: 'lg',
    borderColor: 'transparent',
    boxShadow: 'none',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    _disabled: {
      cursor: 'not-allowed',
    },
    _hover: {
      _disabled: {
        bg: 'initial',
      },
    },
    _focus: {
      outline: 0,
    },
};

export default baseStyle;