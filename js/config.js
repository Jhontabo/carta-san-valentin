// CONFIGURACIÓN DEL JUEGO
// Archivo: config.js
// Contiene todas las variables y configuraciones principales

// Configuración de mensajes
const MESSAGES = {
    noMessages: [
        'No',
        '¿Segura?',
        'Piénsalo mejor',
        'Última oportunidad',
        'Por favor...',
        'No me digas eso',
        'Mi corazón...'
    ],
    finalNoMessage: 'esa no es la respuesta bebe 💔',
    finalNoSubtext: 'El botón SÍ está esperando...',
    yesMessage: '¡POR FIN DIJISTE QUE SÍ! 💕'
};

// Configuración de símbolos para animaciones
const SYMBOLS = {
    hearts: ['❤️', '💕', '💖', '💗', '💓', '💝'],
    flowers: ['🌹', '🌸', '🌷', '🌺', '🌻', '🌼', '💐'],
    sparkles: ['✨'],
    celebration: ['❤️', '💕', '💖', '💗', '💓', '💝', '🎉', '🎊']
};

// Configuración de animaciones
const ANIMATION_CONFIG = {
    hearts: {
        count: 12,
        minSize: 15,
        maxSize: 35,
        minDuration: 3,
        maxDuration: 6
    },
    flowers: {
        count: 15,
        minSize: 18,
        maxSize: 43,
        minDuration: 4,
        maxDuration: 7
    },
    sparkles: {
        count: 20,
        minSize: 10,
        maxSize: 25,
        minDuration: 2,
        maxDuration: 6
    },
    explosion: {
        hearts: 50,
        flowers: 40
    }
};

// Configuración de botones
const BUTTON_CONFIG = {
    yes: {
        baseWidth: 200,
        baseHeight: 50,
        mobileWidth: 250,
        clickIncrement: 20,
        maxWidthFactor: 40,
        maxHeight: 80,
        heightFactor: 0.4
    },
    no: {
        baseWidth: 200,
        baseHeight: 50,
        minSize: 80,
        minHeight: 35,
        shrinkFactor: 12,
        heightShrink: 2
    }
};

// Configuración de breakpoints
const BREAKPOINTS = {
    mobile: 768,
    smallMobile: 375
};

// Configuración de estados del juego
const GAME_STATE = {
    maxNoClicks: 7,
    currentNoClicks: 0,
    currentYesClicks: 0,
    isGameActive: true
};

// Configuración de colores y estilos
const STYLES = {
    gradients: {
        yes: 'linear-gradient(45deg, #4ecdc4, #6ee8df)',
        no: 'linear-gradient(45deg, #ff6b6b, #ff8e8e)',
        excited: 'linear-gradient(45deg, #ff6b6b, #ff8e8e, #ff6b6b)',
        final: 'linear-gradient(45deg, #ff6b6b, #ff8e8e, #ffb3b3)'
    },
    colors: {
        primary: '#ff6b6b',
        secondary: '#ff8e8e',
        accent: '#ff4757',
        text: 'white',
        shadow: 'rgba(255, 107, 107, 0.6)'
    }
};

// Configuración de efectos
const EFFECTS = {
    vibration: {
        short: 50,
        pattern: [100, 50, 100, 50, 200]
    },
    animation: {
        fast: '0.3s',
        normal: '0.5s',
        slow: '1s'
    }
};

// Exportar configuraciones (para uso modular)
window.ValentineConfig = {
    MESSAGES,
    SYMBOLS,
    ANIMATION_CONFIG,
    BUTTON_CONFIG,
    BREAKPOINTS,
    GAME_STATE,
    STYLES,
    EFFECTS
};