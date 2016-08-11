.PHONY: build

install:
	@npm install

build: create-build-dir copy-files
	@./node_modules/.bin/webpack  --progress --colors --devtool source-map

copy-files: create-build-dir copy-vendor-js copy-templates copy-fonts copy-images

copy-vendor-js:
	@cp -R ./src/vendor/* build/

copy-templates:
	@mkdir -p ./build/templates
	@cp -R ./assets/templates/* ./build/templates/

copy-fonts:
	@mkdir -p ./build/fonts
	@cp -R ./assets/fonts/* ./build/fonts/

create-build-dir:
	@mkdir -p ./build

copy-images:
	@mkdir -p ./build/images
	@cp -R ./assets/images/* ./build/images/

run: copy-files
	@echo "**************************************************"
	@echo "* open http://localhost:8080/webpack-dev-server/ *"
	@echo "**************************************************"
	@./node_modules/.bin/webpack-dev-server --host=0.0.0.0 --progress --colors --devtool cheap-module-inline-source-map --hot --inline
