Para realizar está API realice peticiones a 
https://footballapi-lcfc.pulselive.com/football/fixtures?teams=26&comps=1,4,5,2,210&compSeasons=&homeTeams=&page=${i}&pageSize=100&sort=desc&statuses=C&altIds=true&provisional=false
variando i para recorrer las paginas que envia la API.

Para correr el programa es necesario correr una base de datos de mongodb en una consola,
usar por consola: npm install
y luego npm run dev, así está configurado en el JSON.


En este momento, la api no funciona correctamente del todo.

Tengo un problema con el formato de las fechas que evita que se haga el match correcto con la metodo .find.

Luego de resolver el problema de los formatos, los partidos por rango de fecha seria mucho mas sencillo de conseguir usando el mismo metodo .find con $gt y $lt.

Para conseguir los puntos, por rangos de fecha solo era necesario usar un if para asegurarse la competencia por la que se disputo el juego y luego comprara los scores
de los equipos considerando que el id del Leiscester es id: 26, y asi regresar la suma de los puntos por compentencia.

Adicionales.

Para agregar un partido por POST, solo es necesario agregar todos los datos por un formulario y recibirlo por el back-end con router.post y usar el metodo .create para acceder
a la base datos, solo se debe pasar los parametros cumpliendo el model de Matches.

Para la autentificacion, primero tendria que hacer un Schma de usuario, crear usuarios por Post y usar una libreria para generar el token al comparar el usuario y contraseña con la que esta alojada en la base de datos.
