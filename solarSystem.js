/**
 * ═══════════════════════════════════════════════════════════════
 * solarSystem.js - MOTOR DE RENDERIZADO 3D Y FÍSICA ORBITAL
 * Sistema Solar 3D Interactivo
 * 
 * Copyright © 2024 Luis Gustavo Bances Riojas
 * Todos los derechos reservados
 * 
 * Tecnología: Three.js r128 + WebGL
 * Física orbital basada en datos astronómicos reales
 * 
 * Contacto: lbancesr@unprg.edu.pe
 * Licencia: Uso educativo y personal únicamente
 * ═══════════════════════════════════════════════════════════════
 */


class SolarSystem {
    constructor(container) {
        this.container = container;
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.planets = {};
        this.orbits = [];
        this.asteroids = [];
        this.asteroidBelt = null;
        this.stars = null;
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        
        // Sistema de tiempo (1 en slider = 1 día/segundo)
        this.simulationTime = 0;
        this.timeScale = 86400; // 1 día/segundo por defecto
        this.isPaused = false;
        
        // Constantes físicas
        this.SECONDS_PER_DAY = 86400;
        this.SECONDS_PER_YEAR = 31557600;
        
        // Posiciones iniciales para reseteo
        this.initialPositions = {};
        
        // Estado de visualización
        this.showOrbits = true;
        this.showLabels = true;
        this.showStars = true;
        this.showAsteroids = true;
        this.selectedPlanet = null;
        
        // Labels 2D
        this.labelContainer = document.getElementById('planet-labels');
        this.planetLabels = {};
        
        // FPS
        this.fps = 60;
        this.frameCount = 0;
        this.lastFPSUpdate = Date.now();
        
        // Controles de cámara
        this.cameraControls = {
            rotation: { x: Math.PI / 6, y: Math.PI / 4 },
            distance: 300
        };
        
        this.init();
    }
    
    init() {
        // Crear escena
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.FogExp2(0x000000, 0.00015);
        
        // Cámara
        this.camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.1,
            10000
        );
        this.updateCameraPosition();
        
        // Renderer premium
        this.renderer = new THREE.WebGLRenderer({ 
            antialias: true,
            alpha: true,
            powerPreference: "high-performance"
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.5;
        this.container.appendChild(this.renderer.domElement);
        
        // Controles
        this.setupControls();
        
        // Crear elementos
        this.createStars();
        this.createLights();
        this.createSun();
        this.createPlanets();
        this.createAsteroidBelt(); // ¡NUEVO!
        
        // Guardar posiciones iniciales
        this.saveInitialPositions();
        
        // Event listeners
        this.setupEventListeners();
        
        // Iniciar animación
        this.animate();
    }
    
    setupControls() {
        let isDragging = false;
        let previousMouse = { x: 0, y: 0 };
        
        const onMouseDown = (e) => {
            isDragging = true;
            previousMouse = { x: e.clientX, y: e.clientY };
        };
        
        const onMouseMove = (e) => {
            if (!isDragging) return;
            
            const deltaX = e.clientX - previousMouse.x;
            const deltaY = e.clientY - previousMouse.y;
            
            this.cameraControls.rotation.y += deltaX * 0.005;
            this.cameraControls.rotation.x += deltaY * 0.005;
            this.cameraControls.rotation.x = Math.max(-Math.PI/2 + 0.1, Math.min(Math.PI/2 - 0.1, this.cameraControls.rotation.x));
            
            this.updateCameraPosition();
            previousMouse = { x: e.clientX, y: e.clientY };
        };
        
        const onMouseUp = () => {
            isDragging = false;
        };
        
        const onWheel = (e) => {
            e.preventDefault();
            this.cameraControls.distance += e.deltaY * 0.2;
            this.cameraControls.distance = Math.max(80, Math.min(800, this.cameraControls.distance));
            this.updateCameraPosition();
        };
        
        // Touch controls
        let touchStart = null;
        let touchDistance = 0;
        
        const onTouchStart = (e) => {
            if (e.touches.length === 1) {
                touchStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            } else if (e.touches.length === 2) {
                const dx = e.touches[0].clientX - e.touches[1].clientX;
                const dy = e.touches[0].clientY - e.touches[1].clientY;
                touchDistance = Math.sqrt(dx * dx + dy * dy);
            }
        };
        
        const onTouchMove = (e) => {
            e.preventDefault();
            if (e.touches.length === 1 && touchStart) {
                const deltaX = e.touches[0].clientX - touchStart.x;
                const deltaY = e.touches[0].clientY - touchStart.y;
                
                this.cameraControls.rotation.y += deltaX * 0.01;
                this.cameraControls.rotation.x += deltaY * 0.01;
                this.cameraControls.rotation.x = Math.max(-Math.PI/2 + 0.1, Math.min(Math.PI/2 - 0.1, this.cameraControls.rotation.x));
                
                this.updateCameraPosition();
                touchStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            } else if (e.touches.length === 2) {
                const dx = e.touches[0].clientX - e.touches[1].clientX;
                const dy = e.touches[0].clientY - e.touches[1].clientY;
                const newDistance = Math.sqrt(dx * dx + dy * dy);
                const delta = touchDistance - newDistance;
                
                this.cameraControls.distance += delta * 0.5;
                this.cameraControls.distance = Math.max(80, Math.min(800, this.cameraControls.distance));
                this.updateCameraPosition();
                
                touchDistance = newDistance;
            }
        };
        
        this.renderer.domElement.addEventListener('mousedown', onMouseDown);
        this.renderer.domElement.addEventListener('mousemove', onMouseMove);
        this.renderer.domElement.addEventListener('mouseup', onMouseUp);
        this.renderer.domElement.addEventListener('wheel', onWheel);
        this.renderer.domElement.addEventListener('touchstart', onTouchStart);
        this.renderer.domElement.addEventListener('touchmove', onTouchMove);
    }
    
    updateCameraPosition() {
        const rot = this.cameraControls.rotation;
        const dist = this.cameraControls.distance;
        
        this.camera.position.x = dist * Math.sin(rot.y) * Math.cos(rot.x);
        this.camera.position.y = dist * Math.sin(rot.x);
        this.camera.position.z = dist * Math.cos(rot.y) * Math.cos(rot.x);
        this.camera.lookAt(0, 0, 0);
    }
    
    createStars() {
        const geometry = new THREE.BufferGeometry();
        const vertices = [];
        const colors = [];
        
        for (let i = 0; i < 20000; i++) {
            const radius = 1800 + Math.random() * 500;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            
            vertices.push(
                radius * Math.sin(phi) * Math.cos(theta),
                radius * Math.sin(phi) * Math.sin(theta),
                radius * Math.cos(phi)
            );
            
            const color = new THREE.Color();
            const temp = Math.random();
            if (temp < 0.2) color.setRGB(0.6, 0.8, 1.0);
            else if (temp < 0.5) color.setRGB(1.0, 1.0, 1.0);
            else if (temp < 0.8) color.setRGB(1.0, 0.9, 0.7);
            else color.setRGB(1.0, 0.6, 0.4);
            
            colors.push(color.r, color.g, color.b);
        }
        
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        
        const material = new THREE.PointsMaterial({
            size: 2.5,
            vertexColors: true,
            transparent: true,
            opacity: 0.95
        });
        
        this.stars = new THREE.Points(geometry, material);
        this.scene.add(this.stars);
    }
    
    createLights() {
        const sunLight = new THREE.PointLight(0xFFFFFF, 3.5, 2500);
        sunLight.position.set(0, 0, 0);
        sunLight.castShadow = true;
        this.scene.add(sunLight);
        
        const ambientLight = new THREE.AmbientLight(0x111122, 0.2);
        this.scene.add(ambientLight);
    }
    
    createSun() {
        const data = PLANET_DATA.sun;
        const geometry = new THREE.SphereGeometry(data.size, 64, 64);
        const material = new THREE.MeshBasicMaterial({
            color: data.color,
            emissive: data.color,
            emissiveIntensity: 2
        });
        
        const sun = new THREE.Mesh(geometry, material);
        sun.userData = { name: 'sun', data: data };
        
        // Atmósfera del sol (4 capas)
        for (let i = 0; i < 4; i++) {
            const glowGeo = new THREE.SphereGeometry(data.size * (1.08 + i * 0.08), 32, 32);
            const glowMat = new THREE.MeshBasicMaterial({
                color: data.color,
                transparent: true,
                opacity: 0.12 / (i + 1),
                side: THREE.BackSide
            });
            const glow = new THREE.Mesh(glowGeo, glowMat);
            sun.add(glow);
        }
        
        this.scene.add(sun);
        this.planets.sun = { mesh: sun, data: data };
        
        // Crear label
        this.createLabel('sun', data.name);
    }
    
    createPlanets() {
        const planetKeys = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
        
        planetKeys.forEach(key => {
            const data = PLANET_DATA[key];
            
            // Planeta
            const geometry = new THREE.SphereGeometry(data.size, 64, 64);
            const material = new THREE.MeshStandardMaterial({
                color: data.color,
                roughness: 0.85,
                metalness: 0.15,
                emissive: data.color,
                emissiveIntensity: 0.08
            });
            
            const planet = new THREE.Mesh(geometry, material);
            planet.position.x = data.distance;
            planet.castShadow = true;
            planet.receiveShadow = true;
            planet.userData = { name: key, data: data };
            
            // Atmósfera
            if (['venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'].includes(key)) {
                const atmosGeo = new THREE.SphereGeometry(data.size * 1.06, 32, 32);
                const atmosMat = new THREE.MeshBasicMaterial({
                    color: data.color,
                    transparent: true,
                    opacity: 0.2,
                    side: THREE.BackSide
                });
                const atmosphere = new THREE.Mesh(atmosGeo, atmosMat);
                planet.add(atmosphere);
            }
            
            // Órbita
            const orbitGeo = new THREE.BufferGeometry();
            const orbitPoints = [];
            const segments = 256;
            
            for (let i = 0; i <= segments; i++) {
                const angle = (i / segments) * Math.PI * 2;
                orbitPoints.push(
                    Math.cos(angle) * data.distance,
                    0,
                    Math.sin(angle) * data.distance
                );
            }
            
            orbitGeo.setAttribute('position', new THREE.Float32BufferAttribute(orbitPoints, 3));
            const orbitMat = new THREE.LineBasicMaterial({ 
                color: 0x00ffff,
                transparent: true,
                opacity: 0.5,
                linewidth: 2
            });
            const orbit = new THREE.Line(orbitGeo, orbitMat);
            
            // Anillos de Saturno mejorados
            if (data.hasRings) {
                const ringGeo = new THREE.RingGeometry(data.size * 1.5, data.size * 2.8, 128);
                const ringMat = new THREE.MeshBasicMaterial({
                    color: 0xC4A44A,
                    side: THREE.DoubleSide,
                    transparent: true,
                    opacity: 0.85
                });
                const rings = new THREE.Mesh(ringGeo, ringMat);
                rings.rotation.x = Math.PI / 2;
                planet.add(rings);
            }
            
            this.scene.add(orbit);
            this.scene.add(planet);
            
            this.planets[key] = {
                mesh: planet,
                orbit: orbit,
                data: data,
                angle: Math.random() * Math.PI * 2,
                rotationAngle: 0
            };
            
            this.orbits.push(orbit);
            
            // Crear label
            this.createLabel(key, data.name);
        });
    }
    
    /**
     * ¡NUEVO! Crear Cinturón de Asteroides
     */
    createAsteroidBelt() {
        const asteroidData = ASTEROID_BELT;
        const geometry = new THREE.BufferGeometry();
        const positions = [];
        const colors = [];
        
        // Crear posiciones de asteroides
        for (let i = 0; i < asteroidData.numberOfAsteroids; i++) {
            const angle = Math.random() * Math.PI * 2;
            const radius = asteroidData.innerRadius + Math.random() * (asteroidData.outerRadius - asteroidData.innerRadius);
            const yOffset = (Math.random() - 0.5) * 10; // Variación vertical
            
            positions.push(
                Math.cos(angle) * radius,
                yOffset,
                Math.sin(angle) * radius
            );
            
            // Color rocoso variado
            const brightness = 0.3 + Math.random() * 0.3;
            colors.push(brightness, brightness * 0.9, brightness * 0.8);
        }
        
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        
        const material = new THREE.PointsMaterial({
            size: 1.5,
            vertexColors: true,
            transparent: true,
            opacity: 0.8
        });
        
        this.asteroidBelt = new THREE.Points(geometry, material);
        this.scene.add(this.asteroidBelt);
        
        console.log('✨ Cinturón de Asteroides creado con', asteroidData.numberOfAsteroids, 'asteroides');
    }
    
    createLabel(planetKey, planetName) {
        const label = document.createElement('div');
        label.className = 'planet-label';
        label.textContent = planetName;
        label.style.display = this.showLabels ? 'block' : 'none';
        this.labelContainer.appendChild(label);
        this.planetLabels[planetKey] = label;
    }
    
    updateLabels() {
        if (!this.showLabels) return;
        
        Object.keys(this.planets).forEach(key => {
            const planet = this.planets[key];
            const label = this.planetLabels[key];
            
            if (!label) return;
            
            const pos = planet.mesh.position.clone();
            pos.project(this.camera);
            
            const x = (pos.x * 0.5 + 0.5) * window.innerWidth;
            const y = (pos.y * -0.5 + 0.5) * window.innerHeight;
            
            // Solo mostrar si está delante de la cámara
            if (pos.z < 1) {
                label.style.display = 'block';
                label.style.left = x + 'px';
                label.style.top = (y - 30) + 'px';
            } else {
                label.style.display = 'none';
            }
        });
    }
    
    saveInitialPositions() {
        Object.keys(this.planets).forEach(key => {
            if (key === 'sun') return;
            const planet = this.planets[key];
            this.initialPositions[key] = {
                angle: planet.angle,
                rotationAngle: planet.rotationAngle
            };
        });
    }
    
    setupEventListeners() {
        window.addEventListener('resize', () => this.onWindowResize());
        this.renderer.domElement.addEventListener('click', (e) => this.onPlanetClick(e));
    }
    
    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    onPlanetClick(event) {
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        
        this.raycaster.setFromCamera(this.mouse, this.camera);
        
        const planetMeshes = Object.values(this.planets).map(p => p.mesh);
        const intersects = this.raycaster.intersectObjects(planetMeshes);
        
        if (intersects.length > 0) {
            const clickedPlanet = intersects[0].object;
            const planetName = clickedPlanet.userData.name;
            this.selectPlanet(planetName);
        }
    }
    
    selectPlanet(planetName) {
        this.selectedPlanet = planetName;
        
        const event = new CustomEvent('planetSelected', { 
            detail: { 
                name: planetName, 
                data: PLANET_DATA[planetName] 
            } 
        });
        window.dispatchEvent(event);
    }
    
    update(deltaTime) {
        if (this.isPaused) return;
        
        // Actualizar tiempo
        this.simulationTime += deltaTime * this.timeScale;
        
        // Rotar estrellas
        if (this.stars && this.showStars) {
            this.stars.rotation.y += 0.00003;
        }
        
        // Rotar cinturón de asteroides lentamente
        if (this.asteroidBelt && this.showAsteroids) {
            this.asteroidBelt.rotation.y += 0.0001;
        }
        
        // Rotar Sol
        if (this.planets.sun) {
            this.planets.sun.mesh.rotation.y += 0.001;
        }
        
        // Actualizar planetas
        Object.keys(this.planets).forEach(key => {
            if (key === 'sun') return;
            
            const planet = this.planets[key];
            const data = planet.data;
            
            // Órbita basada en física real
            const planetPeriod = data.orbitalPeriod * this.SECONDS_PER_YEAR;
            planet.angle = (this.simulationTime / planetPeriod) * Math.PI * 2;
            
            // Posición
            planet.mesh.position.x = Math.cos(planet.angle) * data.distance;
            planet.mesh.position.z = Math.sin(planet.angle) * data.distance;
            
            // Rotación
            const rotationsPerSecond = 1 / this.SECONDS_PER_DAY;
            planet.rotationAngle += rotationsPerSecond * deltaTime * this.timeScale;
            planet.mesh.rotation.y = planet.rotationAngle * Math.PI * 2;
        });
        
        // Actualizar labels
        this.updateLabels();
        
        // FPS
        this.frameCount++;
        const now = Date.now();
        if (now - this.lastFPSUpdate >= 1000) {
            this.fps = this.frameCount;
            this.frameCount = 0;
            this.lastFPSUpdate = now;
            
            window.dispatchEvent(new CustomEvent('fpsUpdate', { detail: { fps: this.fps } }));
        }
        
        // Evento de tiempo
        window.dispatchEvent(new CustomEvent('timeUpdate', { 
            detail: { 
                simulationTime: this.simulationTime,
                timeScale: this.timeScale
            } 
        }));
    }
    
    animate() {
        requestAnimationFrame(() => this.animate());
        
        const deltaTime = 1 / 60;
        this.update(deltaTime);
        
        this.renderer.render(this.scene, this.camera);
    }
    
    // Métodos de control
    togglePause() {
        this.isPaused = !this.isPaused;
        return this.isPaused;
    }
    
    setTimeScale(sliderValue) {
        this.timeScale = sliderValue * this.SECONDS_PER_DAY;
    }
    
    getSimulationTime() {
        return this.simulationTime;
    }
    
    toggleOrbits(show) {
        this.showOrbits = show;
        this.orbits.forEach(orbit => orbit.visible = show);
    }
    
    toggleLabels(show) {
        this.showLabels = show;
        Object.values(this.planetLabels).forEach(label => {
            label.style.display = show ? 'block' : 'none';
        });
    }
    
    toggleStars(show) {
        this.showStars = show;
        if (this.stars) this.stars.visible = show;
    }
    
    /**
     * ¡NUEVO! Toggle Cinturón de Asteroides
     */
    toggleAsteroids(show) {
        this.showAsteroids = show;
        if (this.asteroidBelt) this.asteroidBelt.visible = show;
    }
    
    resetCamera() {
        this.cameraControls = {
            rotation: { x: Math.PI / 6, y: Math.PI / 4 },
            distance: 300
        };
        this.updateCameraPosition();
    }
    
    resetAll() {
        // Resetear tiempo
        this.simulationTime = 0;
        
        // Resetear posiciones de planetas
        Object.keys(this.planets).forEach(key => {
            if (key === 'sun') return;
            
            const planet = this.planets[key];
            const initial = this.initialPositions[key];
            
            if (initial) {
                planet.angle = initial.angle;
                planet.rotationAngle = initial.rotationAngle;
                
                const data = planet.data;
                planet.mesh.position.x = Math.cos(planet.angle) * data.distance;
                planet.mesh.position.z = Math.sin(planet.angle) * data.distance;
                planet.mesh.rotation.y = planet.rotationAngle * Math.PI * 2;
            }
        });
        
        // Resetear cámara
        this.resetCamera();
        
        // Despausar si estaba pausado
        if (this.isPaused) {
            this.isPaused = false;
        }
        
        console.log('🔄 Sistema completamente reiniciado');
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = SolarSystem;
}
