DC=docker-compose

DC_DEV_FILE=docker-compose.dev.yml

DC_PROD_FILE=docker-compose.prod.yml

SERVICE?=

launch-dev:
	$(DC) -f $(DC_DEV_FILE) up --build $(SERVICE)

launch-prod:
	$(DC) -f $(DC_PROD_FILE) up --build $(SERVICE)
