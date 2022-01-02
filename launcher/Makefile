compile:
	npm run compile

deploy: compile
	gcloud functions deploy start-mc --allow-unauthenticated --entry-point start --runtime nodejs16 --trigger-http --env-vars-file .env.yaml &
	gcloud functions deploy stop-mc --allow-unauthenticated --entry-point stop --runtime nodejs16 --trigger-http --env-vars-file .env.yaml &
	gcloud functions deploy info --allow-unauthenticated --entry-point getInfo --runtime nodejs16 --trigger-http --env-vars-file .env.yaml &

test-get-info: compile
	npx functions-framework --target=getInfo --source=build/src/ --port=8000

test-start: compile
	npx functions-framework --target=start --source=build/src/ --port=8000

test-stop: compile
	npx functions-framework --target=stop --source=build/src/ --port=8000

.PHONY: compile test-get-info test-start test-stop