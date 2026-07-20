FROM node:20-slim AS deps
WORKDIR /app
COPY package*.json ./
# Use npm install in the container for better compatibility with the existing lockfile and legacy peer dependency resolution.
# Keep dev dependencies in this stage because Next.js build needs the TypeScript/toolchain packages.
RUN npm install --legacy-peer-deps --no-audit --no-fund

FROM node:20-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js
EXPOSE 3000
CMD ["npm", "run", "start"]
