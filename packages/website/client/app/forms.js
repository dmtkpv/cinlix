import { required, email } from './validations.js'

export const contact = {

    name: {
        label: 'Name',
        component: 'i-input',
        options: {
            type: 'text',
        },
        validations: [
            required
        ]
    },

    email: {
        label: 'Email',
        component: 'i-input',
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
        component: 'i-text',
        validations: [
            required,
        ]
    }

}