#/bin/bash
git pull
npm install
npm run build
docker rm -f my-web-app
docker build --rm -f Dockerfile.prod -t my-web-app .
docker run -d --restart=always --name my-web-app -p 1337:80 my-web-app
