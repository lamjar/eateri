const styles = {
    section: {
        // bg: 'secondary.light',
        mt: t => [`-${t.space.header}`, null, 0],
        pt: 7,
        // pb: [4, null, 0],
        bg: ['background', null, 'secondary.light'],
        borderTopLeftRadius: [40, null, 'none'],
        borderTopRightRadius: [40, null, 'none'],
        '.wave-decoration': {
            display: ['none', null, 'block'],
        },
        '.scrollable': {
            flexWrap: ['nowrap', null, 'wrap'],
            justifyContent: [null, null, 'center'],
            textAlign: 'center',
            mt: '-1.5em',
            mx: ['-1.5em', null, 'auto'],
            pb: [4, null, 0],
            minWidth: 0,
            maxWidth: 'container',
        },
    },
    stackContext: {
        position: 'relative',
        zIndex: 1,
    },
    header: {
        display: [null, null, 'none'],
        mb: 0,
        mx: [null, null, 3],
    },
    topOffer: {
        position: 'relative',
        minHeight: '10em',
        background: t => [
            t.colors.heroStripe3,
            null,
            null,
            null,
            `linear-gradient(to right, ${t.colors.heroStripe3} 50%, ${t.colors.heroStripe2} 50%)`,
        ],
        color: 'heroText',
        borderRadius: 'default',
        borderBottomLeftRadius: [null, null, '20'],
        borderBottomRightRadius: [null, null, '20'],
        padding: 6,
        mt: [6, null, 0],
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        '::before,::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            borderRadius: 'inherit',
            background: 'inherit',
            zIndex: '-1',
        },
        '&:before': {
            width: '85%',
            height: '113%',
            opacity: '0.15',
        },
        '&:after': {
            width: '92%',
            height: '107%',
            opacity: '0.35',
        },
        '& > span': {
            position: 'absolute',
            size: '1em',
            color: ['primary.base', null, 'accent.base'],
        },
        '& > span:first-of-type': {
            top: '1em',
            left: '1em',
            borderTop: '1.5px solid',
            borderLeft: '1.5px solid',
        },
        '& > span:last-of-type': {
            bottom: '1em',
            right: '1em',
            borderRight: '1.5px solid',
            borderBottom: '1.5px solid',
        },
    },
    offersCard: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: '0 0 auto',
        maxWidth: '9em',
        mt: 4,
        mx: 2,
        padding: 4,
        bg: 'primary.base',
        border: t => `1px solid ${t.colors.primary.hover}`,
        borderRadius: ['default', null, 'none'],
        cursor: 'pointer',
        transition: 'background-color 0.4s ease-out, transform 0.4s ease-out',
        backfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d',
        ':hover': {
            bg: 'primary.hover',
            transform: 'scale(1.05)',
        },
        'p span': {
            display: 'block',
        },
    },
}
export default styles
