ARG NODE_VERSION=22
FROM node:${NODE_VERSION}-alpine AS base

# Install Bun, which will be used as the package manager and script runner.
RUN apk add --no-cache bash ca-certificates curl unzip && \
    curl -fsSL https://bun.sh/install | bash && \
    apk del bash curl unzip

# Add Bun to the PATH
ENV PATH="/root/.bun/bin:${PATH}"

FROM base AS builder
RUN apk update
RUN apk add --no-cache libc6-compat
# Set working directory
WORKDIR /app
RUN bun -g add turbo
COPY . .
RUN turbo prune api --docker

# Add lockfile and package.json's of isolated subworkspace
FROM base AS installer
RUN apk update
RUN apk add --no-cache libc6-compat
WORKDIR /app

# First install dependencies (as they change less often)
COPY --from=builder /app/out/json/ .
RUN bun install

# Build the project and its dependencies
COPY --from=builder /app/out/full/ .

# Uncomment and use build args to enable remote caching
# ARG TURBO_TEAM
# ENV TURBO_TEAM=$TURBO_TEAM

# ARG TURBO_TOKEN
# ENV TURBO_TOKEN=$TURBO_TOKEN

RUN bun run build

FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 honojs
RUN adduser --system --uid 1001 honojs
USER honojs
COPY --from=installer /app .

CMD node apps/api/dist/index.js