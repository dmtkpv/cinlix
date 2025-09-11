import { ROLES, POLICIES } from '#root/constants.js'

export default [
    {
        id: POLICIES.public,
        role: ROLES.public,
        name: 'Public',
        admin_access: false,
        app_access: false,
        permissions: [
            { collection: 'directus_files', action: 'read', fields: '*' }
        ]
    }
]