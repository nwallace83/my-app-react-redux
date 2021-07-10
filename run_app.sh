#/bin/bash
git checkout package-lock.json
git pull
npm install
npm run build
docker rm -f my-web-app
docker build --rm -f Dockerfile.prod -t my-web-app .
docker run -d --network my-net --hostname web1 --restart=always --name my-web-app -p 1337:80 my-web-app
