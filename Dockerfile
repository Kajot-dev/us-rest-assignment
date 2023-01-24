FROM node:18-alpine as builder

WORKDIR /app

COPY package*  ./

RUN npm install

COPY . .

RUN npm run build

FROM node:18-alpine as runner

WORKDIR /app

COPY --from=builder /app/package* ./

RUN npm install --omit=dev

COPY --from=builder /app/.next ./.next

COPY --from=builder /app/public ./public

COPY --from=builder /app/next.config.js ./

EXPOSE 3000

CMD ["npm", "start"]