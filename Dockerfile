FROM node:18

WORKDIR /usr/src/app
COPY . .

# Install WebDriverIO & Appium support
RUN npm install -g @wdio/cli \
    && npm install \
        @wdio/local-runner \
        @wdio/mocha-framework \
        @wdio/spec-reporter \
        @wdio/appium-service \
        appium \
        chai


# Default command (overridden by docker-compose)
CMD ["npm", "run", "wdio:android"]
