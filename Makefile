.PHONY: up

up:
	docker-compose up -d

.PHONY: build

build:
	docker-compose build

.PHONY: down

down:
	docker-compose down

.PHONY: logs

logs:
	docker-compose logs -f