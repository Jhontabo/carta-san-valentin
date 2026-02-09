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
            yesBtn: document.getElementById('yesBtn'),
            noBtn: document.getElementById('noBtn'),
            heartAnimation: document.getElementById('heartAnimation'),
            buttonContainer: document.querySelector('.button-container'),
            mainContent: document.querySelector('.main-content')
        };

        // Verificar elementos críticos (botones)
        const criticalElements = ['yesBtn', 'noBtn'];
        const missingCritical = criticalElements.filter(key => !this.elements[key]);
        
        if (missingCritical.length > 0) {
            console.error('Elementos críticos no encontrados:', missingCritical);
            return false;
        }

        // Verificar elementos opcionales
        const optionalElements = ['buttonContainer', 'mainContent', 'heartAnimation'];
        const missingOptional = optionalElements.filter(key => !this.elements[key]);
        
        if (missingOptional.length > 0) {
            console.warn('Elementos opcionales no encontrados:', missingOptional);
            // No es un error fatal, continuamos
        }

        console.log('✅ Elementos críticos encontrados correctamente');
        return true;
    }

    setupEventListeners() {
        const { yesBtn, noBtn } = this.elements;

        // Event listener para botón SÍ
        yesBtn.addEventListener('click', (e) => {
            console.log('Click en botón SÍ');
            e.preventDefault();
            e.stopPropagation();
            this.handleYesClick();
        });

        // Event listener para botón NO
        noBtn.addEventListener('click', (e) => {
            console.log('Click en botón NO');
            e.preventDefault();
            e.stopPropagation();
            this.handleNoClick();
        });
    }

    setupButtonProperties() {
        const { yesBtn, noBtn } = this.elements;
        
        // Asegurar que los botones sean clickeables
        yesBtn.style.pointerEvents = 'auto';
        noBtn.style.pointerEvents = 'auto';
        yesBtn.style.cursor = 'pointer';
        noBtn.style.cursor = 'pointer';
    }

    handleYesClick() {
        if (!this.state.isGameActive) return;
        
        this.state.isGameActive = false;
        
        // Verificar que el módulo de animaciones exista
        if (window.ValentineAnimations && window.ValentineAnimations.showLoveLetter) {
            window.ValentineAnimations.showLoveLetter();
        } else {
            console.error('Módulo de animaciones no disponible');
            // Fallback: mostrar mensaje simple
            this.showSimpleLoveMessage();
        }
    }

    // Mensaje simple de fallback
    showSimpleLoveMessage() {
        const { yesBtn, noBtn, buttonContainer } = this.elements;
        
        if (buttonContainer) {
            buttonContainer.style.display = 'none';
        }
        
        const message = document.createElement('div');
        message.innerHTML = `
            <div style="
                text-align: center;
                padding: 30px;
                background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
                border-radius: 20px;
                margin: 20px;
                color: #ff6b6b;
                font-family: 'Dancing Script', cursive;
                font-size: 24px;
                font-weight: 700;
            ">
                💕 ¡Sabía que dirías que sí! 💕
            </div>
        `;
        
        const mainContent = this.elements.mainContent || document.body;
        mainContent.appendChild(message);
    }

    handleNoClick() {
        if (!this.state.isGameActive) return;
        
        this.state.currentNoClicks++;
        console.log('Click en NO:', this.state.currentNoClicks);

        // Verificar si se alcanzó el límite
        if (this.state.currentNoClicks > window.ValentineConfig.MESSAGES.noMessages.length) {
            this.showFinalNoMessage();
            return;
        }

        // Actualizar mensaje del botón NO
        this.updateNoButtonText();
        
        // Crecer botón SÍ
        this.growYesButton();
        
        // Efectos adicionales
        this.createClickEffect();
    }

    updateNoButtonText() {
        const { noBtn } = this.elements;
        const messages = window.ValentineConfig.MESSAGES.noMessages;
        const messageIndex = this.state.currentNoClicks - 1;
        
        if (messages[messageIndex]) {
            noBtn.innerHTML = `<span class="btn-text">${messages[messageIndex]}</span>`;
        }
    }

    growYesButton() {
        const { yesBtn, buttonContainer } = this.elements;
        const config = window.ValentineConfig.BUTTON_CONFIG.yes;
        const screenWidth = window.innerWidth;
        const isMobile = screenWidth < window.ValentineConfig.BREAKPOINTS.mobile;
        
        // Calcular nuevas dimensiones
        const baseWidth = isMobile ? config.mobileWidth : config.baseWidth;
        const clickIncrement = this.state.currentNoClicks * config.clickIncrement;
        const newWidth = Math.min(baseWidth + clickIncrement, screenWidth - config.maxWidthFactor);
        const newHeight = Math.min(config.baseHeight + (clickIncrement * config.heightFactor), config.maxHeight);
        
        console.log('Botón SÍ - Clic:', this.state.currentNoClicks, 'New Width:', newWidth, 'New Height:', newHeight);

        // Aplicar estilos al botón SÍ
        this.applyYesButtonStyles(yesBtn, newWidth, newHeight);
        
        // Ajustar contenedor
        this.adjustButtonContainer(buttonContainer, newHeight);
        
        // Aplicar efectos visuales progresivos
        this.applyProgressiveEffects(yesBtn);
        
        // Encoger botón NO
        this.shrinkNoButton();
        
        // Vibración si está disponible
        this.triggerVibration(newWidth);
    }

    applyYesButtonStyles(button, width, height) {
        button.style.setProperty('width', `${width}px`, 'important');
        button.style.setProperty('height', `${height}px`, 'important');
        button.style.setProperty('min-height', `${height}px`, 'important');
        button.style.setProperty('max-width', `${window.innerWidth - 40}px`, 'important');
        button.style.transition = 'all 0.3s ease';
        button.style.borderRadius = height > 60 ? '12px' : '25px';
    }

    adjustButtonContainer(container, buttonHeight) {
        if (this.state.currentNoClicks >= 1) {
            container.style.flexDirection = 'column';
            container.style.alignItems = 'center';
            container.style.transition = 'all 0.3s ease';
        }
    }

    applyProgressiveEffects(button) {
        const styles = window.ValentineConfig.STYLES;
        const clickCount = this.state.currentNoClicks;
        
        // Efectos después de 2 clics
        if (clickCount > 2) {
            button.style.background = styles.gradients.excited;
            button.style.boxShadow = `0 0 30px ${styles.colors.shadow}`;
            button.style.border = `3px solid ${styles.colors.accent}`;
        }

        // Efectos después de 4 clics
        if (clickCount > 4) {
            button.style.animation = 'pulse 0.6s infinite';
        }

        // Efectos después de 6 clics
        if (clickCount > 6) {
            button.style.animation = 'pulse 0.4s infinite, glow 0.8s infinite';
            button.style.fontSize = '18px';
        }
    }

    shrinkNoButton() {
        const { noBtn } = this.elements;
        const config = window.ValentineConfig.BUTTON_CONFIG.no;
        
        const noWidth = Math.max(config.minSize, config.baseWidth - (this.state.currentNoClicks * config.shrinkFactor));
        const noHeight = Math.max(config.minHeight, config.baseHeight - (this.state.currentNoClicks * config.heightShrink));
        
        noBtn.style.setProperty('width', `${noWidth}px`, 'important');
        noBtn.style.setProperty('height', `${noHeight}px`, 'important');
        noBtn.style.opacity = Math.max(0.3, 1 - (this.state.currentNoClicks * 0.08));
        noBtn.style.transition = 'all 0.3s ease';
    }

    triggerVibration(buttonWidth) {
        if (navigator.vibrate && buttonWidth > 300) {
            navigator.vibrate(window.ValentineConfig.EFFECTS.vibration.short);
        }
    }

    createClickEffect() {
        const { noBtn } = this.elements;
        const effect = document.createElement('div');
        
        effect.style.position = 'fixed';
        effect.style.left = noBtn.offsetLeft + noBtn.offsetWidth / 2 + 'px';
        effect.style.top = noBtn.offsetTop + noBtn.offsetHeight / 2 + 'px';
        effect.style.width = '20px';
        effect.style.height = '20px';
        effect.style.border = '2px solid white';
        effect.style.borderRadius = '50%';
        effect.style.pointerEvents = 'none';
        effect.style.animation = 'ripple 0.6s ease-out';

        document.body.appendChild(effect);

        setTimeout(() => {
            effect.remove();
        }, 600);
    }

    showFinalNoMessage() {
        const { yesBtn, noBtn } = this.elements;
        const messages = window.ValentineConfig.MESSAGES;
        
        // Crear mensaje especial
        const message = document.createElement('div');
        message.className = 'final-no-message';
        message.innerHTML = `
            <div class="message-content">
                <h2>${messages.finalNoMessage}</h2>
                <p>${messages.finalNoSubtext}</p>
            </div>
        `;
        
        document.body.appendChild(message);
        
        // Hacer que el botón Sí ocupe casi toda la pantalla
        yesBtn.style.transition = 'all 1s ease-in-out';
        yesBtn.style.position = 'fixed';
        yesBtn.style.top = '50%';
        yesBtn.style.left = '50%';
        yesBtn.style.transform = 'translate(-50%, -50%)';
        yesBtn.style.width = '80vw';
        yesBtn.style.height = '150px';
        yesBtn.style.fontSize = '24px';
        yesBtn.style.zIndex = '9999';
        yesBtn.style.animation = 'pulse 0.5s infinite, glow 0.8s infinite';
        
        // Ocultar botón NO
        noBtn.style.display = 'none';
        
        // Remover mensaje después de 3 segundos
        setTimeout(() => {
            message.remove();
        }, 3000);
    }

    // Método para resetear el estado del juego
    reset() {
        this.state = { ...window.ValentineConfig.GAME_STATE };
        console.log('Juego reseteado');
    }
}

// Crear instancia global del manejador de botones
window.ButtonManager = new ButtonManager();