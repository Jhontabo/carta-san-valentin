// ARCHIVO PRINCIPAL DE INICIALIZACIÓN
// Archivo: main.js
// Coordina la carga y ejecución de todos los módulos

class ValentineGame {
    constructor() {
        this.isInitialized = false;
        this.modules = {};
        this.errors = [];
    }

    // Inicializar el juego
    async init() {
        // Evitar múltiples inicializaciones
        if (this.isInitialized) {
            console.log('⚠️ El juego ya está inicializado');
            return;
        }

        try {
            console.log('🎮 Iniciando juego de San Valentín...');
            
            // NO esperar más tiempo - el DOM ya debería estar listo
            // Inicializar módulos en orden
            await this.initializeModules();
            
            // Verificar que todo esté funcionando (con tolerancia a errores)
            this.validateInitialization();
            
            // Marcar como inicializado
            this.isInitialized = true;
            
            console.log('✅ Juego de San Valentín inicializado correctamente');
            this.showReadyMessage();

        } catch (error) {
            console.error('❌ Error al inicializar el juego:', error);
            this.handleInitializationError(error);
        }
    }

    // Esperar a que el DOM esté listo (ya no se usa)
    waitForDOM() {
        return new Promise((resolve) => {
            if (document.readyState !== 'loading') {
                resolve();
            } else {
                document.addEventListener('DOMContentLoaded', resolve);
            }
        });
    }

    // Inicializar todos los módulos
    async initializeModules() {
        console.log('📦 Cargando módulos...');

        // Módulo de configuración (ya cargado via script tag)
        this.validateConfig();

        // Módulo de animaciones (ya cargado via script tag)
        this.validateAnimations();

        // Módulo de interfaz (ya cargado via script tag)
        this.validateUI();

        console.log('✅ Todos los módulos cargados');
    }

    // Validar configuración
    validateConfig() {
        if (!window.ValentineConfig) {
            console.error('❌ Módulo de configuración no encontrado');
            throw new Error('Módulo de configuración no encontrado');
        }
        
        this.modules.config = window.ValentineConfig;
        console.log('✅ Configuración validada');
    }

    // Validar animaciones
    validateAnimations() {
        if (!window.ValentineAnimations) {
            console.error('❌ Módulo de animaciones no encontrado');
            throw new Error('Módulo de animaciones no encontrado');
        }
        
        this.modules.animations = window.ValentineAnimations;
        console.log('✅ Animaciones validadas');
    }

    // Validar interfaz
    validateUI() {
        if (!window.ButtonManager) {
            console.error('❌ Módulo de interfaz no encontrado');
            throw new Error('Módulo de interfaz no encontrado');
        }
        
        this.modules.ui = window.ButtonManager;
        console.log('✅ Interfaz validada');
    }

    // Validar que todo esté funcionando
    validateInitialization() {
        // Validar elementos críticos
        const yesBtn = document.getElementById('yesBtn');
        const noBtn = document.getElementById('noBtn');
        const buttonContainer = document.querySelector('.button-container');
        const mainContent = document.querySelector('.main-content');

        if (!yesBtn || !noBtn) {
            console.error('Botones no encontrados:', { yesBtn, noBtn });
            throw new Error('No se encontraron los botones principales');
        }

        if (!buttonContainer) {
            console.warn('Contenedor de botones no encontrado, pero continuando...');
        }

        if (!mainContent) {
            console.warn('Contenido principal no encontrado, pero continuando...');
        }

        // Validar que los módulos estén funcionando
        if (!this.modules.config || !this.modules.animations || !this.modules.ui) {
            console.error('Módulos no cargados:', {
                config: !!this.modules.config,
                animations: !!this.modules.animations,
                ui: !!this.modules.ui
            });
            throw new Error('Algunos módulos no se cargaron correctamente');
        }

        console.log('✅ Validación completa exitosa');
    }

    // Manejar errores de inicialización
    handleInitializationError(error) {
        console.error('Error crítico en la inicialización:', error);
        
        // Mostrar mensaje de error al usuario
        this.showErrorMessage(error);
        
        // NO intentar recuperación automática para evitar bucles de recarga
        console.log('ℹ️ Error mostrado al usuario - esperando acción manual');
    }

    // Mostrar mensaje de error
    showErrorMessage(error) {
        console.error('Detalles del error:', error);
        
        // Evitar múltiples mensajes de error
        if (document.querySelector('.valentine-error-message')) {
            return;
        }
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'valentine-error-message';
        errorDiv.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: #ff6b6b;
                color: white;
                padding: 20px;
                border-radius: 10px;
                text-align: center;
                z-index: 99999;
                font-family: Arial, sans-serif;
                max-width: 300px;
            ">
                <h3>❌ Error al cargar el juego</h3>
                <p>Verifica la consola para más detalles</p>
                <small style="display: block; margin-top: 10px; opacity: 0.8;">${error.message}</small>
                <button onclick="window.location.reload()" style="
                    margin-top: 15px;
                    padding: 8px 16px;
                    background: white;
                    color: #ff6b6b;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-weight: bold;
                ">Recargar manualmente</button>
            </div>
        `;
        document.body.appendChild(errorDiv);
    }

    // Intentar recuperación
    attemptRecovery() {
        console.log('🔄 Intentando recuperación...');
        
        // NO recargar automáticamente - solo mostrar el mensaje de error
        // El usuario puede recargar manualmente si es necesario
        console.log('ℹ️ Esperando acción del usuario para recargar...');
    }

    // Mostrar mensaje de listo
    showReadyMessage() {
        console.log('🎮 ¡Juego listo para jugar!');
        console.log('📋 Módulos cargados:');
        console.log('   - Configuración: ✅');
        console.log('   - Animaciones: ✅');
        console.log('   - Interfaz: ✅');
    }

    // Métodos de utilidad para el juego
    reset() {
        console.log('🔄 Reiniciando juego...');
        
        // Resetear estado del UI
        if (this.modules.ui) {
            this.modules.ui.reset();
        }
        
        // Recrear animaciones de fondo
        if (this.modules.animations) {
            this.modules.animations.createBackgroundElements();
        }
        
        console.log('✅ Juego reiniciado');
    }

    // Obtener información del juego
    getGameInfo() {
        return {
            isInitialized: this.isInitialized,
            modules: Object.keys(this.modules),
            state: this.modules.config?.GAME_STATE || {},
            errors: this.errors
        };
    }

    // Método para debugging
    debug() {
        console.group('🐛 Debug Information');
        console.log('Game Info:', this.getGameInfo());
        console.log('Config:', this.modules.config);
        console.log('Elements:', {
            yesBtn: document.getElementById('yesBtn'),
            noBtn: document.getElementById('noBtn'),
            buttonContainer: document.querySelector('.button-container'),
            mainContent: document.querySelector('.main-content'),
            heartAnimation: document.getElementById('heartAnimation')
        });
        console.groupEnd();
    }
}

// Crear instancia global del juego
window.ValentineGame = new ValentineGame();

// Auto-inicializar cuando se carga el script SOLO si el DOM está listo
if (document.readyState !== 'loading') {
    window.ValentineGame.init();
} else {
    document.addEventListener('DOMContentLoaded', () => {
        window.ValentineGame.init();
    });
}