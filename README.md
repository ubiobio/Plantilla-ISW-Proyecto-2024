# Plantilla-ISW-Proyecto-2024

Una plantilla base para proyectos de Ingeniería de Software (ISW) desarrollados durante el año 2024-2. Esta plantilla está diseñada para ayudar a los estudiantes a estructurar y organizar sus proyectos de software, incluyendo tanto la parte de Backend como de Frontend.

## Tabla de contenidos
* [Descripción General](#descripción-general)
* [Backend](#backend)
* [Frontend](#frontend)
* [Arquitectura del Proyecto](#arquitectura-del-proyecto)
  * [Estructura del Backend](#estructura-del-backend)
  * [Estructura del Frontend](#estructura-del-frontend)
* [Instalación y Configuración](#instalación-y-configuración)
  * [Prerrequisitos](#prerrequisitos)
  * [Clonación del Repositorio](#clonación-del-repositorio)
  * [Configuración del Backend](#configuración-del-backend)
  * [Configuración del Frontend](#configuración-del-frontend)
  * [Configuración de DBeaver y PostgreSQL](#configuración-de-dbeaver-y-postgresql)
* [Tecnologías](#tecnologías)
  * [PostgreSQL](#postgresql)
  * [Express.js](#expressjs)
  * [React](#react)
  * [Node.js](#nodejs)
  * [Otros Recursos y Librerías](#otros-recursos-y-librerías)

## Descripción General

La `Plantilla-ISW-Proyecto-2024` es una base preconfigurada para proyectos de Ingeniería de Software que incluye tanto la parte del Backend como la del Frontend. Está diseñada para que los estudiantes puedan enfocarse en desarrollar sus funcionalidades específicas sin tener que preocuparse por la configuración inicial del proyecto. 

### Backend

El Backend de esta plantilla implementa las siguientes funcionalidades principales:

- **Autenticación y Autorización**: Uso de `passport.js` para la autenticación segura de los usuarios.
- **CRUD de Usuarios**: Permite la lectura, actualización y eliminación de usuarios.
- **Registro de Usuarios**: Implementación de un sistema de registro que permite a nuevos usuarios registrarse en la aplicación.

### Frontend

El Frontend proporciona una interfaz de usuario simple y funcional para interactuar con el sistema. Incluye las siguientes páginas y funcionalidades:

- **Página de Inicio de Sesión**: Permite a los usuarios autenticarse en el sistema.
- **Página de Registro de Usuarios**: Los nuevos usuarios pueden registrarse mediante un formulario.
- **Página de Error**: Muestra un mensaje de error cuando algo sale mal.
- **Página Principal**: Página de inicio tras la autenticación exitosa.
- **Página de Gestión de Usuarios**: 
  - Muestra una tabla con todos los usuarios registrados.
  - Permite modificar y eliminar usuarios directamente desde la tabla.
  - Incluye una funcionalidad de búsqueda para encontrar usuarios específicos.
- **Cerrar Sesión**: Opción para que los usuarios cierren su sesión de manera segura.

Esta plantilla proporciona una estructura robusta para que los estudiantes puedan extender y personalizar según las necesidades de sus proyectos.

## Arquitectura del Proyecto

Este proyecto está dividido en dos partes principales: el Backend y el Frontend. A continuación, se muestra la estructura del Backend:

### Estructura del Backend

```bash
├── backend
│   ├── node_modules
│   ├── src
│   │   ├── auth
│   │   │   └── passport.auth.js
│   │   ├── config
│   │   │   ├── .env.example
│   │   │   ├── configDb.js
│   │   │   ├── configEnv.js
│   │   │   └── initialSetup.js
│   │   ├── controllers
│   │   │   ├── auth.controller.js
│   │   │   └── user.controller.js
│   │   ├── entity
│   │   │   └── user.entity.js
│   │   ├── handlers
│   │   │   └── responseHandlers.js
│   │   ├── helpers
│   │   │   └── bcrypt.helper.js
│   │   ├── middlewares
│   │   │   ├── authentication.middleware.js
│   │   │   └── authorization.middleware.js
│   │   ├── routes
│   │   │   ├── auth.routes.js
│   │   │   ├── index.routes.js
│   │   │   └── user.routes.js
│   │   ├── services
│   │   │   ├── auth.service.js
│   │   │   └── user.service.js
│   │   ├── validations
│   │   │   ├── auth.validation.js
│   │   │   └── user.validation.js
│   │   └── index.js
│   ├── .gitignore
│   ├── .prettierrc.json
│   ├── .eslintrc.config.js
│   ├── package-lock.json
│   └── package.json
```

### Estructura del Frontend

```bash
├── frontend
│   ├── node_modules
│   ├── public
│   ├── src
│   │   ├── assets
│   │   │   ├── deleteIcon.svg
│   │   │   ├── react.svg
│   │   │   └── updateIcon.svg
│   │   ├── components
│   │   │   ├── Filter.jsx
│   │   │   ├── Form.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Table.jsx
│   │   │   └── userOptions.jsx
│   │   ├── context
│   │   │   └── AuthContext.jsx
│   │   ├── helpers
│   │   │   ├── formatData.js
│   │   │   ├── lowerCaseData.js
│   │   │   └── sweetAlert.js
│   │   ├── hooks
│   │   │   ├── auth
│   │   │   │   ├── useLogin.jsx
│   │   │   │   └── useRegister.jsx
│   │   │   ├── table
│   │   │   │   └── useTable.jsx
│   │   │   └── users
│   │   │       ├── useDeleteUser.jsx
│   │   │       ├── useEditUser.jsx
│   │   │       └── useGetUsers.jsx
│   │   ├── pages
│   │   │   ├── EditUser.jsx
│   │   │   ├── Error404.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── Users.jsx
│   │   ├── services
│   │   │   ├── auth.service.js
│   │   │   ├── root.service.js
│   │   │   └── user.service.js
│   │   ├── styles
│   │   │   ├── animations.css
│   │   │   └── styles.css
│   ├── index.css
│   ├── main.jsx
│   ├── .env.example
│   ├── .gitignore
│   ├── .eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
└── └── vite.config.js
```

## Instalación y Configuración

### Prerrequisitos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- [Node.js](https://nodejs.org/) (versión 20.X.X LTS) como entorno de ejecución de JavaScript.
- [Git](https://git-scm.com/) (versión 2.45.2 o superior) para clonar el repositorio.
- [PostgreSQL](https://www.postgresql.org/) (versión 16.X.X) para la base de datos.
- [DBeaver](https://dbeaver.io/) (versión 24.X.X) para la administración de la base de datos (opcional, pero recomendado).

### Clonación del Repositorio

Primero, clona el repositorio en tu máquina local usando el siguiente comando:

```bash
git clone https://github.com/tu-usuario/Plantilla-ISW-Proyecto-2024.git
```

### Configuración del Backend

1. Accede al directorio del Backend:

```bash
cd backend
```

2. Instala las dependencias del proyecto:

```bash
npm install
```

3. Renombra el archivo `.env.example` a `.env` y configura las variables de entorno necesarias.

```bash
HOST= localhost (Proyecto en local) o IP servidor (Proyecto en producción)
PORT= (3000-5000) (Proyecto en local) o Puerto 80 (Proyecto en producción)
DB_USERNAME= Nombre de usuario en la instancia de PostgreSQL
PASSWORD= Contraseña de usuario en la instancia de PostgreSQL
DATABASE= Nombre de la base de datos
ACCESS_TOKEN_SECRET= Secreto del JWT
cookieKey= Llave de la cookie
```

4. Configura PostgreSQL:

- Crea una base de datos en PostgreSQL con el nombre especificado en el archivo `.env`.

5. Inicia el servidor:

```bash
npm run dev
```

### Configuración del Frontend

1. Accede al directorio del Frontend:

```bash
cd frontend
```

2. Instala las dependencias del proyecto:

```bash
npm install
```

3. Renombra el archivo `.env.example` a `.env` y configura las variables de entorno necesarias.

```bash
VITE_BASE_URL=http://<IP:(Puerto 80 -> 4 digitos)>/api
```

4. Inicia la aplicación Frontend:

```bash
npm run dev
```

### Configuración de DBeaver y PostgreSQL

1. Instalación de PostgreSQL:

- Descarga e instala PostgreSQL desde el siguiente enlace: [PostgreSQL](https://www.postgresql.org/download/).
- Durante la instalación, configura la contraseña para la base de datos.

2. Configuración de DBeaver:

- Descarga e instala DBeaver desde el siguiente enlace: [DBeaver](https://dbeaver.io/download/).
- Abre DBeaver y crea una nueva conexión a la base de datos PostgreSQL.
- Ingresa el nombre de usuario y la contraseña configurados durante la instalación de PostgreSQL.

3. Uso de DBeaver:

- Utiliza DBeaver para administrar y visualizar la base de datos PostgreSQL.
- Puedes crear tablas, insertar datos, ejecutar consultas SQL y más.

## Tecnologías

Este proyecto utiliza el stack **PERN**, que incluye las siguientes tecnologías:

### PostgreSQL

- **Descripción**: Sistema de gestión de bases de datos relacional y objeto.
- **Uso en el Proyecto**: Se utiliza para almacenar y gestionar datos de usuarios y otros datos de la aplicación.
- **Enlace**: [PostgreSQL](https://www.postgresql.org/)

### Express.js

- **Descripción**: Framework minimalista para Node.js que facilita la creación de aplicaciones web y APIs.
- **Uso en el Proyecto**: Se utiliza para construir la API del Backend, gestionando rutas y solicitudes HTTP.
- **Enlace**: [Express.js](https://expressjs.com/)

### React

- **Descripción**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Uso en el Proyecto**: Se utiliza para construir la interfaz de usuario del Frontend, proporcionando una experiencia interactiva y dinámica.
- **Enlace**: [React](https://reactjs.org/)

### Node.js

- **Descripción**: Entorno de ejecución para JavaScript en el lado del servidor.
- **Uso en el Proyecto**: Se utiliza para ejecutar el código del Backend y manejar la lógica del servidor.
- **Enlace**: [Node.js](https://nodejs.org/)

### Otros Recursos y Librerías

- **Passport.js**: Middleware de autenticación para Node.js.
  - **Enlace**: [Passport.js](http://www.passportjs.org/)
- **bcrypt.js**: Biblioteca para el hashing de contraseñas.
  - **Enlace**: [bcrypt.js](https://www.npmjs.com/package/bcryptjs)
- **dotenv**: Carga variables de entorno desde un archivo `.env`.
  - **Enlace**: [dotenv](https://www.npmjs.com/package/dotenv)

Estas tecnologías y herramientas forman la base de la aplicación y permiten su funcionamiento de forma correcta.

⌨️ with ❤️ by [@Didudocl](https://github.com/Didudocl)