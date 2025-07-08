// Calendario Otoñal - JavaScript
class CalendarioOtono {
    constructor() {
        this.fechaActual = new Date();
        this.mesActual = this.fechaActual.getMonth();
        this.anioActual = this.fechaActual.getFullYear();
        this.diaActual = this.fechaActual.getDate();
        
        this.meses = [
            'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
            'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
        ];
        
        // Feriados argentinos más comunes
        this.feriados = [
            '2025-01-01', // Año Nuevo
            '2025-02-24', // Carnaval
            '2025-02-25', // Carnaval
            '2025-03-24', // Día de la Memoria
            '2025-04-02', // Día del Veterano
            '2025-04-18', // Viernes Santo
            '2025-05-01', // Día del Trabajador
            '2025-05-25', // Revolución de Mayo
            '2025-06-16', // Día de Güemes
            '2025-06-20', // Día de la Bandera
            '2025-07-09', // Día de la Independencia
            '2025-08-17', // Paso a la Inmortalidad del Gral. San Martín
            '2025-10-12', // Día del Respeto a la Diversidad Cultural
            '2025-11-20', // Día de la Soberanía Nacional
            '2025-12-08', // Inmaculada Concepción
            '2025-12-25'  // Navidad
        ];
        
        this.inicializar();
    }
    
    inicializar() {
        this.obtenerElementos();
        this.configurarEventos();
        this.mostrarCalendario();
    }
    
    obtenerElementos() {
        this.elementoMes = document.getElementById('month');
        this.elementoAnio = document.getElementById('year');
        this.elementoDias = document.getElementById('calendar-days');
        this.botonAnterior = document.getElementById('prev-month');
        this.botonSiguiente = document.getElementById('next-month');
    }
    
    configurarEventos() {
        this.botonAnterior.addEventListener('click', () => this.mesAnterior());
        this.botonSiguiente.addEventListener('click', () => this.mesSiguiente());
    }
    
    esBisiesto(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
    
    diasEnMes(mes, anio) {
        const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (mes === 1 && this.esBisiesto(anio)) {
            return 29;
        }
        return diasPorMes[mes];
    }
    
    primerDiaSemana(mes, anio) {
        const fecha = new Date(anio, mes, 1);
        const dia = fecha.getDay();
        return dia === 0 ? 6 : dia - 1; // Convertir domingo (0) a 6, lunes (1) a 0
    }
    
    formatearFecha(dia, mes, anio) {
        const mesFormateado = (mes + 1).toString().padStart(2, '0');
        const diaFormateado = dia.toString().padStart(2, '0');
        return `${anio}-${mesFormateado}-${diaFormateado}`;
    }
    
    esFeriado(fecha) {
        return this.feriados.includes(fecha);
    }
    
    esHoy(dia, mes, anio) {
        return dia === this.diaActual && 
               mes === this.fechaActual.getMonth() && 
               anio === this.fechaActual.getFullYear();
    }
    
    esFinDeSemana(dia, mes, anio) {
        const fecha = new Date(anio, mes, dia);
        const diaSemana = fecha.getDay();
        return diaSemana === 0 || diaSemana === 6; // Domingo o Sábado
    }
    
    mostrarCalendario() {
        // Actualizar encabezado
        this.elementoMes.textContent = this.meses[this.mesActual];
        this.elementoAnio.textContent = this.anioActual;
        
        // Limpiar días anteriores
        this.elementoDias.innerHTML = '';
        
        const diasEnMesActual = this.diasEnMes(this.mesActual, this.anioActual);
        const primerDia = this.primerDiaSemana(this.mesActual, this.anioActual);
        
        // Días del mes anterior (para completar la primera semana)
        const mesAnterior = this.mesActual === 0 ? 11 : this.mesActual - 1;
        const anioMesAnterior = this.mesActual === 0 ? this.anioActual - 1 : this.anioActual;
        const diasMesAnterior = this.diasEnMes(mesAnterior, anioMesAnterior);
        
        for (let i = primerDia - 1; i >= 0; i--) {
            const dia = diasMesAnterior - i;
            const elementoDia = this.crearElementoDia(dia, mesAnterior, anioMesAnterior, true);
            this.elementoDias.appendChild(elementoDia);
        }
        
        // Días del mes actual
        for (let dia = 1; dia <= diasEnMesActual; dia++) {
            const elementoDia = this.crearElementoDia(dia, this.mesActual, this.anioActual, false);
            this.elementoDias.appendChild(elementoDia);
        }
        
        // Días del mes siguiente (para completar la última semana)
        const diasMostrados = primerDia + diasEnMesActual;
        const diasRestantes = 42 - diasMostrados; // 6 semanas x 7 días
        
        const mesSiguiente = this.mesActual === 11 ? 0 : this.mesActual + 1;
        const anioMesSiguiente = this.mesActual === 11 ? this.anioActual + 1 : this.anioActual;
        
        for (let dia = 1; dia <= diasRestantes; dia++) {
            const elementoDia = this.crearElementoDia(dia, mesSiguiente, anioMesSiguiente, true);
            this.elementoDias.appendChild(elementoDia);
        }
        
        // Aplicar estilos especiales después de crear todos los días
        this.aplicarEstilosEspeciales();
    }
    
    crearElementoDia(dia, mes, anio, otroMes) {
        const elementoDia = document.createElement('div');
        elementoDia.className = 'calendar__item';
        elementoDia.textContent = dia;
        
        const fechaCompleta = this.formatearFecha(dia, mes, anio);
        elementoDia.setAttribute('data-date', fechaCompleta);
        elementoDia.setAttribute('data-day', dia);
        
        // Aplicar clase si es de otro mes
        if (otroMes) {
            elementoDia.classList.add('calendar__day--other-month');
        }
        
        return elementoDia;
    }
    
    aplicarEstilosEspeciales() {
        const elementosDia = document.querySelectorAll('.calendar__item');
        
        elementosDia.forEach(elemento => {
            const fecha = elemento.getAttribute('data-date');
            const dia = parseInt(elemento.getAttribute('data-day'));
            const [anio, mes] = fecha.split('-').map(Number);
            const mesIndex = mes - 1;
            
            // No aplicar estilos especiales a días de otros meses
            if (elemento.classList.contains('calendar__day--other-month')) {
                return;
            }
            
            // Marcar día actual
            if (this.esHoy(dia, mesIndex, anio)) {
                elemento.classList.add('calendar__day--today');
            }
            
            // Marcar feriados
            if (this.esFeriado(fecha)) {
                elemento.classList.add('calendar__day--holiday');
            }
            
            // Marcar fines de semana
            if (this.esFinDeSemana(dia, mesIndex, anio)) {
                elemento.classList.add('calendar__day--weekend');
            }
        });
    }
    
    mesAnterior() {
        this.mesActual--;
        if (this.mesActual < 0) {
            this.mesActual = 11;
            this.anioActual--;
        }
        this.mostrarCalendario();
    }
    
    mesSiguiente() {
        this.mesActual++;
        if (this.mesActual > 11) {
            this.mesActual = 0;
            this.anioActual++;
        }
        this.mostrarCalendario();
    }
}

// Inicializar el calendario cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    new CalendarioOtono();
    
    // Mensaje de bienvenida en consola
    console.log('🍂 Calendario Otoñal cargado correctamente! 🍂');
    console.log('Características:');
    console.log('✅ Detección de años bisiestos');
    console.log('✅ Marcado del día actual');
    console.log('✅ Marcado de feriados argentinos');
    console.log('✅ Marcado de fines de semana');
    console.log('✅ Navegación entre meses');
    console.log('✅ Diseño responsivo otoñal');
});