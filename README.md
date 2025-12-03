# ♻️ EcoPoints — Plataforma de Reciclaje con Recompensas

EcoPoints es una aplicación web con backend en **Node.js + Express** y base de datos **SQLite**, diseñada para simular una plataforma de reciclaje en la 
que los usuarios pueden:

- Registrar reciclaje
- Acumular puntos
- Consultar su historial
- Visualizar recompensas disponibles
- Descargar comprobantes de depósito (no terminado)
- Iniciar sesión con credenciales almacenadas en base de datos

El objetivo del proyecto es mostrar el flujo completo de un sistema real:
**Frontend + Backend + Base de datos**, estructurado de manera sencilla para fines educativos.

---

## 🚀 Tecnologías utilizadas

### **Frontend**
- HTML5
- CSS3 (estilos personalizados)
- JavaScript Vanilla (sin frameworks)
- Diseño simple y funcional

### **Backend**
- Node.js
- Express.js

### **Base de datos**
- SQLite3 (archivo `ecopoints.db` local)

### **Control de versiones**
- GitHub

---

## 📂 Estructura del proyecto
Ecopoints/
├── public/
│ ├── index.html
│ ├── login.html
│ ├── css/
│ │ ├── style.css
│ │ └── login.css
│ └── js/
│ ├── app.js
│ └── login.js
├── ecopoints.db
├── server.js
├── package.json
├── package-lock.json
└── README.md


---

## 🔑 Funciones principales

### ✔ Inicio de sesión con base de datos
Sistema de login que valida usuario y contraseña desde SQLite.

### ✔ Panel del usuario
Al iniciar sesión, el usuario accede al dashboard donde puede ver:

- Puntos acumulados
- Material reciclado total (kg)
- Canjes realizados

### ✔ Registro de reciclaje
Formulario para agregar manualmente:

- Fecha  
- Peso (kg)  
- Puntos  

El sistema agrega ese registro automáticamente al historial.

### ✔ Ver recompensas
Muestra un listado de recompensas disponibles según puntos.

### ✔ Descargar comprobante
Genera un archivo `.txt` con:

- Fecha
- Peso
- Puntos

---

## 🛠 Cómo ejecutar el proyecto localmente

### 1. Clonar el repositorio

bash
git clone https://github.com/xeenz-j/Ecopoints.git
cd Ecopoints

### 2. Instalar dependencias
npm install

### 3. Ejecutar el servidor
node server.js

EL servidor se ejecutarà en:
http://localhost:3000


🌐 Despliegue recomendado

Para ejecutar este proyecto en línea (con base de datos y backend) se recomienda usar:

✔ Render.com

Permite ejecutar Node.js y SQLite sin configuración extra.




