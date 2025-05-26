FROM cypress/browsers:node-22.14.0-chrome-134.0.6998.88-1-ff-136.0.1-edge-134.0.3124.51-1

WORKDIR /e2e

COPY ./package.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress

RUN npm i &&\
    npx cypress info

ENTRYPOINT ["npx", "cypress", "run"]