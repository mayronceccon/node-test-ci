git:
	git pull

install:
	npm install

build:
	npm run build:prod

restart:
  pm2 restart default --update-env
