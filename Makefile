# Docker solutions
docker-build:
	docker compose build

docker-up:
	docker compose up -d

docker-test:
	docker compose run test_app

docker-stop:
	docker compose stop

docker-start:
	docker compose start

docker-clean:
	docker compose down --remove-orphans

docker-logs:
	docker compose logs


dockerbuild:
	docker-compose build --no-cache

dockerup:
	docker-compose up