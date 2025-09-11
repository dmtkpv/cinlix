import { required, email } from './validations.js'
import { IInput, IText } from '#components'

export const FORM_CONTACT = {

    name: {
        label: 'Name',
        component: IInput,
        options: {
            type: 'text',
        },
        validations: [
            required
        ]
    },

    email: {
        label: 'Email',
        component: IInput,
        options: {
            type: 'text',
        },
        validations: [
            required,
            email
        ]
    },

    message: {
        label: 'Message',
        component: IText,
        validations: [
            required,
        ]
    }

}