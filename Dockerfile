ARG WORK_DIR=/app
ARG PNPM_DIR=/root/pnpm

FROM node:22-alpine
ARG WORK_DIR
ARG PNPM_DIR

RUN corepack enable && corepack prepare pnpm@10.14 --activate
RUN pnpm config set store-dir ${PNPM_DIR} --global

WORKDIR ${WORK_DIR}
