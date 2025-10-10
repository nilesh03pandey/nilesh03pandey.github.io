// Toggle subject details on click
function toggleDetails(element) {
element.classList.toggle('active');
}

// Number counter animation
const counters = document.querySelectorAll('.number');
counters.forEach(counter => {
const target = +counter.getAttribute('data-target');
const decimals = +counter.getAttribute('data-decimals') || 0;
const speed = 80;

const updateCount = () => {
    const value = +counter.innerText;
    const increment = (target - value) / 10;
    if (value < target) {
        counter.innerText = (value + increment).toFixed(decimals);
        setTimeout(updateCount, speed);
    } else {
        counter.innerText = target.toFixed(decimals);
    }
};
updateCount();
});



// Particle Animation with Sparkle Effect
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for (let i = 0; i < 200; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) / 5,
        vy: (Math.random() - 0.5) / 5,
        size: Math.random() * 2 + 1,
        baseSize: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        phase: Math.random() * Math.PI * 2 // For twinkling effect
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Twinkle effect: vary size and opacity
        p.phase += 0.05;
        p.size = p.baseSize + Math.sin(p.phase) * 0.5;
        p.opacity = 0.3 + Math.sin(p.phase) * 0.2;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 191, 255, ${p.opacity})`;
        ctx.fill();
    });
    requestAnimationFrame(animate);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Animate Skills on Scroll
window.addEventListener('scroll', () => {
    document.querySelectorAll('.skill-progress').forEach(bar => {
        bar.style.width = bar.style.width || '0%';
    });
});

// Number Animation
function animateNumber(element, target, decimals = 0, duration = 2000) {
    const start = 0;
    const startTime = performance.now();
    const increment = target / (duration / 16);

    function update() {
        const elapsed = performance.now() - startTime;
        let current = start + (increment * elapsed) / 16;
        if (current >= target) current = target;
        element.textContent = decimals ? current.toFixed(decimals) : Math.floor(current);
        if (current < target) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

document.querySelectorAll('.number').forEach(element => {
    const target = parseFloat(element.getAttribute('data-target'));
    const decimals = element.getAttribute('data-decimals') || 0;
    animateNumber(element, target, decimals);
});

// Cursor Sparkle Effect
function createSparkle(e) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('cursor-sparkle');

    let x, y;
    if (e.type === 'mousemove') {
        x = e.clientX;
        y = e.clientY;
    } else if (e.type === 'touchmove' || e.type === 'touchstart') {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
    }

    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 600); // Match animation duration
}

// Event listeners for cursor sparkle
document.addEventListener('mousemove', createSparkle);
document.addEventListener('touchmove', createSparkle);
document.addEventListener('touchstart', createSparkle);