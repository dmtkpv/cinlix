import { merge } from 'lodash-es'

export default {

    id () {
        return {
            required: false,
            readonly: true,
            hidden: true
        }
    },

    input (config) {
        return merge({
            interface: 'input',
            display: 'raw',
            options: {
                trim: true
            }
        }, config)
    },

    text (config) {
        return merge({
            interface: 'input-multiline',
            display: 'raw'
        }, config)
    },

    boolean (config) {
        return merge({
            special: 'cast-boolean',
            interface: 'boolean',
            display: 'boolean'
        }, config)
    },

    image (config) {
        return merge({
            special: 'file',
            interface: 'file-image',
            display: 'image'
        }, config)
    },

    file (config) {
        return merge({
            special: 'file',
            interface: 'file',
            display: 'file',
        }, config)
    },

    divider (title) {
        return {
            special: 'alias,no-data',
            interface: 'presentation-divider',
            options: { title }
        }
    },



    // -----------------------
    // Date
    // -----------------------

    datetime (config) {
        return merge({
            interface: 'datetime',
            display: 'datetime',
            display_options: { relative: true }
        }, config)
    },

    created_at () {
        return this.datetime({
            special: 'date-created',
            hidden: true
        })
    },

    updated_at () {
        return this.datetime({
            special: 'date-updated',
            hidden: true
        })
    },



    // -----------------------
    // User
    // -----------------------

    user (config) {
        return merge({
            interface: 'select-dropdown-m2o',
            options: { template: '{{first_name}} {{last_name}}' },
            display: 'user',
            display_options: { display: 'name' },
        }, config)
    },

    created_by () {
        return this.user({
            special: 'user-created',
            hidden: true
        })
    },

    updated_by () {
        return this.user({
            special: 'user-updated',
            hidden: true
        })
    },



    // -----------------------
    // Relations
    // -----------------------

    relation ({ template, options, display_options, ...rest }) {
        return merge({
            options: { template, ...options },
            display: 'related-values',
            display_options: { template, ...display_options },
        }, rest)
    },

    m2o (config) {
        return this.relation(merge({
            special: 'm2o',
            interface: 'select-dropdown-m2o',
        }, config))
    },

    m2m (config) {
        return this.relation(merge({
            special: 'm2m',
            interface: 'list-m2m'
        }, config))
    },

    o2m (config) {
        return this.relation(merge({
            special: 'o2m',
            interface: 'list-o2m'
        }, config))
    },

    files ({ junction, ...config }) {
        return this.relation(merge({
            special: 'files',
            interface: 'files',
            template: `{{${junction}.$thumbnail}} {{${junction}.filename_download}}`,
        }, config))
    }



}