import { ROLES, POLICIES } from '#root/constants.js'
import Collections from './collections.js'

const permissions = Collections.map(collection => ({
    collection: collection.options.collection,
    action: 'read',
    fields: '*'
}))

export default [
    {
        id: POLICIES.public,
        role: ROLES.public,
        name: 'Public',
        admin_access: false,
        app_access: false,
        permissions: [
            ...permissions,
            { collection: 'directus_files', action: 'read', fields: '*' }
        ]
    }
]