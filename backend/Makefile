help:
	@echo make install
	@echo make migrate
	@echo make createsuperuser
	@echo make run
	@echo make runx
	@echo make dump_script
	@echo make graph_models
	@echo make show_urls
	@echo make validate_templates
	@echo make shell
	@echo make shellx

install:
	pipenv install

migrate:
	python manage.py migrate

createsuperuser:
	python manage.py createsuperuser

run:
	python manage.py runserver

runx:
	python manage.py runserver_plus

dump_script:
	python manage.py dumpscript shapes > load_shapes.py

graph_models:
	# python manage.py graph_models -a -o hello-shapes-react-models.png
	python manage.py graph_models shapes | dot -Tpng -o hello-shapes-react-models.png

show_urls:
	python manage.py show_urls

validate_templates:
	python manage.py validate_templates

shell:
	python manage.py shell

shellx:
	python manage.py shell_plus

clean:
	rm ./load_shapes.py
	rm ./hello-shapes-react-models.png
