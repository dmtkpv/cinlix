import styles from '~/styles/abstract.module.scss'

export const why = {
    columns: 3,
    maxWidth: 320,
    image: {
        ratio: 3 / 2
    },
}

export const how = {
    columns: 4,
    bg: styles.grayLight,
    modifiers: ['center'],
    image: {
        ratio: 1,
        size: 120,
        bg: 'none'
    }
}

export const services = {
    columns: 2,
    modifiers: ['center', 'service'],
    image: {
        ratio: 1,
        size: 80,
        bg: 'none'
    }
}

export const articles = {
    columns: 3,
    image: {
        ratio: 3 / 2
    },
}