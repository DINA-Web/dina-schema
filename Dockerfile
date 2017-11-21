FROM swaggerapi/swagger-ui

ENV SWAGGER_JSON "swagger.json"
ENV API_URL "swagger.json"

COPY nginx.conf /etc/nginx/

ADD ./build/swagger.json /usr/share/nginx/html/

RUN apk update && apk add bash
