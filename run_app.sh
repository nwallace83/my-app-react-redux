#/bin/bash
docker rm -f my-web-app
docker build --rm -f Dockerfile.prod -t my-web-app .
docker run -it --rm --name my-web-app -p 1337:80 my-web-app
