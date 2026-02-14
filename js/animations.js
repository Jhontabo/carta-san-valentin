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

💙 <strong>Querida Marbel, mi flaca, mi niña, mi corazón</strong> 💙<br><br>

💙 <strong>Feliz Día de la Amistad</strong> 💙<br><br>

Hola… No sé muy bien cómo empezar esto. Es la primera vez que escribo algo así, así que solo voy a decir lo que siento, simplemente lo que nace desde adentro.<br><br>

Recuerdo la primera vez que recibí un mensaje tuyo. No sé si fue un error o si fue el destino; al final eso no importa, ¿o sí? También recuerdo la primera vez que te vi en persona… Estabas nerviosa y yo no entendía por qué. Ese momento vive en mi memoria. A veces el recuerdo es mejor que la realidad, pero qué bueno que fue así.<br><br>

Luego de ese día, te tomé mucho cariño aunque, bueno, nunca he sido muy bueno para expresarme. Por eso creo que a veces debo estar solo; uno mismo siempre se entiende mejor.<br><br>

Creo que jugamos un juego en el que íbamos a salir lastimados, ya sabes a qué me refiero. Hubo días en los que me preguntaba si de verdad me quisiste; quiero creer que sí, aunque sea un poquito. Con eso me basta.<br><br>

En fin, esta carta no es para reclamos —ni que tuviera ese derecho, jeje—. Lo que sí quiero es decirte esto: deseo que seas feliz. De verdad. Que alguien te cuide, te valore, te abrace fuerte y te dé todo lo que mereces, todo lo que no voy a poder hacer yo.<br><br>

Tal vez soy un romántico, o tal vez un pendejo, no lo sé... Solo soy un hombre, un ser humano con sus errores que, al fin y al cabo, está viviendo. No me gusta guardarme lo que siento porque ya sabes que luego me arrepiento; la vida es tan frágil que mañana puede ser tarde para decir lo que hoy pesa en el corazón.<br><br>

Ahora ya no somos ni seremos, y aun así te escribo esto, esto me convierte en un pendejaso, pero me vale verg@ jaja, por lo general hago lo que me sale del corazón o de los que me cuelgan asi que no me importa si piensas que soy un arrastrado. Espero que te guste este intento de carta jaja.<br><br>

Eres una gran mujer: una gran hija, una gran hermana, una gran tia,una gran amiga, espero que en un futuro una gran madre, una excelente persona sobre todo. Fuiste mi personita especial y, aunque fue por poco tiempo, para mí fue suficiente siempre seras mi flaca, ese apodo es solo tuyo.<br><br>

Sé que eres una gran persona, me lo has demostrado, así que no pienses que te guardo algún tipo de rencor, espero tu tampoco lo hagas con este pobre hombre.te pido una disculpa  por cualquier cosa que haya hecho; así que perdón, hermosa.<br><br>

Te deseo un resto de vida lleno de cosas bonitas. Yo estaré aquí, aunque ya no de la misma manera porque eso ya no puede ser, pero siempre tendrás un amigo.<br><br>

Feliz Día del Amor y la Amistad, mi niña hermosa.<br><br>

Con cariño sincero,<br>
Tu niño, tu nene que te quiere mucho,<br>
Jhon 💙<br><br>

<strong>P.D.</strong> Escribí esta carta como 20 veces para que quedara bien, así que valórala mucho. Seguramente no volveré a escribir algo así nunca más. 😊

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
