const variantPrimary = () => {
    const disabled = {
        bg: 'grey.300',
        color: 'grey.500',
    };

    const loading = {
        bg: 'primary.600',
        color: 'white',
    };

    return {
        bg: 'primary.500',
        color: 'white',
        _hover: {
        bg: 'primary.600',
        _disabled: {
            ...disabled,
            _loading: loading,
        },
        },
        _active: {
        bg: 'primary.700',
        },
        _disabled: {
        ...disabled,
        _loading: loading,
        },
    };
}
  
const variants = {
    primary: variantPrimary,
    // add more variants as needed
};

export default variants;