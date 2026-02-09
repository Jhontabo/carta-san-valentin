document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM Loaded');

    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const heartAnimation = document.getElementById('heartAnimation');
    const buttonContainer = document.querySelector('.button-container');

    // Verificar que los elementos existen
    if (!yesBtn || !noBtn || !heartAnimation || !buttonContainer) {
        console.error('No se encontraron los elementos necesarios');
        return;
    }

    console.log('Elementos encontrados correctamente');

    let noClicks = 0;
    const noMessages = [
        'No',
        '¿Segura?',
        'Piénsalo mejor',
        'Última oportunidad',
        'Por favor...',
        'No me digas eso',
        'Mi corazón...'
    ];

    // Crear corazones y flores flotantes
    function createHearts() {
        const heartsContainer = document.querySelector('.hearts');
        const heartSymbols = ['❤️', '💕', '💖', '💗', '💓', '💝'];

        for (let i = 0; i < 12; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 3 + 's';
            heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
            heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
            heartsContainer.appendChild(heart);
        }
    }

    function createFlowers() {
        const flowersContainer = document.querySelector('.flowers');
        const flowerSymbols = ['🌹', '🌸', '🌷', '🌺', '🌻', '🌼'];

        for (let i = 0; i < 15; i++) {
            const flower = document.createElement('div');
            flower.className = 'flower';
            flower.textContent = flowerSymbols[Math.floor(Math.random() * flowerSymbols.length)];
            flower.style.left = Math.random() * 100 + '%';
            flower.style.top = Math.random() * 100 + '%';
            flower.style.animationDelay = Math.random() * 4 + 's';
            flower.style.fontSize = (Math.random() * 25 + 18) + 'px';
            flower.style.animationDuration = (Math.random() * 3 + 4) + 's';
            flowersContainer.appendChild(flower);
        }
    }

    function createSparkles() {
        const sparklesContainer = document.querySelector('.sparkles');

        for (let i = 0; i < 20; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.textContent = '✨';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.animationDelay = Math.random() * 5 + 's';
            sparkle.style.fontSize = (Math.random() * 15 + 10) + 'px';
            sparkle.style.animationDuration = (Math.random() * 4 + 2) + 's';
            sparklesContainer.appendChild(sparkle);
        }
    }

    // Función para hacer el botón SÍ más grande
    function growYesButton() {
        noClicks++;

        if (noClicks >= noMessages.length) {
            // Forzar el SÍ después de muchos intentos
            forceYesButton();
            return;
        }

        // Cambiar el texto del botón NO
        if (noMessages[noClicks - 1]) {
            noBtn.innerHTML = `<span class="btn-text">${noMessages[noClicks - 1]}</span>`;
        }

        // Crecimiento del botón SÍ en forma de cuadro/rectángulo
        const screenWidth = window.innerWidth;
        const baseWidth = screenWidth > 768 ? 200 : 250;
        const baseHeight = 50;
        const clickIncrement = noClicks * 20; // 20px más por clic
        const newWidth = Math.min(baseWidth + clickIncrement, screenWidth - 40);
        const newHeight = Math.min(baseHeight + (clickIncrement * 0.4), 80);
        
        console.log('Clic:', noClicks, 'New Width:', newWidth, 'New Height:', newHeight);

        // Aplicar tamaño en lugar de scale
        yesBtn.style.setProperty('width', `${newWidth}px`, 'important');
        yesBtn.style.setProperty('height', `${newHeight}px`, 'important');
        yesBtn.style.setProperty('min-height', `${newHeight}px`, 'important');
        yesBtn.style.setProperty('max-width', `${screenWidth - 40}px`, 'important');
        yesBtn.style.transition = 'all 0.3s ease';

        // Ajustar el contenedor inmediatamente
        if (noClicks >= 1) {
            buttonContainer.style.flexDirection = 'column';
            buttonContainer.style.alignItems = 'center';
            yesBtn.style.margin = '10px 0';
            yesBtn.style.borderRadius = newHeight > 60 ? '12px' : '25px'; // Más cuadrado cuando es grande
        }

        // Hacer el botón SÍ más llamativo visualmente
        if (noClicks > 2) {
            yesBtn.style.background = `linear-gradient(45deg, #ff6b6b, #ff8e8e, #ff6b6b)`;
            yesBtn.style.boxShadow = '0 0 30px rgba(255, 107, 107, 0.6)';
            yesBtn.style.border = '3px solid #ff4757';
        }

        // Añadir pulso cuando es grande
        if (noClicks > 4) {
            yesBtn.style.animation = 'pulse 0.6s infinite';
        }

        if (noClicks > 6) {
            yesBtn.style.animation = 'pulse 0.4s infinite, glow 0.8s infinite';
            yesBtn.style.fontSize = '18px';
        }
        
        if (noClicks > 8) {
            yesBtn.style.fontSize = '20px';
            yesBtn.style.fontWeight = '700';
        }

        // Hacer el botón NO más pequeño y más débil
        const noWidth = Math.max(80, 200 - (noClicks * 12));
        const noHeight = Math.max(35, 50 - (noClicks * 2));
        noBtn.style.setProperty('width', `${noWidth}px`, 'important');
        noBtn.style.setProperty('height', `${noHeight}px`, 'important');
        noBtn.style.opacity = Math.max(0.3, 1 - (noClicks * 0.08));
        noBtn.style.transition = 'all 0.3s ease';

        // Efectos visuales adicionales
        createClickEffect(noBtn);

        // Vibración sutil si está disponible
        if (navigator.vibrate && newWidth > 300) {
            navigator.vibrate(50);
        }

        // Ajustar el contenedor para móviles
        if (scale > 1.2) {
            buttonContainer.style.flexDirection = 'column';
            yesBtn.style.margin = '15px 0';
        }

        // Hacer el botón SÍ más llamativo visualmente
        if (scale > 1.4) {
            yesBtn.style.background = `linear-gradient(45deg, #ff6b6b, #ff8e8e, #ff6b6b)`;
            yesBtn.style.boxShadow = '0 0 40px rgba(255, 107, 107, 0.6)';
        }

        // Añadir pulso cuando es grande
        if (scale > 1.6) {
            yesBtn.style.animation = 'pulse 0.8s infinite';
        }

        if (scale > 2.0) {
            yesBtn.style.animation = 'pulse 0.5s infinite, glow 1s infinite';
        }

        // Hacer el botón NO más pequeño
        const finalNoScale = Math.max(0.6, 1 - (noClicks * 0.05));
        noBtn.style.transform = `scale(${finalNoScale})`;
        noBtn.style.opacity = Math.max(0.4, 1 - (noClicks * 0.05));
        noBtn.style.transition = 'all 0.5s ease';
    }

    

    // Función para mostrar la carta de amistad con flores
    function showLoveLetter() {
        // Prevent duplicate letters
        if (document.querySelector('.love-letter')) {
            console.log('Letter already exists, skipping...');
            return;
        }

        const mainContent = document.querySelector('.main-content');

        // Ocultar los botones
        buttonContainer.style.display = 'none';

        // Crear explosión de flores primero
        createFlowersExplosion();

        // Crear la carta
        const letter = document.createElement('div');
        letter.className = 'love-letter';
        letter.innerHTML = `
            <div class="letter-content">
                <div class="letter-header">
                    <h3 class="valentine-text">💝 Mi Carta de San Valentín 💝</h3>
                </div>
                <div class="letter-body">
                    <p class="letter-text">
                        Mi amor precioso,<br><br>
                        Desde que te conocí supe que eras especial.<br>
                        Tu sonrisa ilumina mis días y tu risa es mi música favorita.<br><br>
                        Cada "NO" hacia mi corazón latir más fuerte,<br>
                        no por miedo, sino por la emoción de tu "SÍ".<br><br>
                        Eres mi razón para creer en el amor verdadero,<br>
                        me inspires a ser mejor cada día.<br>
                        Contigo todo se vuelve mágico.<br><br>
                        Este San Valentín no se trata de regalos,<br>
                        es celebrar el increíble amor que tenemos.<br>
                        Eres mi todo, mi hogar, mi razón de sonreír.<br><br>
                        ❤️ Eres el amor de mi vida ❤️<br><br>
                        <span class="signature">Tu amor por siempre...</span>
                    </p>
                </div>
                <div class="hearts-decoration">
                    <span class="heart-icon">🌹</span>
                    <span class="heart-icon">💕</span>
                    <span class="heart-icon">🌹</span>
                </div>
            </div>
        `;

        mainContent.appendChild(letter);

        // Animar la aparición de la carta
        setTimeout(() => {
            letter.style.animation = 'slideInUp 1s ease-out';
            letter.style.opacity = '1';
            letter.style.transform = 'translateY(0)';
            createHeartsExplosion();
            createMiniConfetti();
            createFloatingFlowers(); // Flores adicionales flotando
        }, 100);

        // Reproducir vibración de amor
        if (navigator.vibrate) {
            navigator.vibrate([100, 50, 100, 50, 200]);
        }
    }

    // Función para crear explosión de flores
    function createFlowersExplosion() {
        const container = document.body;
        const flowerSymbols = ['🌹', '🌸', '🌷', '🌺', '🌻', '🌼', '💐', '🌹'];

        for (let i = 0; i < 40; i++) {
            const flower = document.createElement('div');
            flower.className = 'flower-explosion';
            flower.textContent = flowerSymbols[Math.floor(Math.random() * flowerSymbols.length)];
            flower.style.left = '50%';
            flower.style.top = '50%';
            flower.style.fontSize = (Math.random() * 20 + 25) + 'px';
            flower.style.color = `hsl(${Math.random() * 60 + 300}, 70%, 60%)`;
            flower.style.zIndex = '2000';
            
            // Dirección aleatoria para la explosión
            const spreadX = (Math.random() - 0.5) * window.innerWidth * 0.8;
            const spreadY = (Math.random() - 0.5) * window.innerHeight * 0.8;
            flower.style.setProperty('--x', spreadX + 'px');
            flower.style.setProperty('--y', spreadY + 'px');
            
            container.appendChild(flower);

            // Limpiar después de la animación
            setTimeout(() => flower.remove(), 1500);
        }
    }

    // Función para crear flores flotantes adicionales
    function createFloatingFlowers() {
        const flowerSymbols = ['🌹', '🌸', '🌷', '🌺', '🌻'];
        
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const flower = document.createElement('div');
                flower.className = 'floating-flower';
                flower.textContent = flowerSymbols[Math.floor(Math.random() * flowerSymbols.length)];
                flower.style.left = Math.random() * 100 + '%';
                flower.style.bottom = '-50px';
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

    // Crear explosión de corazones
    function createHeartsExplosion() {
        const container = document.body;
        const heartSymbols = ['❤️', '💕', '💖', '💗', '💓', '💝', '🎉', '🎊'];

        for (let i = 0; i < 50; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart-explosion';
            heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
            heart.style.left = '50%';
            heart.style.top = '50%';
            const spreadX = (Math.random() - 0.5) * window.innerWidth * 0.8;
            const spreadY = (Math.random() - 0.5) * window.innerHeight * 0.8;
            heart.style.setProperty('--x', spreadX + 'px');
            heart.style.setProperty('--y', spreadY + 'px');
            heart.style.zIndex = '2000';
            container.appendChild(heart);

            setTimeout(() => heart.remove(), 1000);
        }
    }

    // Crear mini confeti para la carta
    function createMiniConfetti() {
        const colors = ['#ff6b6b', '#4ecdc4', '#ffd93d', '#ff8cc8'];
        const letter = document.querySelector('.love-letter');

        if (!letter) return;

        for (let i = 0; i < 30; i++) {
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
    }

    // Efecto de clic
    function createClickEffect(element) {
        const effect = document.createElement('div');
        effect.style.position = 'fixed';
        effect.style.left = element.offsetLeft + element.offsetWidth / 2 + 'px';
        effect.style.top = element.offsetTop + element.offsetHeight / 2 + 'px';
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

    // Variables para la dinámica de los botones
    let noBtnMoving = false;
    let moveInterval;
    let yesClicks = 0;

    // Función para hacer crecer el botón SÍ cuando se hace clic en NO
    function growYesButton() {
        noClicks++;
        console.log('Click en NO:', noClicks);

        // Después de 7 clics, mostrar mensaje especial
        if (noClicks > 7) {
            showFinalMessage();
            return;
        }

        // Cambiar el texto del botón NO
        if (noMessages[noClicks - 1]) {
            noBtn.innerHTML = `<span class="btn-text">${noMessages[noClicks - 1]}</span>`;
        }

        // Crecimiento del botón SÍ responsivo
        const screenWidth = window.innerWidth;
        const baseWidth = screenWidth > 768 ? 200 : 250;
        const baseHeight = 50;
        const clickIncrement = noClicks * 20;
        const newWidth = Math.min(baseWidth + clickIncrement, screenWidth - 40);
        const newHeight = Math.min(baseHeight + (clickIncrement * 0.4), 80);
        
        console.log('Botón SÍ - Clic:', noClicks, 'New Width:', newWidth, 'New Height:', newHeight);

        // Aplicar tamaño al botón SÍ
        yesBtn.style.setProperty('width', `${newWidth}px`, 'important');
        yesBtn.style.setProperty('height', `${newHeight}px`, 'important');
        yesBtn.style.setProperty('min-height', `${newHeight}px`, 'important');
        yesBtn.style.setProperty('max-width', `${screenWidth - 40}px`, 'important');
        yesBtn.style.transition = 'all 0.3s ease';

        // Ajustar contenedor a columna cuando el botón crece
        if (noClicks >= 1) {
            buttonContainer.style.flexDirection = 'column';
            buttonContainer.style.alignItems = 'center';
            yesBtn.style.margin = '10px 0';
            yesBtn.style.borderRadius = newHeight > 60 ? '12px' : '25px';
        }

        // Efectos visuales progresivos
        if (noClicks > 2) {
            yesBtn.style.background = `linear-gradient(45deg, #ff6b6b, #ff8e8e, #ff6b6b)`;
            yesBtn.style.boxShadow = '0 0 30px rgba(255, 107, 107, 0.6)';
            yesBtn.style.border = '3px solid #ff4757';
        }

        if (noClicks > 4) {
            yesBtn.style.animation = 'pulse 0.6s infinite';
        }

        if (noClicks > 6) {
            yesBtn.style.animation = 'pulse 0.4s infinite, glow 0.8s infinite';
            yesBtn.style.fontSize = '18px';
        }

        // Hacer el botón NO más pequeño y transparente
        const noWidth = Math.max(80, 200 - (noClicks * 12));
        const noHeight = Math.max(35, 50 - (noClicks * 2));
        noBtn.style.setProperty('width', `${noWidth}px`, 'important');
        noBtn.style.setProperty('height', `${noHeight}px`, 'important');
        noBtn.style.opacity = Math.max(0.3, 1 - (noClicks * 0.08));
        noBtn.style.transition = 'all 0.3s ease';

        // Efectos adicionales
        createClickEffect(noBtn);

        // Vibración si está disponible
        if (navigator.vibrate && newWidth > 300) {
            navigator.vibrate(50);
        }
    }

    // Función para mostrar el mensaje final después de 7 clics
    function showFinalMessage() {
        // Crear mensaje especial
        const message = document.createElement('div');
        message.className = 'final-no-message';
        message.innerHTML = `
            <div class="message-content">
                <h2>esa no es la respuesta bebe 💔</h2>
                <p>El botón SÍ está esperando...</p>
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

    

    // Event listeners únicos y limpios
    yesBtn.addEventListener('click', function(e) {
        console.log('Click en botón SÍ');
        e.preventDefault();
        e.stopPropagation();
        showLoveLetter();
    });
    
    noBtn.addEventListener('click', function(e) {
        console.log('Click en botón NO - creciendo botón SÍ');
        e.preventDefault();
        e.stopPropagation();
        growYesButton();
    });
    
    // Asegurar que los botones sean clickeables
    yesBtn.style.pointerEvents = 'auto';
    noBtn.style.pointerEvents = 'auto';
    yesBtn.style.cursor = 'pointer';
    noBtn.style.cursor = 'pointer';

    // Inicializar
    createHearts();
    createFlowers();
    createSparkles();

    // Añadir animación de sacudida y efectos nuevos
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
    `;
    document.head.appendChild(style);
});
