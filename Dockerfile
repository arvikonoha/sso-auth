FROM node:21-alpine

WORKDIR /app

COPY . .

RUN apk --no-cache add curl openssl aws-cli 

RUN find /app/scripts -type f -exec dos2unix {} \;

RUN chmod +x ./scripts/init.sh
RUN ./scripts/init.sh

RUN npm install

EXPOSE 3000

RUN chmod +x ./index.js

# Give execute permissions to the entrypoint script
RUN chmod +x /app/scripts/entrypoint.sh

ENTRYPOINT ["/app/scripts/entrypoint.sh"]

CMD ["node", "index"]
