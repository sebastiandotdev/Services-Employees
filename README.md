# Services Employees

- Services Employees API's en donde muchos usuarios publican sus mejores POSTS

# Instalación

- Si quieres usar esta Api's REST sigue los siguientes paso:

1. `npm install`
2. `npm run dev`
3. `localhost:3000`

# Endpoints

- ` http://localhost:3000/api`

# Ejemplos de solicitu http

- para ver los usuarios

`http://localhost:3000/api`

```
axios.get('http://localhost:3000/api')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
```

# Contribución

- `git clone https://github.com/Sebastian009w/Services-Employees.git`
