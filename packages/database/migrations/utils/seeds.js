import { FILES } from '#root/constants.js'

export const title = 'Title'
export const description = 'Lorem ipsum dolor sit amet consectetur. Sollicitudin arcu purus lobortis leo amet leo faucibus. Proin.'
export const image =  FILES.image

export function useSeeds (source, options) {
    const array = Array.isArray(source) ? source : Array.from({ length: source });
    return array.map((item, index) => ({ ...item, ...options, sort: index }))
}