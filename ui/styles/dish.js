import { lighten, alpha } from '@theme-ui/color'

const styles = {
    container: {
        bg: t => [lighten('primary.base', 0.3)(t), null, 'inherit'],
    },
    fixedToTop: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 'header',
    },
    mobileBackLinkWrap: {
        display: ['flex', null, 'none'],
        justifyContent: 'center',
        alignItems: 'center',
        height: 'header',
        bg: 'whiteFade.80',
        boxShadow: 'sm',
        backdropFilter: 'blur(2px)',
    },
    backLink: {
        ml: ['body', null, null, null, 7],
        mt: 7,
        mb: 13,
    },
    hero: {
        display: 'flex',
        flexWrap: 'wrap',
        bg: 'primary.light',
        borderTopLeftRadius: ['50', null, null, null, 0], // 4em
        borderTopRightRadius: ['50', null, null, null, 0],
        mt: [9, null, 13],
        pb: [null, null, 11],
        '& > div:first-of-type': {
            width: ['100%', null, null, null, '50%'],
        },
        '& > div:last-of-type': {
            flex: 1,
            minWidth: '50%',
        },
    },
    imageContainer: {
        width: '100%',
        maxWidth: ['25em', null, '30em'],
        px: [9, null, 13, null, 10],
        m: '0 auto',
    },
    imageWrap: {
        position: 'relative',
        top: ['-5em', null, null, null, '-7em'],
        p: [null, null, 7],
        filter: 'drop-shadow(rgba(0, 0, 0, 0.25) 10px 30px 10px)',
    },
    extraInfoWrap: {
        position: 'relative',
        top: '-3em',
        px: 4,
    },
    extraInfoList: {
        display: 'flex',
        flexDirection: ['column', 'row'],
        justifyContent: 'center',
        flexWrap: 'wrap',
        li: {
            display: 'flex',
            flexDirection: [null, 'column'],
            alignItems: 'center',
            justifyContent: 'center',
            span: {
                fontSize: 4,
            },
        },
        'li:nth-of-type(2)': {
            my: [2, 0],
            mx: [null, 7],
            px: [null, 7],
            borderLeft: t => [null, `1px solid ${t.colors.blackFade['30']}`],
            borderRight: t => [null, `1px solid ${t.colors.blackFade['30']}`],
        },
    },
    offerBox: {
        position: 'relative',
        maxWidth: '25em',
        mx: 'auto',
        mt: 8,
        outline: '2.5px solid',
        zIndex: 0,
        ':after': {
            position: 'absolute',
            content: '""',
            size: '100%',
            top: 3,
            left: 3,
            borderRadius: '1px',
            bg: 'blackFade.10',
            zIndex: -1,
        },
    },
    offerText: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
        px: 2,
        bg: 'primary.light',
    },
    content: {
        position: 'relative',
        top: [null, null, null, null, '-3em'],
        pt: 7,
        pb: 8,
        borderTopLeftRadius: '40',
        borderTopRightRadius: '40',
        borderBottomLeftRadius: [null, null, 'default', null, '40'],
        borderBottomRightRadius: [null, null, 'default', null, '40'],
        bg: t => ['background', null, lighten('primary.base', 0.11)(t)],
        boxShadow: [null, null, 'lg'],

        pl: ['body', null, 7],
        pr: ['body', null, 7],
        maxWidth: t => `calc(30em + ${t.space.body})`, // '32.5em',
        m: '0 auto',
    },
    header: {
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: ['transparent', null, 'blackFade.30'],
        mb: [null, null, 4],
    },
    titleWrap: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        pb: 4,
    },
    title: {
        flex: 1,
        fontSize: [6, null, null, 7, 8],
    },
    rating: {
        px: 0,
        pt: 0,
    },
    flexSplit: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    option: {
        size: '2.5em',
        p: 0,
    },
    actionWrap: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        rowGap: 4,
        columnGap: 3,
        mt: 7,
        button: {
            flex: 'auto',
            flexGrow: 1,
        },
        'button:first-of-type': {
            justifyContent: 'center',
            '.symbol': {
                display: ['none', null, 'initial'],
            },
        },
        'button:last-of-type': {
            flexGrow: [null, null, 10],
        },
    },
    mobileVisible: {
        display: [null, null, 'none'],
    },
    mobileHidden: {
        display: ['none', null, 'initial'],
    },
    tabletVisible: {
        display: [null, null, null, 'none'],
    },
    tabletHidden: {
        display: ['none', null, null, 'block'],
    },
    otherWrap: {
        bg: 'background',
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor: ['gray', null, 'transparent'],
        pb: [13, null, 0],
    },
    otherSection: {
        py: 9,
        px: ['body', null, '7'],
        '&[data-lined]': {
            borderTopWidth: '1px',
            borderTopStyle: 'solid',
            borderTopColor: 'gray',
        },
    },
    scrollable: {
        gridGap: [4, null, 9],
        pt: 10,
        mx: ['bodyNegative', null, '-2em'],
    },
    reviewWrap: {
        borderColor: 'gray',
        borderStyle: 'solid',
        borderTopWidth: '1em',
        borderBottomWidth: '1em',
        outline: t => `1px solid ${t.colors.grayMedium}`,
    },
    reviewContentWrap: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: ['space-between', null, null, null, 'flex-start'],
        columnGap: [null, null, null, null, '10em'],
    },
    reviewContent: {
        flex: ['0 1 100%', null, null, '0 1 19em', null, '0 1 23em'],
        pt: 2,
    },
    reviewBand: {
        borderTop: t => [`1px solid ${t.colors.gray}`, null, null, 'none'],
        mt: [4, null, null, 0],
        pt: [4, null, null, 0],
    },
    flexLayout: {
        display: 'flex',
        flexDirection: ['column', null, null, 'row'],
    },
    sectionHeader: {
        display: 'flex',
        flexWrap: ['wrap', null, null, 'nowrap'],
        justifyContent: 'space-between',
        alignItems: ['center', null, null, 'flex-start'],

        flexDirection: [null, null, null, 'column'],
        width: [null, null, null, '15em'],
        pr: [null, null, null, 7],
    },
    scrollNav: {
        alignSelf: 'flex-end',
        'button,button:disabled:hover,button[aria-disabled="true"]:hover': {
            borderColor: [null, null, null, 'secondary.base'],
            bg: [null, null, null, 'transparent'],
        },
        'button:hover': {
            borderColor: [null, null, null, 'secondary.base'],
            bg: [null, null, null, 'secondary.base'],
            color: [null, null, null, 'textOnSecondary'],
            boxShadow: t => [null, null, null, `0 0.5em 0.7em -0.3em ${alpha('secondary.hover', 0.7)(t)}`],
        },
    },
    sectionContent: {
        flex: [null, null, null, 1],
        overflow: [null, null, null, 'hidden'],
        bg: [null, null, null, 'background'],
        my: [null, null, null, '-3em'],
        mr: [null, null, null, '-2em'],
    },
    scrollableRecently: {
        gridGap: 4,
        pt: [7, null, null, 10, 13],
        pb: [null, null, null, null, 6],
        mx: ['bodyNegative', null, '-2em', 0],
        mb: ['-2em', null, null, 0],
    },
    fixedToBottom: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 'bottomBar',
    },
    bottomBar: {
        display: 'flex',
        minHeight: '5.25em',
        borderTopLeftRadius: '40',
        borderTopRightRadius: '40',
        bg: 'secondary.base',
        overflow: 'hidden',
        boxShadow: '0 0 6px rgba(0,0,0,0.15)',
    },
    priceTotal: {
        display: 'flex',
        width: '40%',
        flexDirection: ['column', null, null, 'row'],
        justifyContent: ['center', null, null, 'flex-start'],
        alignItems: [null, null, null, 'center'],
        flexWrap: 'wrap',
        pt: [5, null, null, 4],
        pl: 6,
        pr: 4,
        pb: [4, null, null, 3],
        'p:first-of-type': {
            display: ['none', null, null, 'block'],
            width: '100%',
        },
        'p:last-of-type': {
            wordBreak: 'break-word',
            fontSize: [null, null, null, 6],
        },
        span: {
            color: 'primary.base',
            fontSize: 1,
            mr: 1,
        },
    },
    actions: {
        display: 'flex',
        flex: 1,
        alignItems: ['center', null, 'stretch'],
        justifyContent: 'flex-end',
        gap: [3, null, 0],
        pr: [6, null, 0],
        button: {
            flex: [null, null, 1],
            fontWeight: 'bold',
            color: 'inherit',
            p: [3, null, 4],
            textTransform: 'capitalize',
            '&:first-of-type': {
                flex: 'auto',
                bg: 'gray',
                borderRadius: ['pill', null, 0],
            },
            '&:last-of-type': {
                bg: 'primary.base',
                borderRadius: ['circle', null, 0],
            },
        },
    },
    addBagIcon: {
        position: 'relative',
        display: 'block',
        ':after': {
            position: 'absolute',
            content: '"+"',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '70%',
            height: '70%',
            top: '50%',
            left: '50%',
            borderRadius: 'circle',
            bg: 'primary.light',
        },
    },
    bagIcon: {
        transform: 'scale(1.25)',
    },
}

export default styles
