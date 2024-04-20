FROM node:18-alpine
WORKDIR /clinic-os-docker/
COPY public/ /clinic-os-docker/public
COPY src/ /clinic-os-docker/src
COPY package.json /clinic-os-docker/
RUN npm install
CMD npm start

# docker image build -t clinic-os-frontend:latest .
# docker run -p 3000:3000 clinic-os-frontend:latest