build-image:
	docker build -t my-next-app:latest .

run:
	docker run -p 3001:3000 my-next-app:latest

shell:
	docker run -it --entrypoint=/bin/sh my-next-app:latest
