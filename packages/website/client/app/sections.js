import styles from '~/styles/abstract.module.scss'

export const SECTION_WHY = {
    columns: 3,
    maxWidth: 320,
    image: {
        ratio: 5 / 3,
        bg: styles.grayLight,
        fit: 'contain'
    },
}

export const SECTION_HOW = {
    columns: 3,
    bg: styles.grayLight,
    modifiers: ['center'],
    image: {
        ratio: 1,
        size: 120,
        bg: 'none'
    }
}

export const SECTION_SERVICES = {
    columns: 2,
    modifiers: ['center', 'service'],
    image: {
        ratio: 1,
        size: 80,
        bg: 'none'
    }
}