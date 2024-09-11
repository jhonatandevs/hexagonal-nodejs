# hexagonal-nodejs

## commands


```Language
- [x]  npm i -D @types/pg // instalo los types de pg despues de instalar pg
- [x] npm i -D @types/express   /instalo tipados en express
- [x] npm i -D ts-node typescript  // Instalo ts para modo desarrollo, compilados y deás
- [x] npx tsc --init  // Para inicializar un proyecto ts
```

###Confiruracion de TSCONFIG -----
En el tsconfig debo:
    descomentar el baseUrl
    en    "outDir" debe quedar así... -->  "./dist",
    Comento la linea de  // "esModuleInterop": true,
    Creamos los scripts de el package despues de darle un npm iit --y así:
        "start": "node dist/main.js",
        "build":"npx tsc ./src/main.ts --outDir ./dist/",
        "dev":"npx ts-node ./src/main.ts"