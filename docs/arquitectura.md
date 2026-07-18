sena-aseo/
│
├── index.html
│   → Página de inicio de sesión del sistema. Es la única vista que no
│     contiene sidebar ni navbar.
│
├── README.md
│   → Documento con la descripción del proyecto, instrucciones de instalación,
│     tecnologías utilizadas y guía de uso.
│
├── assets/
│   │
│   ├── css/
│   │   ├── global.css
│   │   │   → Estilos generales del sistema (variables, tipografía,
│   │   │     colores, botones, tablas, formularios, etc.).
│   │   │
│   │   ├── login.css
│   │   │   → Estilos exclusivos de la pantalla de inicio de sesión.
│   │   │
│   │   ├── sidebar.css
│   │   │   → Diseño y comportamiento visual del menú lateral.
│   │   │
│   │   ├── header.css
│   │   │   → Estilos de la barra superior del sistema.
│   │   │
│   │   ├── dashboard.css
│   │   │   → Estilos propios del panel principal.
│   │   │
│   │   ├── aprendices.css
│   │   │   → Estilos del módulo de aprendices.
│   │   │
│   │   ├── turnos.css
│   │   │   → Estilos del módulo de asignación de turnos.
│   │   │
│   │   ├── reportes.css
│   │   │   → Diseño de la sección de reportes.
│   │   │
│   │   ├── comentarios.css
│   │   │   → Estilos para comentarios y observaciones.
│   │   │
│   │   ├── perfil.css
│   │   │   → Diseño de la vista del perfil del usuario.
│   │   │
│   │   └── responsive.css
│   │       → Reglas responsive para adaptar el sistema a celulares,
│   │         tablets y pantallas pequeñas.
│   │
│   ├── js/
│   │   ├── login.js
│   │   │   → Lógica del formulario de inicio de sesión y validaciones.
│   │   │
│   │   ├── sidebar.js
│   │   │   → Controla la apertura, cierre y comportamiento responsive
│   │   │     del sidebar.
│   │   │
│   │   ├── dashboard.js
│   │   │   → Funciones del panel principal.
│   │   │
│   │   ├── usuarios.js
│   │   │   → Funciones CRUD de usuarios.
│   │   │
│   │   ├── aprendices.js
│   │   │   → Funciones CRUD de aprendices.
│   │   │
│   │   ├── turnos.js
│   │   │   → Funciones para generar y administrar turnos.
│   │   │
│   │   ├── reportes.js
│   │   │   → Funciones para visualizar y exportar reportes.
│   │   │
│   │   ├── comentarios.js
│   │   │   → Gestión de comentarios y observaciones.
│   │   │
│   │   ├── perfil.js
│   │   │   → Funciones relacionadas con el perfil del usuario.
│   │   │
│   │   └── app.js
│   │       → Archivo principal donde se inicializan funciones generales
│   │         utilizadas por todo el sistema.
│   │
│   ├── img/
│   │   ├── logo.png
│   │   │   → Logo institucional del proyecto.
│   │   │
│   │   ├── avatar.png
│   │   │   → Imagen por defecto para los perfiles.
│   │   │
│   │   ├── background-login.jpg
│   │   │   → Imagen de fondo del login.
│   │   │
│   │   ├── icons/
│   │   │   → Íconos utilizados en la interfaz.
│   │   │
│   │   └── reportes/
│   │       → Evidencias fotográficas asociadas a los reportes.
│   │
│   ├── fonts/
│   │   → Fuentes personalizadas del sistema (si se utilizan).
│   │
│   └── vendor/
│       → Librerías externas descargadas localmente.
│
├── components/
│   ├── sidebar.html
│   │   → Menú lateral reutilizable.
│   │
│   ├── header.html
│   │   → Barra superior reutilizable.
│   │
│   ├── footer.html
│   │   → Pie de página del sistema.
│   │
│   ├── modal.html
│   │   → Plantilla base para ventanas modales.
│   │
│   └── loader.html
│       → Indicador de carga mientras se procesa información.
│
├── pages/
│   ├── dashboard.html
│   │   → Página principal después del inicio de sesión.
│   │
│   ├── usuarios.html
│   │   → Administración de usuarios.
│   │
│   ├── aprendices.html
│   │   → Gestión de aprendices.
│   │
│   ├── turnos.html
│   │   → Administración y generación de turnos de aseo.
│   │
│   ├── reportes.html
│   │   → Registro y consulta de reportes.
│   │
│   ├── comentarios.html
│   │   → Gestión de comentarios del sistema.
│   │
│   ├── perfil.html
│   │   → Información del usuario autenticado.
│   │
│   └── configuracion.html
│       → Configuración general del sistema.
│
├── docs/
│   ├── base-datos.sql
│   │   → Script de creación de la base de datos MySQL.
│   │
│   ├── manual-usuario.pdf
│   │   → Manual de uso del sistema.
│   │
│   ├── manual-tecnico.pdf
│   │   → Documentación técnica del proyecto.
│   │
│   └── diagramas/
│       → Diagramas UML, arquitectura, casos de uso y modelo entidad-relación.
│
└── .gitignore
    → Archivos y carpetas que Git no debe versionar.