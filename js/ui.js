// MANEJO DE INTERFAZ Y BOTONES
// Archivo: ui.js
// Contiene toda la lógica de botones y eventos de usuario

class ButtonManager {
    constructor() {
        this.elements = {};
        this.state = { ...window.ValentineConfig.GAME_STATE };
        this.init();
    }

    init() {
        this.cacheElements();
        this.setupEventListeners();
        this.setupButtonProperties();
    }

    cacheElements() {
        this.elements = {
            showLetterBtn: document.getElementById('showLetterBtn'),
            heartAnimation: document.getElementById('heartAnimation'),
            friendshipMessage: document.querySelector('.friendship-message'),
            mainContent: document.querySelector('.main-content')
        };

        // Verificar elemento crítico
        if (!this.elements.showLetterBtn) {
            console.error('Botón de mensaje de amistad no encontrado');
            return false;
        }

        // Verificar elementos opcionales
        const optionalElements = ['friendshipMessage', 'mainContent', 'heartAnimation'];
        const missingOptional = optionalElements.filter(key => !this.elements[key]);
        
        if (missingOptional.length > 0) {
            console.warn('Elementos opcionales no encontrados:', missingOptional);
            // No es un error fatal, continuamos
        }

        console.log('✅ Elemento crítico encontrado correctamente');
        return true;
    }

    setupEventListeners() {
        const { showLetterBtn } = this.elements;

        // Event listener para botón de mostrar carta
        showLetterBtn.addEventListener('click', (e) => {
            console.log('Click en botón de amistad');
            e.preventDefault();
            e.stopPropagation();
            this.handleShowLetterClick();
        });
    }

    setupButtonProperties() {
        const { showLetterBtn } = this.elements;
        
        // Asegurar que el botón sea clickeable
        showLetterBtn.style.pointerEvents = 'auto';
        showLetterBtn.style.cursor = 'pointer';
    }

    handleShowLetterClick() {
        if (!this.state.isGameActive) return;
        
        this.state.isGameActive = false;
        
        // Verificar que el módulo de animaciones exista
        if (window.ValentineAnimations && window.ValentineAnimations.showLoveLetter) {
            window.ValentineAnimations.showLoveLetter();
        } else {
            console.error('Módulo de animaciones no disponible');
            // Fallback: mostrar mensaje simple
            this.showSimpleFriendshipMessage();
        }
    }

    // Mensaje simple de fallback
    showSimpleFriendshipMessage() {
        const { showLetterBtn, friendshipMessage } = this.elements;
        
        if (friendshipMessage) {
            friendshipMessage.style.display = 'none';
        }
        
        const message = document.createElement('div');
        message.innerHTML = `
            <div style="
                text-align: center;
                padding: 30px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-radius: 20px;
                margin: 20px;
                color: white;
                font-family: 'Dancing Script', cursive;
                font-size: 24px;
                font-weight: 700;
            ">
                💙 Gracias por ser una gran amiga 💙
            </div>
        `;
        
        const mainContent = this.elements.mainContent || document.body;
        mainContent.appendChild(message);
    }



    // Método para resetear el estado del juego
    reset() {
        this.state = { ...window.ValentineConfig.GAME_STATE };
        console.log('Juego reseteado');
    }
}

// Crear instancia global del manejador de botones
// Esperar a que el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        console.log('🎮 Creando ButtonManager...');
        window.ButtonManager = new ButtonManager();
        console.log('✅ ButtonManager creado');
    });
} else {
    console.log('🎮 Creando ButtonManager (DOM ya listo)...');
    window.ButtonManager = new ButtonManager();
    console.log('✅ ButtonManager creado');
}