artomico-debian
===============

Repositorio para el empaquetado del Proyecto Artómico en distribuciones basadas en Debian.

Para crear el paquete es necesario comprimir los archivos de la aplicación en un archivo .nw para node-webkit.

`zip artomico.nw assets/ index.html package.json vendor/`

Una vez creado artomico.nw:

`git-buildpackage`
