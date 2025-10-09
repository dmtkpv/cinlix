## Cinlix
### Architecture
- Created GitHub repo to manage source code and version control
- Set up PNPM monorepo to separate project components and run them independently
- Set up Docker to run all services in isolated containers

### Deployment
- Chose and set up a VPS for hosting the project
- Connected the project to domains for the website and admin panel
- Set up automated deployment using GitHub Actions
- Configured free SSL certificates using Caddy
- Enabled Gzip compression and caching for better performance

### Database
- Set up PostgreSQL database for data storage and management
- Implemented database migrations to manage schema changes reliably
- Created seed scripts to populate the database with initial data
- Created database views to simplify SQL queries

### Admin panel
- Configured Directus to manage and edit database records
- Developed a custom hook to rebuild the website when content changes
- Implemented automatic slug generation for URLs

### Website
- Used Nuxt for SSG to achieve excellent performance
- Developed Nitro endpoints to fetch data efficiently
- Converted Figma design into a fully functional website
- Selected and integrated SVG icons
- Developed an animated slider
- Developed an animated dropdown for services
- Designed and developed mobile-friendly navigation
- Adapted the website for tablets and mobile devices
- Designed and developed blog list items
- Designed and developed the contact form
- Developed a custom 404 page 
- Implemented image lazy loading with fade-in effect
- Implemented numerous client-requested changes