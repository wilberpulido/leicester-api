Para realizar está API realice peticiones a 
https://footballapi-lcfc.pulselive.com/football/fixtures?teams=26&comps=1,4,5,2,210&compSeasons=&homeTeams=&page=${i}&pageSize=100&sort=desc&statuses=C&altIds=true&provisional=false
variando i para recorrer las paginas que envia la API.

Para correr el programa es necesario correr una base de datos de mongodb en una consola,
usar por consola: npm install
y luego npm run dev, así está configurado en el JSON.
