ARG WORK_DIR=/app
ARG PNPM_DIR=/root/pnpm



# ---------------------
# Base
# ---------------------

FROM node:22-alpine AS base
ARG WORK_DIR
ARG PNPM_DIR

RUN corepack enable && corepack prepare pnpm@10.14 --activate
RUN pnpm config set store-dir ${PNPM_DIR} --global

WORKDIR ${WORK_DIR}



# ---------------------
# Production
# ---------------------

FROM base AS prod

COPY . .
RUN pnpm install
RUN pnpm directus build

CMD ["sh", "-c", "\
    pnpm directus bootstrap && \
    pnpm database migrate:latest && \
    pnpm database seed && \
    pnpm directus serve \
"]
