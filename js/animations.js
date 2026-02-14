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
        this.setupIntro();
    }

    setupIntro() {
        const introOverlay = document.getElementById('introOverlay');
        const introClick = document.getElementById('introClick');
        const introHeart = document.getElementById('introHeart');
        
        if (!introOverlay) return;

        this.createIntroSparkles();
        this.createIntroHearts();

        const startExperience = () => {
            this.playOpeningAnimation();
        };

        if (introClick) {
            introClick.addEventListener('click', startExperience);
        }

        if (introHeart) {
            introHeart.addEventListener('click', startExperience);
        }
    }

    createIntroSparkles() {
        const container = document.getElementById('introSparkles');
        if (!container) return;

        const sparkles = ['✨', '⭐', '💫', '🌟'];
        
        for (let i = 0; i < 20; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'intro-sparkle';
            sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
            
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animationDelay = Math.random() * 2 + 's';
            sparkle.style.fontSize = (Math.random() * 15 + 15) + 'px';
            
            container.appendChild(sparkle);
        }
    }

    createIntroHearts() {
        const container = document.getElementById('introHearts');
        if (!container) return;

        const hearts = ['💗', '💖', '💕', '💓', '💞'];
        
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.className = 'intro-floating-heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 3 + 's';
            heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
            heart.style.fontSize = (Math.random() * 15 + 20) + 'px';
            
            container.appendChild(heart);
        }
    }

    playOpeningAnimation() {
        const introOverlay = document.getElementById('introOverlay');
        const openingOverlay = document.getElementById('openingOverlay');
        
        if (!introOverlay || !openingOverlay) {
            this.showMainContent();
            return;
        }

        introOverlay.classList.add('hidden');
        
        setTimeout(() => {
            openingOverlay.classList.add('active');
            
            setTimeout(() => {
                openingOverlay.classList.remove('active');
                
                setTimeout(() => {
                    this.showMainContent();
                }, 500);
            }, 1500);
        }, 800);
    }

    showMainContent() {
        const friendshipMessage = document.querySelector('.friendship-message');
        if (friendshipMessage) {
            friendshipMessage.style.display = 'flex';
            friendshipMessage.style.animation = 'floatIn 0.8s ease-out';
        }
        
        const title = document.querySelector('.valentine-title');
        if (title) {
            title.style.opacity = '1';
        }

        this.triggerCelebrationVibration();
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

💙 <strong>Querida Marbel, mi flaca, mi niña, mi corazón</strong> 💙<br><br>

💙 <strong>Feliz Día del Amor y la Amistad</strong> 💙<br><br>

Hola…
No sé muy bien cómo empezar. Es la primera vez que escribo algo así, pero solo quiero decir lo que siento, lo que nace sin pensar demasiado, lo que llevo guardado desde hace tiempo en el corazón.<br><br>

Recuerdo la primera vez que recibí un mensaje tuyo. No sé si fue casualidad o destino… pero cambió algo en mí. Y también recuerdo cuando te vi en persona, tan nerviosa, tan linda, y yo sin entender por qué… Ese momento quedó grabado en mi memoria como uno de esos recuerdos que uno guarda para siempre.<br><br>

Después de ese día te fui tomando un cariño enorme. Tal vez nunca supe expresarlo bien, porque no soy bueno con las palabras… pero créeme, todo lo que sentí fue real. A veces uno se guarda lo que siente por miedo o por orgullo, y termina perdiendo cosas bonitas que valían la pena.<br><br>

Quizás jugamos un juego donde sabíamos que podíamos salir heridos. Hubo días en que me pregunté si de verdad me quisiste… y quiero creer que sí, aunque haya sido un poquito. Con eso me basta, porque lo que vivimos, por corto que haya sido, fue sincero para mí.<br><br>

Esta carta no es para reclamar nada, porque no tengo ese derecho. Solo quiero desearte felicidad… de la buena, de la que te haga reír fuerte, dormir tranquila y sentirte amada. Que llegue alguien que te cuide, te valore, te abrace fuerte y te dé todo lo bonito que mereces, incluso lo que yo no supe o no pude darte.<br><br>

Tal vez soy un romántico, tal vez un tonto… pero soy humano. Y no quiero quedarme callado con lo que siento, porque la vida es tan frágil que mañana puede ser tarde para decir lo que hoy pesa en el alma.<br><br>

Ahora ya no somos ni seremos… y aun así te escribo. No para volver atrás, sino para cerrar con amor, con gratitud y con respeto. Porque fuiste una parte muy bonita de mi vida. Fuiste mi personita especial, mi flaca… y ese apodo siempre será tuyo.<br><br>

Eres una gran mujer: una gran hija, hermana, tía, amiga… y estoy seguro de que serás todo lo que sueñas. Gracias por lo que me diste, por lo que me enseñaste, y perdón por cualquier cosa que te haya hecho daño. De corazón, perdón.<br><br>

Te deseo una vida llena de cosas bonitas. Yo estaré aquí, no de la misma forma porque ya no se puede… pero siempre con cariño, siempre deseándote lo mejor. Aquí tendrás a un amigo sincero, eso tenlo por seguro.<br><br>

Feliz Día del Amor y la Amistad, mi niña hermosa.<br><br>

Con cariño sincero,<br>
Tu niño, tu nene… y desde hace un tiempo, tu amigo que te quiere mucho,<br>
Jhon 💙<br><br>

<strong>P.D.</strong> Escribí esta carta muchas veces porque quería que fuera especial para ti… porque tú fuiste especial para mí. 😊

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
