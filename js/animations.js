// ANIMACIONES Y EFECTOS VISUALES
// Archivo: animations.js
// Contiene todas las animaciones y efectos visuales

class AnimationManager {
    constructor() {
        this.init();
    }

    init() {
        this.createBackgroundElements();
        this.setupAnimationStyles();
    }

    // Crear elementos de fondo (corazones, flores, brillis)
    createBackgroundElements() {
        this.createHearts();
        this.createFlowers();
        this.createSparkles();
    }

    createHearts() {
        const heartsContainer = document.querySelector('.hearts');
        if (!heartsContainer) return;

        const config = window.ValentineConfig.ANIMATION_CONFIG.hearts;
        const symbols = window.ValentineConfig.SYMBOLS.hearts;

        for (let i = 0; i < config.count; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            
            // Posición aleatoria
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            
            // Tamaño aleatorio
            heart.style.fontSize = (Math.random() * (config.maxSize - config.minSize) + config.minSize) + 'px';
            
            // Animación aleatoria
            heart.style.animationDelay = Math.random() * 3 + 's';
            heart.style.animationDuration = (Math.random() * (config.maxDuration - config.minDuration) + config.minDuration) + 's';
            
            heartsContainer.appendChild(heart);
        }
    }

    createFlowers() {
        const flowersContainer = document.querySelector('.flowers');
        if (!flowersContainer) return;

        const config = window.ValentineConfig.ANIMATION_CONFIG.flowers;
        const symbols = window.ValentineConfig.SYMBOLS.flowers;

        for (let i = 0; i < config.count; i++) {
            const flower = document.createElement('div');
            flower.className = 'flower';
            flower.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            
            // Posición aleatoria
            flower.style.left = Math.random() * 100 + '%';
            flower.style.top = Math.random() * 100 + '%';
            
            // Tamaño aleatorio
            flower.style.fontSize = (Math.random() * (config.maxSize - config.minSize) + config.minSize) + 'px';
            
            // Animación aleatoria
            flower.style.animationDelay = Math.random() * 4 + 's';
            flower.style.animationDuration = (Math.random() * (config.maxDuration - config.minDuration) + config.minDuration) + 's';
            
            flowersContainer.appendChild(flower);
        }
    }

    createSparkles() {
        const sparklesContainer = document.querySelector('.sparkles');
        if (!sparklesContainer) return;

        const config = window.ValentineConfig.ANIMATION_CONFIG.sparkles;
        const symbols = window.ValentineConfig.SYMBOLS.sparkles;

        for (let i = 0; i < config.count; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.textContent = symbols[0];
            
            // Posición aleatoria
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            
            // Tamaño aleatorio
            sparkle.style.fontSize = (Math.random() * (config.maxSize - config.minSize) + config.minSize) + 'px';
            
            // Animación aleatoria
            sparkle.style.animationDelay = Math.random() * 5 + 's';
            sparkle.style.animationDuration = (Math.random() * (config.maxDuration - config.minDuration) + config.minDuration) + 's';
            
            sparklesContainer.appendChild(sparkle);
        }
    }

     // Mostrar carta de amistad con animaciones
    showLoveLetter() {
        // Prevenir duplicados
        if (document.querySelector('.love-letter')) {
            console.log('La carta ya existe, omitiendo...');
            return;
        }

        const mainContent = document.querySelector('.main-content');
        const friendshipMessage = document.querySelector('.friendship-message');
        
        if (!mainContent || !friendshipMessage) return;

        // Ocultar botón de amistad
        friendshipMessage.style.display = 'none';

        // Crear explosión de flores primero
        this.createFlowersExplosion();

        // Crear la carta
        const letter = this.createLoveLetter();
        mainContent.appendChild(letter);

        // Animar la aparición
        setTimeout(() => {
            this.animateLetterAppearance(letter);
            this.createCelebrationEffects();
        }, 100);

        // Vibración de celebración
        this.triggerCelebrationVibration();
    }

    createLoveLetter() {
        const letter = document.createElement('div');
        letter.className = 'love-letter';
        letter.innerHTML = `
            <div class="letter-content">
                <div class="letter-header">
                    <h3 class="valentine-text">💙 Feliz Día del Amistad, Marbel 💙</h3>
                </div>
                <div class="letter-body">
                   



<p class="letter-text">

💙Querida Marbel, mi flaca… aunque ahora solo Marbel💙<br><br>

💙 Feliz Día de la Amistad 💙<br><br>

Hola… no sé muy bien cómo empezar esto. Es la primera vez que escribo algo así, así que solo voy a decir lo que siento, sin reclamos, sin reproches… solo desde lo que me nace.<br><br>

Recuerdo la primera vez que recibí un mensaje tuyo. No sé si fue un error o si el destino simplemente quiso que pasara, pero desde ahí algo cambió. Y la primera vez que te vi en persona… estabas nerviosa, y yo no entendía por qué. Ese momento vive en mi memoria. Yo estaba pasando por un tiempo difícil, muy oscuro… y sin saberlo fuiste una pequeña luz. Hiciste mis días más llevaderos cuando más lo necesitaba.<br><br>

Sí, me dolió cuando elegiste a alguien más. No lo voy a negar. Pero también reconozco que yo tuve mis errores. No todo fue perfecto, y asumir eso también es parte de crecer. El tiempo pasa… y la vida sigue, aunque a veces uno quisiera que se detuviera un poco más.<br><br>

Hubo días en los que me preguntaba si de verdad me quisiste. Quiero creer que sí. Y si en algún momento fue real, con eso me basta. Porque lo que yo sentí sí fue real.<br><br>

Hoy ya no siento rabia, ni resentimiento. Solo agradecimiento. Porque me diste una dosis de realidad que necesitaba para madurar, para entender muchas cosas. No eres una mala mujer. Solo tomaste las decisiones que creíste correctas. Todos nos equivocamos, todos aprendemos.<br><br>

Y aunque no sea conmigo, deseo que seas feliz. De verdad. Que alguien te cuide, te valore, te abrace fuerte y te dé todo lo que mereces. Creo que eso es amar: querer que el otro esté bien, incluso si no es a tu lado.<br><br>

Tal vez soy muy romántico, tal vez demasiado sensible… pero soy así. No me gusta guardarme lo que siento, porque después uno se arrepiente. La vida es tan frágil que mañana puede ser tarde para decir lo que hoy pesa en el corazón.<br><br>

No somos nada ahora, y aun así te escribo esto. Pero no lo hago para volver atrás, sino para cerrar el ciclo con paz. Me quedo con lo bonito, con lo que fue, aunque haya sido corto. Para mí fue suficiente para marcarme.<br><br>

Eres una gran mujer. Una gran hija, una gran amiga, una gran persona. No permitas que nadie te haga creer lo contrario.<br><br>

Te deseo un resto de vida lleno de cosas buenas. Y yo estaré aquí, recordando con un poco de nostalgia… pero también con gratitud.<br><br>

Feliz Día del Amor y la Amistad, mi niña hermosa.<br><br>

Con cariño sincero,<br>
tu niño, tu nene que te quiere mucho,<br>
Jhon 💙

</p>


                <div class="music-section">
                    <p class="music-text">💙 Esta es la canción que me recuerda a ti 💙</p>
                    <a href="https://www.youtube.com/watch?v=gDyjzFwrW5o" target="_blank" class="music-link">
                        <div class="music-button">
                            <span class="music-icon">🎵</span>
                            <span class="music-label">Escuchar tu canción</span>
                        </div>
                    </a>
                </div>

                </div>
                <div class="hearts-decoration">
                    <span class="heart-icon">💙</span>
                    <span class="heart-icon">💕</span>
                    <span class="heart-icon">💗</span>
                    <span class="heart-icon">💖</span>
                    <span class="heart-icon">💝</span>
                </div>
            </div>
        `;
        return letter;
    }

    animateLetterAppearance(letter) {
        letter.style.animation = 'slideInUp 1s ease-out';
        letter.style.opacity = '1';
        letter.style.transform = 'translateY(0)';
    }

    createCelebrationEffects() {
        this.createHeartsExplosion();
        this.createMiniConfetti();
        this.createFloatingFlowers();
    }

    createFlowersExplosion() {
        const container = document.body;
        const symbols = window.ValentineConfig.SYMBOLS.flowers;
        const count = window.ValentineConfig.ANIMATION_CONFIG.explosion.flowers;

        for (let i = 0; i < count; i++) {
            const flower = document.createElement('div');
            flower.className = 'flower-explosion';
            flower.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            
            // Posición central
            flower.style.left = '50%';
            flower.style.top = '50%';
            
            // Tamaño aleatorio
            flower.style.fontSize = (Math.random() * 20 + 25) + 'px';
            
            // Color aleatorio
            flower.style.color = `hsl(${Math.random() * 60 + 300}, 70%, 60%)`;
            flower.style.zIndex = '2000';
            
            // Dirección de explosión
            const spreadX = (Math.random() - 0.5) * window.innerWidth * 0.8;
            const spreadY = (Math.random() - 0.5) * window.innerHeight * 0.8;
            flower.style.setProperty('--x', spreadX + 'px');
            flower.style.setProperty('--y', spreadY + 'px');
            
            container.appendChild(flower);

            // Limpiar después de la animación
            setTimeout(() => flower.remove(), 1500);
        }
    }

    createHeartsExplosion() {
        const container = document.body;
        const symbols = window.ValentineConfig.SYMBOLS.celebration;
        const count = window.ValentineConfig.ANIMATION_CONFIG.explosion.hearts;

        for (let i = 0; i < count; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart-explosion';
            heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            
            // Posición central
            heart.style.left = '50%';
            heart.style.top = '50%';
            
            // Dirección de explosión
            const spreadX = (Math.random() - 0.5) * window.innerWidth * 0.8;
            const spreadY = (Math.random() - 0.5) * window.innerHeight * 0.8;
            heart.style.setProperty('--x', spreadX + 'px');
            heart.style.setProperty('--y', spreadY + 'px');
            heart.style.zIndex = '2000';
            
            container.appendChild(heart);

            // Limpiar después de la animación
            setTimeout(() => heart.remove(), 1000);
        }
    }

    createFloatingFlowers() {
        const symbols = window.ValentineConfig.SYMBOLS.flowers;
        const count = 20;

        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const flower = document.createElement('div');
                flower.className = 'floating-flower';
                flower.textContent = symbols[Math.floor(Math.random() * symbols.length)];
                
                // Posición aleatoria
                flower.style.left = Math.random() * 100 + '%';
                flower.style.bottom = '-50px';
                
                // Tamaño y color aleatorios
                flower.style.fontSize = (Math.random() * 15 + 20) + 'px';
                flower.style.color = `hsl(${Math.random() * 60 + 300}, 70%, 60%)`;
                flower.style.animationDelay = Math.random() * 2 + 's';
                flower.style.zIndex = '1500';
                
                document.body.appendChild(flower);

                // Limpiar después de la animación
                setTimeout(() => flower.remove(), 4000);
            }, i * 100);
        }
    }

    createMiniConfetti() {
        const letter = document.querySelector('.love-letter');
        if (!letter) return;

        const colors = ['#ff6b6b', '#4ecdc4', '#ffd93d', '#ff8cc8'];
        const count = 30;

        for (let i = 0; i < count; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'absolute';
            confetti.style.width = '6px';
            confetti.style.height = '6px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.opacity = Math.random() + 0.3;
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '10';

            letter.appendChild(confetti);

            // Animar caída
            this.animateConfettiFall(confetti, letter);
        }
    }

    animateConfettiFall(confetti, letter) {
        let pos = -5;
        const speed = Math.random() * 3 + 2;

        const fall = setInterval(() => {
            pos += speed;
            confetti.style.top = pos + 'px';
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

            if (pos > letter.offsetHeight) {
                clearInterval(fall);
                confetti.remove();
            }
        }, 30);
    }

    triggerCelebrationVibration() {
        if (navigator.vibrate) {
            navigator.vibrate(window.ValentineConfig.EFFECTS.vibration.pattern);
        }
    }

    // Configurar estilos de animación
    setupAnimationStyles() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-5px); }
                75% { transform: translateX(5px); }
            }

            @keyframes ripple {
                0% {
                    transform: translate(-50%, -50%) scale(1);
                    opacity: 1;
                }
                100% {
                    transform: translate(-50%, -50%) scale(4);
                    opacity: 0;
                }
            }
            
            @keyframes heartFall {
                0% {
                    transform: translateY(-100px) rotate(0deg);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(100vh) rotate(360deg);
                    opacity: 0;
                }
            }
            
            @keyframes messageAppear {
                0% {
                    transform: scale(0) rotate(-180deg);
                    opacity: 0;
                }
                50% {
                    transform: scale(1.1) rotate(10deg);
                }
                100% {
                    transform: scale(1) rotate(0deg);
                    opacity: 1;
                }
            }
            
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }
            
            @keyframes glow {
                0%, 100% { box-shadow: 0 0 20px rgba(255, 107, 107, 0.6); }
                50% { box-shadow: 0 0 40px rgba(255, 107, 107, 1); }
            }

            @keyframes floatUp {
                0% {
                    transform: translateY(0) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translateY(-200px) rotate(360deg);
                    opacity: 0;
                }
            }

            @keyframes explode {
                0% {
                    transform: translate(-50%, -50%) scale(0) rotate(0deg);
                    opacity: 1;
                }
                100% {
                    transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y))) scale(1) rotate(720deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Crear instancia global del manejador de animaciones
// Esperar a que el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        console.log('🎨 Creando AnimationManager...');
        window.ValentineAnimations = new AnimationManager();
        console.log('✅ AnimationManager creado');
    });
} else {
    console.log('🎨 Creando AnimationManager (DOM ya listo)...');
    window.ValentineAnimations = new AnimationManager();
    console.log('✅ AnimationManager creado');
}
