export default {
    shadows: {
        xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        none: 'none',
        // Use for Avatar rings - change black to secondary?
        ringLight: '0 0 0 3px white, 0 0 0 5px black',
        ringDark: '0 0 0 3px #202020, 0 0 0 5px white',

        soft:
            'rgba(0, 0, 0, 0.05) -3px 3px 6px, rgba(0, 0, 0, 0.055) -20px 20px 55px, rgba(255, 255, 255, 0.6) -2px 2px 2px 1px inset, rgba(255, 255, 255, 0.4) 2px 2px 3px 0px inset, rgba(0, 0, 0, 0.05) 1px 1px 2px 0px inset',
        raised: 'inset 0 -1px 1px 0 rgba(0,0,0,.15), inset 0 1px 1px 0 rgba(255,255,255,.14)',
        pressed: 'inset 0 1px 1px 0 rgba(0,0,0,.15), inset 0 0 1px 0 rgba(255,255,255,.42)',
        hover: '0 7px 36px -10px rgba(0, 0, 0, 0.3)',
        glowLight: '0 2px 20px -5px',
        glowMedium: '0 2px 40px -5px',
        glowDark: '0 2px 20px 0px',
        depth: '0 25px  25px -10px',
        primary: t => `0 7px 36px -10px ${t.colors.heroText}`,
        sites: {
            moonlightwork: '0 2px 8px 0 rgba(0,0,0,.04), 0 2px 20px 0 rgba(0,0,0,.06)',
            vuesax: '0 4px 25px 0 rgba(0,0,0,.1)',
            zopa: '0 8px 12px 0 rgba(0,0,0,.1)',
            rrwebIo: '0 24px 48px rgba(17, 16, 62, 0.12)',
        },
        cards: {
            style1: {
                sm: '0 15px 20px -5px rgba(0,0,0,.1)',
                bg: '0 30px 40px -10px rgba(0,0,0,.2)',
            },
            style2: {
                normal: 'rgba(0, 0, 0, 0.1) 0px 0px 15px -3px, rgba(0, 0, 0, 0.05) 0px 0px 6px -2px',
                hover: 'rgba(0, 0, 0, 0.12) 0px 30px 60px',
            },
            depth: {
                normal: '0 1.5em 2em -0.5em rgba(0,0,0,0.22), 0 0.9em 1.8em -0.9em rgba(0,0,0,0.25)',
                hover: '0 2.5em 4em -1em rgba(0,0,0,0.27), 0 1.5em 2.5em -1.5em rgba(0,0,0,0.3)',
            },
        },
    },
    radii: {
        none: '0',
        tiny: '5px',
        default: '0.875em', // 14px
        20: '1.25em',
        25: '1.5em',
        30: '2em',
        40: '2.5em',
        50: '3.125em', // 50px
        apple: '22.5%',
        icon: '40%',
        circle: '50%',
        round: '0.6em',
        pill: '50em',
        blob0: '30% 70% 70% 30% / 30% 30% 70% 70%',
        blob1: '70% 30% 30% 70% / 70% 70% 30% 30% ',
        blob2: '30% 70% 70% 30% / 70% 70% 30% 30% ',
        blob3: '70% 30% 30% 70% / 30% 30% 70% 70%',
    },
    zIndices: {
        header: 1000,
        pageWrap: 1300,
        main: 10,
        footer: 10,
        footerCopywright: 9,
        footerReveal: 8,
    },
    borderWidths: {},
    borderStyles: {},
    borders: {},
}
