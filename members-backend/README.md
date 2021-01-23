Esse projeto foi desenvolvido com o framework [Django](https://docs.djangoproject.com/en/3.1/releases/3.1.5/) version 3.1.5

## Pacotes PYP necessários:

Os pacotes necessário encontram-se descrinos no arquivo 'requiremensts.txt' na raiz do projeto.
Porém após instalar o Django na ultima versão só é necessário instalar manualmente os pacotes:

'rest_framework','corsheaders'

Com os seguintes comandos:

- pip3 install django
- pip3 install djangorestframework
- pip3 install django-cores-headers

## Development server

Para rodar o servidor de backend se faz ultilização do comando:

python3 manage.py runserver

Após instalação dos pacotes pyp3 é necessário criar e migrar o banco de dados:

- pytohon3 manage.py makemigrations
- pytohon3 manage.py migrate

O servidor iniciar no seguinte endereço: http://localhost:8000/