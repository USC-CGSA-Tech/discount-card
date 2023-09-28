DC=docker-compose

DC_DEV_FILE=docker-compose.dev.yml

DC_PROD_FILE=docker-compose.prod.yml

SERVICE?=

start-dev:
	$(DC) -f $(DC_DEV_FILE) up -d --build $(SERVICE)

stop-dev:
	$(DC) -f $(DC_DEV_FILE) down

start-prod:
	$(DC) -f $(DC_PROD_FILE) up -d --build $(SERVICE)

stop-prod:
	$(DC) -f $(DC_PROD_FILE) down
