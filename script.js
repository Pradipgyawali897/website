// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Animate elements
const animateItems = document.querySelectorAll('.tech-card, .project-card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.2 });

animateItems.forEach(item => {
    item.style.opacity = '0';
    observer.observe(item);
});

// Keyframes
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    .animate {
        animation: fadeInUp 0.8s ease forwards;
    }
    @keyframes fadeInUp {
        0% { opacity: 0; transform: translateY(40px); }
        100% { opacity: 1; transform: translateY(0); }
    }
`;
document.head.appendChild(styleSheet);

// Particles.js
particlesJS('particles-js', {
    particles: {
        number: { value: 120, density: { enable: true, value_area: 800 } },
        color: { value: '#ff6f61' },
        shape: { type: 'circle' },
        opacity: { value: 0.7 },
        size: { value: 5, random: true },
        move: { speed: 4, direction: 'none', out_mode: 'out' }
    },
    interactivity: {
        events: { onhover: { enable: true, mode: 'repulse' } }
    }
});

// Typewriter effect with glitch
const typewriter = document.querySelector('.typewriter');
const text = typewriter.textContent;
typewriter.textContent = '';
let i = 0;
function type() {
    if (i < text.length) {
        typewriter.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100);
    } else {
        typewriter.style.borderRight = 'none';
    }
}
setTimeout(type, 500);

// Dark mode toggle
const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    toggleButton.innerHTML = document.body.classList.contains('light-mode')
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
});

// Progress bar
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById('progress-bar').style.width = scrollPercent + '%';
});

// Parallax effect
window.addEventListener('scroll', () => {
    const parallax = document.querySelectorAll('.parallax');
    parallax.forEach(el => {
        const speed = 0.5;
        el.style.transform = `translateY(${window.scrollY * speed}px)`;
    });
});

// Back to top button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    backToTop.style.opacity = window.scrollY > 300 ? '1' : '0';
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Radar chart with animation
const ctx = document.getElementById('skills-radar').getContext('2d');
const radarChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['C', 'C++', 'SQL', 'CSS', 'Git'],
        datasets: [{
            label: 'Skill Level',
            data: [85, 80, 70, 75, 90],
            backgroundColor: 'rgba(255, 111, 97, 0.2)',
            borderColor: '#ff6f61',
            borderWidth: 2,
            pointBackgroundColor: '#ff6f61'
        }]
    },
    options: {
        animation: {
            duration: 2000,
            easing: 'easeInOutQuad'
        },
        scales: {
            r: {
                angleLines: { color: '#ff6f61' },
                grid: { color: '#e0e0e0' },
                pointLabels: { font: { size: 14, family: 'Orbitron' } },
                ticks: { beginAtZero: true, max: 100, stepSize: 20 }
            }
        }
    }
});

// Ambient sound (better sound)
const soundToggle = document.getElementById('sound-toggle');
let soundEnabled = false;
const hoverSound = new Audio('https://assets.mixkit.co/active_storage/sfx/1726/1726-preview.mp3'); // Futuristic click sound
hoverSound.volume = 0.2;

soundToggle.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    soundToggle.innerHTML = soundEnabled ? '<i class="fas fa-volume-up"></i>' : '<i class="fas fa-volume-mute"></i>';
});

document.querySelectorAll('.tech-card, .project-card, .social-icons a').forEach(item => {
    item.addEventListener('mouseenter', () => {
        if (soundEnabled) hoverSound.play();
    });
});