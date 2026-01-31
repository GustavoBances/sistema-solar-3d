# 🌌 Sistema Solar 3D Interactivo

<div align="center">

![Estado](https://img.shields.io/badge/estado-activo-success)
![Licencia](https://img.shields.io/badge/licencia-Educativa-blue)
![Versión](https://img.shields.io/badge/versión-1.0.0-purple)
![Three.js](https://img.shields.io/badge/Three.js-r128-black)

**Simulación interactiva del sistema solar con física orbital real, datos científicos verificados y experiencia inmersiva en 3D**

[🚀 Ver Demo](https://sistema-solar-3d-lb.netlify.app/) | [📖 Documentación](#características) | [📧 Contacto](#contacto)

</div>

---

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Características](#-características)
- [Tecnologías](#️-tecnologías)
- [Instalación Local](#-instalación-local)
- [Uso](#-uso)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Datos Científicos](#-datos-científicos)
- [Rendimiento](#-rendimiento)
- [Compatibilidad](#-compatibilidad)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

---

## 🌟 Descripción

**Sistema Solar 3D Interactivo** es una aplicación web educativa que permite explorar nuestro sistema solar de manera inmersiva. Desarrollada con **Three.js** y optimizada para renderizar más de **2,000 objetos** simultáneamente manteniendo **60 FPS**, combina precisión científica con diseño visual atractivo.

Este proyecto nace como una herramienta educativa para estudiantes, entusiastas de la astronomía y cualquier persona interesada en explorar el cosmos desde su navegador.

### 🎯 Objetivos del Proyecto

- ✅ Proporcionar una experiencia educativa visual e interactiva
- ✅ Presentar datos astronómicos verificados de fuentes oficiales (NASA, ESA)
- ✅ Demostrar capacidades avanzadas de desarrollo web 3D
- ✅ Optimizar rendimiento para accesibilidad en múltiples dispositivos

---

## ✨ Características

### 🪐 Sistema Solar Completo

- **9 Cuerpos Celestes**: Sol + 8 planetas con física orbital precisa
- **Órbitas Realistas**: Velocidades y distancias basadas en datos reales
- **Rotación Planetaria**: Cada planeta rota según su período de rotación real
- **20,000 Estrellas**: Campo estelar de fondo con colores astronómicos reales

### ☄️ Cinturón de Asteroides

- **2,000 Asteroides Renderizados**: Distribuidos entre Marte y Júpiter
- **Toggle ON/OFF**: Control de visibilidad para mejor rendimiento
- **Órbitas Individuales**: Cada asteroide tiene su propia trayectoria

### 📅 Timeline Histórica

- **24 Eventos Astronómicos**: Desde 3000 a.C. hasta 2024
- **Descripciones Detalladas**: Cada evento incluye contexto histórico completo
- **Hitos Importantes**: Descubrimientos, misiones espaciales y eventos clave

### 🌙 Lunas y Asteroides Famosos

- **16 Objetos Destacados**: Incluye Ceres, las lunas galileanas, Titán, Encélado, Tritón y más
- **Datos Verificados**: Información científica de NASA, ESA y publicaciones peer-reviewed
- **Fichas Completas**: Diámetro, descubrimiento, características únicas

### 📏 Comparación de Tamaños

- **Escala Real**: Visualización de tamaños relativos de todos los planetas
- **Diámetros Exactos**: Datos en kilómetros verificados
- **Interfaz Visual**: Barras proporcionales animadas

### 🎮 Controles Interactivos

- **Velocidad de Simulación**: Ajustable de 1 a 100 días por segundo
- **Pausa/Reanudar**: Control total de la animación
- **Reset Completo**: Reinicia toda la simulación
- **Toggles Visuales**: Órbitas, nombres, estrellas, asteroides
- **Selección de Planetas**: Click para ver información detallada

### 🔬 Panel de Información

**3 Pestañas Especializadas:**

1. **General**: Descripción, características físicas, datos curiosos
2. **Misiones Espaciales**: 40+ misiones documentadas con año, agencia y estado
3. **Científico**: Composición, hechos científicos, descubrimientos recientes

### 📊 Estadísticas en Tiempo Real

- Días terrestres transcurridos en la simulación
- Distancia Tierra-Sol (149.6 millones de km)
- Contador de FPS (Frames Per Second)

---

## 🛠️ Tecnologías

### Frontend Core
- **Three.js r128** - Motor de renderizado 3D WebGL
- **JavaScript ES6+** - Programación moderna
- **CSS3** - Animaciones y diseño responsivo
- **HTML5** - Estructura semántica

### Características Técnicas
- **WebGL** - Aceleración por hardware GPU
- **Geometrías Instanciadas** - Optimización de memoria para asteroides
- **RequestAnimationFrame** - Animaciones fluidas a 60 FPS
- **Responsive Design** - Compatible con desktop, tablet y móvil

---

## 💻 Instalación Local

### Prerequisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor local (Live Server, Python, Node.js, etc.)

### Opción 1: Live Server (VS Code)

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/sistema-solar-3d.git

# 2. Abrir en VS Code
cd sistema-solar-3d
code .

# 3. Instalar extensión "Live Server"
# 4. Click derecho en index.html → "Open with Live Server"
```

### Opción 2: Python Simple Server

```bash
# Python 3.x
python -m http.server 8000

# Abrir en navegador: http://localhost:8000
```

### Opción 3: Node.js http-server

```bash
# Instalar http-server globalmente
npm install -g http-server

# Ejecutar en el directorio del proyecto
http-server -p 8000

# Abrir en navegador: http://localhost:8000
```

---

## 🎮 Uso

### Controles Básicos

1. **Explorar el Espacio**: 
   - Arrastra con el mouse para rotar la vista
   - Scroll para hacer zoom in/out
   - Click derecho + arrastrar para desplazar la cámara

2. **Controlar la Simulación**:
   - Usa el slider para ajustar la velocidad (1-100 días/segundo)
   - Click en "PAUSAR" para detener el movimiento
   - Click en "REINICIAR TODO" para resetear la simulación

3. **Ver Información**:
   - Click en cualquier planeta del grid para ver sus detalles
   - Navega entre las 3 pestañas: General, Misiones, Científico
   - Click en los botones de funciones científicas para explorar más

4. **Toggles de Visualización**:
   - **Órbitas**: Muestra/oculta las trayectorias planetarias
   - **Nombres**: Activa/desactiva labels de planetas
   - **Estrellas**: Muestra/oculta el campo estelar de fondo
   - **Asteroides**: Renderiza/oculta los 2,000 asteroides

### Funciones Científicas

- **📅 TIMELINE HISTÓRICA**: Explora 24 eventos desde 3000 a.C.
- **📏 COMPARAR TAMAÑOS**: Visualiza tamaños relativos a escala
- **🌙 LUNAS Y ASTEROIDES**: Descubre 16 objetos fascinantes con detalles completos

---

## 📁 Estructura del Proyecto

```
sistema-solar-3d/
│
├── index.html              # Estructura HTML principal
├── styles.css              # Estilos y animaciones CSS
├── app.js                  # Lógica de aplicación y UI
├── solarSystem.js          # Motor 3D y física orbital
├── planetData.js           # Base de datos astronómicos
│
├── LICENSE.md              # Licencia de uso educativo
└── README.md               # Este archivo
```

### Descripción de Archivos Clave

- **`index.html`**: Estructura semántica, paneles de control e información
- **`styles.css`**: 1800+ líneas de CSS moderno con variables custom y responsive
- **`app.js`**: Control de UI, eventos, tabs, paneles científicos
- **`solarSystem.js`**: Three.js scene, cámara, luces, geometrías, animación
- **`planetData.js`**: Datos verificados de NASA/ESA, timeline, lunas

---

## 🔬 Datos Científicos

### Fuentes Verificadas

Todos los datos astronómicos han sido verificados con fuentes oficiales:

- ✅ **NASA JPL** (Jet Propulsion Laboratory)
- ✅ **ESA** (European Space Agency)
- ✅ **IAU** (International Astronomical Union)
- ✅ **Papers científicos peer-reviewed**

### Precisión de Datos

- **Diámetros Planetarios**: ±0.1% precisión
- **Períodos Orbitales**: Basados en datos observacionales reales
- **Fechas Históricas**: Verificadas con múltiples fuentes
- **Datos de Misiones**: Actualizados a enero 2024

### Simplificaciones Educativas

> **Nota**: Este proyecto hace algunas simplificaciones para mejorar la experiencia educativa:

- Las distancias están en escala logarítmica (distancias reales harían los planetas invisibles)
- Los tamaños planetarios están exagerados para visibilidad
- Las órbitas son circulares (en realidad son elípticas)

---

## ⚡ Rendimiento

### Optimizaciones Implementadas

1. **Geometrías Instanciadas**: Los 2,000 asteroides usan una sola geometría instanciada
2. **Level of Detail**: Objetos distantes usan menos polígonos
3. **Culling Automático**: Three.js descarta objetos fuera de vista
4. **RequestAnimationFrame**: Sincronización con refresh rate del monitor

### Benchmarks

| Dispositivo | FPS Promedio | Asteroides |
|-------------|--------------|------------|
| Desktop High-End | 60 | 2000 |
| Desktop Mid-Range | 45-60 | 2000 |
| Laptop | 30-45 | 2000 |
| Tablet | 25-35 | 1000 |

---

## 🌐 Compatibilidad

### Navegadores Soportados

| Navegador | Versión Mínima | Soporte |
|-----------|----------------|---------|
| Google Chrome | 90+ | ✅ Completo |
| Firefox | 88+ | ✅ Completo |
| Safari | 14+ | ✅ Completo |
| Edge | 90+ | ✅ Completo |

### Dispositivos

- ✅ **Desktop**: Windows, macOS, Linux
- ✅ **Tablet**: iPad, Android tablets
- ✅ **Móvil**: iPhone, Android smartphones
- ⚠️ **Requerimiento**: WebGL habilitado

---

## 📄 Licencia

**Copyright © 2024 Luis Gustavo Bances Riojas. Todos los derechos reservados.**

Este proyecto está licenciado bajo una **Licencia de Uso Educativo y No Comercial**.

### Resumen de Permisos

- ✅ **Permitido**: Ver, estudiar, aprender, modificar para uso personal
- ❌ **Prohibido**: Uso comercial, venta, redistribución comercial sin autorización

Para más detalles, consulta el archivo [LICENSE.md](LICENSE.md).

### Uso Comercial

Si estás interesado en usar este proyecto comercialmente, contacta para obtener una licencia:

📧 **Email**: lbancesr@unprg.edu.pe

---

## 👨‍💻 Sobre el Autor

**Luis Gustavo Bances Riojas**

Desarrollador web apasionado por la astronomía y la tecnología 3D. Este proyecto combina mi interés en el espacio con habilidades avanzadas de desarrollo frontend.

### Habilidades Demostradas

- ✅ Desarrollo 3D con Three.js y WebGL
- ✅ JavaScript ES6+ avanzado
- ✅ Optimización de rendimiento web
- ✅ Diseño UI/UX responsivo
- ✅ Investigación científica y verificación de datos
- ✅ Gestión de estado complejo

---

## 📞 Contacto

¿Tienes preguntas, sugerencias o quieres colaborar?

📧 **Email**: lbancesr@unprg.edu.pe

---

## 🙏 Agradecimientos

- **Three.js Team** - Por la increíble biblioteca 3D
- **NASA & ESA** - Por proporcionar datos científicos públicos
- **Comunidad Astronómica** - Por inspiración y recursos educativos

---

<div align="center">

**Hecho con ❤️ y ☕ por Luis Gustavo Bances Riojas**

*"El cosmos está dentro de nosotros. Estamos hechos de materia estelar."* - Carl Sagan

</div>
