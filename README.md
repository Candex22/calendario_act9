# Calendario 

Un calendario interactivo desarrollado en HTML, CSS y JavaScript vanilla. El calendario incluye funcionalidades especiales para días festivos argentinos y efectos visuales únicos.

## ✨ Características

- **Diseño responsivo** con gradientes calidos
- **Navegación entre meses** con botones intuitivos
- **Destacado del día actual** con animaciones especiales
- **Feriados argentinos** marcados con efectos visuales
- **Diferenciación de fines de semana** con colores distintivos
- **Días de otros meses** mostrados con opacidad reducida
- **Animaciones CSS** fluidas y atractivas

## 🎨 Efectos Visuales

### Día Actual
- Resaltado con gradiente verde
- Animación de pulso y brillo
- Estrella animada en la esquina
- Borde rotativo con gradiente

### Feriados
- Gradiente rosado-amarillo
- Animación de brillo y rebote
- Emoji de celebración (🎉)
- Efecto de destello

### Día Especial (Hoy + Feriado)
- Combinación de efectos del día actual y feriado
- Gradiente tricolor único
- Emoji especial (🎊)
- Escala aumentada

## 🗓️ Feriados Incluidos

El calendario incluye los principales feriados argentinos para 2025:

- **Enero**: Año Nuevo
- **Febrero**: Carnaval (24-25)
- **Marzo**: Día de la Memoria (24)
- **Abril**: Día del Veterano (2), Viernes Santo (18)
- **Mayo**: Día del Trabajador (1), Revolución de Mayo (25)
- **Junio**: Día de Güemes (16), Día de la Bandera (20)
- **Julio**: Día de la Independencia (9)
- **Agosto**: Paso a la Inmortalidad del Gral. San Martín (17)
- **Octubre**: Día del Respeto a la Diversidad Cultural (12)
- **Noviembre**: Día de la Soberanía Nacional (20)
- **Diciembre**: Inmaculada Concepción (8), Navidad (25)

## 🚀 Instalación

1. Clona o descarga los archivos del proyecto
2. Asegúrate de tener los tres archivos en el mismo directorio:
   - `index.html`
   - `style.css`
   - `script.js`
3. Abre `index.html` en tu navegador web

## 📱 Compatibilidad

- **Navegadores**: Chrome, Firefox, Safari, Edge (versiones modernas)
- **Dispositivos**: Desktop, tablet y móvil
- **Resoluciones**: Responsive design que se adapta a diferentes tamaños de pantalla

## 🛠️ Estructura del Código

### HTML (`index.html`)
- Estructura semántica del calendario
- Referencias a CSS y JavaScript
- Configuración en español

### CSS (`style.css`)
- Estilos base con tema otoñal
- Animaciones CSS avanzadas
- Media queries para responsividad
- Efectos especiales para diferentes tipos de días

### JavaScript (`script.js`)
- Clase `CalendarioOtono` que maneja toda la lógica
- Cálculo automático de días del mes
- Detección de años bisiestos
- Manejo de eventos de navegación
- Aplicación dinámica de estilos especiales

## 🎯 Funcionalidades Principales

### Navegación
- Botones de flecha para cambiar mes
- Actualización automática del encabezado
- Transiciones suaves entre meses

### Lógica del Calendario
- Cálculo correcto de días por mes
- Manejo de años bisiestos
- Posicionamiento correcto del primer día del mes
- Completado con días de meses adyacentes

### Detección de Fechas Especiales
- Identificación automática del día actual
- Verificación de feriados por fecha
- Detección de fines de semana
- Aplicación de estilos correspondientes

## 🎨 Personalización

### Colores
Los colores principales se pueden modificar en las variables CSS:
- Gradiente de fondo: `#ffeaa7` → `#fdcb6e` → `#e17055`
- Día actual: `#00b894` → `#00a085`
- Feriados: `#e84393` → `#fd79a8` → `#fdcb6e`

### Agregar Feriados
Para agregar nuevos feriados, modifica el array `feriados` en el constructor:

```javascript
this.feriados = [
    '2025-01-01', // Año Nuevo
    '2025-12-31', // Nuevo feriado
    // ... más fechas
];
```

### Cambiar Idioma
Para cambiar el idioma, modifica el array `meses` y los días de la semana en el HTML:

```javascript
this.meses = [
    'January', 'February', 'March', // ... en inglés
];
```

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos avanzados, gradientes, animaciones
- **JavaScript ES6+**: Clases, arrow functions, destructuring
- **Grid Layout**: Distribución del calendario
- **Flexbox**: Alineación de elementos

## 📄 Licencia

Este proyecto está bajo licencia MIT. Puedes usar, modificar y distribuir el código libremente.
