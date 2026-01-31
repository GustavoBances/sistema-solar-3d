/**
 * ═══════════════════════════════════════════════════════════════
 * app.js - CONTROL DE APLICACIÓN
 * Sistema Solar 3D Interactivo
 * 
 * Copyright © 2024 Luis Gustavo Bances Riojas
 * Todos los derechos reservados
 * 
 * Contacto: lbancesr@unprg.edu.pe
 * Licencia: Uso educativo y personal únicamente
 * Uso comercial prohibido sin autorización escrita
 * ═══════════════════════════════════════════════════════════════
 */

class App {
    constructor() {
        this.solarSystem = null;
        this.elements = {};
        this.currentTab = 'general';
        
        // Mostrar marca de agua de copyright
        this.showCopyrightWatermark();
        
        this.init();
    }
    
    /**
     * Marca de agua de copyright en consola
     */
    showCopyrightWatermark() {
        console.clear();
        console.log('%c╔═══════════════════════════════════════════════════════════════╗', 'color: #00ffff; font-weight: bold; font-size: 12px');
        console.log('%c║                                                               ║', 'color: #00ffff; font-weight: bold; font-size: 12px');
        console.log('%c║   🌌  SISTEMA SOLAR 3D INTERACTIVO  🌌                        ║', 'color: #00ffff; font-weight: bold; font-size: 14px');
        console.log('%c║                                                               ║', 'color: #00ffff; font-weight: bold; font-size: 12px');
        console.log('%c╠═══════════════════════════════════════════════════════════════╣', 'color: #00ffff; font-weight: bold; font-size: 12px');
        console.log('%c║                                                               ║', 'color: #00ffff; font-size: 12px');
        console.log('%c║  Copyright © 2024 Luis Gustavo Bances Riojas                ║', 'color: #ffd60a; font-weight: bold; font-size: 13px');
        console.log('%c║  Todos los derechos reservados                               ║', 'color: #ffffff; font-size: 12px');
        console.log('%c║                                                               ║', 'color: #00ffff; font-size: 12px');
        console.log('%c╠═══════════════════════════════════════════════════════════════╣', 'color: #00ffff; font-weight: bold; font-size: 12px');
        console.log('%c║                                                               ║', 'color: #00ffff; font-size: 12px');
        console.log('%c║  📧 Contacto: lbancesr@unprg.edu.pe                          ║', 'color: #00d4ff; font-size: 12px');
        console.log('%c║  📍 Ubicación: Lambayeque, Perú                              ║', 'color: #00d4ff; font-size: 12px');
        console.log('%c║                                                               ║', 'color: #00ffff; font-size: 12px');
        console.log('%c╠═══════════════════════════════════════════════════════════════╣', 'color: #ff006e; font-weight: bold; font-size: 12px');
        console.log('%c║                                                               ║', 'color: #ff006e; font-size: 12px');
        console.log('%c║  ⚠️  AVISO LEGAL                                              ║', 'color: #ff006e; font-weight: bold; font-size: 13px');
        console.log('%c║                                                               ║', 'color: #ff006e; font-size: 12px');
        console.log('%c║  ✅ Uso educativo y personal: PERMITIDO                      ║', 'color: #00ff9f; font-size: 12px');
        console.log('%c║  ❌ Uso comercial sin autorización: PROHIBIDO                ║', 'color: #ff006e; font-size: 12px');
        console.log('%c║  ❌ Venta o redistribución comercial: PROHIBIDO              ║', 'color: #ff006e; font-size: 12px');
        console.log('%c║  ❌ Remover atribuciones de autoría: PROHIBIDO               ║', 'color: #ff006e; font-size: 12px');
        console.log('%c║                                                               ║', 'color: #ff006e; font-size: 12px');
        console.log('%c╠═══════════════════════════════════════════════════════════════╣', 'color: #7d4cdb; font-weight: bold; font-size: 12px');
        console.log('%c║                                                               ║', 'color: #7d4cdb; font-size: 12px');
        console.log('%c║  📊 Características del Proyecto:                            ║', 'color: #7d4cdb; font-weight: bold; font-size: 12px');
        console.log('%c║  • 9 Planetas con física orbital real                        ║', 'color: #ffffff; font-size: 11px');
        console.log('%c║  • 2,000 asteroides en cinturón                              ║', 'color: #ffffff; font-size: 11px');
        console.log('%c║  • 24 eventos históricos astronómicos                        ║', 'color: #ffffff; font-size: 11px');
        console.log('%c║  • 16 lunas y asteroides documentados                        ║', 'color: #ffffff; font-size: 11px');
        console.log('%c║  • 40+ misiones espaciales verificadas                       ║', 'color: #ffffff; font-size: 11px');
        console.log('%c║  • Datos científicos de NASA/ESA                             ║', 'color: #ffffff; font-size: 11px');
        console.log('%c║                                                               ║', 'color: #7d4cdb; font-size: 12px');
        console.log('%c╚═══════════════════════════════════════════════════════════════╝', 'color: #00ffff; font-weight: bold; font-size: 12px');
        console.log('');
        console.log('%c🚀 Desarrollado con pasión por la astronomía y la educación', 'color: #00ffff; font-style: italic; font-size: 12px');
        console.log('');
    }
    
    init() {
        this.cacheElements();
        this.initSolarSystem();
        this.setupEventListeners();
        this.populatePlanetGrid();
        this.startTimeUpdates();
        
        setTimeout(() => {
            this.elements.loader.classList.add('hidden');
            this.showWelcomeMessage();
        }, 2000);
    }
    
    cacheElements() {
        this.elements = {
            loader: document.getElementById('loader'),
            toggleUIBtn: document.getElementById('toggleUI'),
            controlPanel: document.getElementById('controlPanel'),
            closePanel: document.getElementById('closePanel'),
            infoPanel: document.getElementById('infoPanel'),
            closeInfo: document.getElementById('closeInfo'),
            infoContent: document.getElementById('infoContent'),
            speedControl: document.getElementById('speedControl'),
            speedValue: document.getElementById('speedValue'),
            pauseBtn: document.getElementById('pauseBtn'),
            resetBtn: document.getElementById('resetBtn'),
            showOrbits: document.getElementById('showOrbits'),
            showLabels: document.getElementById('showLabels'),
            showStars: document.getElementById('showStars'),
            showAsteroids: document.getElementById('showAsteroids'),
            planetGrid: document.getElementById('planetGrid'),
            canvasContainer: document.getElementById('canvas-container'),
            yearValue: document.getElementById('yearValue'),
            dayValue: document.getElementById('dayValue'),
            statsPanel: document.getElementById('statsPanel'),
            minimizeStats: document.getElementById('minimizeStats'),
            earthDays: document.getElementById('earthDays'),
            earthSunDistance: document.getElementById('earthSunDistance'),
            fpsCounter: document.getElementById('fpsCounter'),
            // Elementos científicos
            timelineBtn: document.getElementById('timelineBtn'),
            sizeCompareBtn: document.getElementById('sizeCompareBtn'),
            moonsAsteroidsBtn: document.getElementById('moonsAsteroidsBtn'),
            timelinePanel: document.getElementById('timelinePanel'),
            closeTimeline: document.getElementById('closeTimeline'),
            sizeComparePanel: document.getElementById('sizeComparePanel'),
            closeSizeCompare: document.getElementById('closeSizeCompare'),
            moonsAsteroidsPanel: document.getElementById('moonsAsteroidsPanel'),
            closeMoonsAsteroids: document.getElementById('closeMoonsAsteroids')
        };
    }
    
    initSolarSystem() {
        this.solarSystem = new SolarSystem(this.elements.canvasContainer);
    }
    
    setupEventListeners() {
        // Toggle panel de control
        this.elements.toggleUIBtn.addEventListener('click', () => {
            this.elements.controlPanel.classList.toggle('active');
        });
        
        // Cerrar paneles
        this.elements.closePanel.addEventListener('click', () => {
            this.elements.controlPanel.classList.remove('active');
        });
        
        this.elements.closeInfo.addEventListener('click', () => {
            this.elements.infoPanel.classList.remove('active');
        });
        
        this.elements.closeTimeline.addEventListener('click', () => {
            this.elements.timelinePanel.classList.remove('active');
        });
        
        this.elements.closeSizeCompare.addEventListener('click', () => {
            this.elements.sizeComparePanel.classList.remove('active');
        });
        
        this.elements.closeMoonsAsteroids.addEventListener('click', () => {
            this.elements.moonsAsteroidsPanel.classList.remove('active');
        });
        
        // Minimizar estadísticas
        this.elements.minimizeStats.addEventListener('click', () => {
            this.elements.statsPanel.classList.toggle('minimized');
            this.elements.minimizeStats.textContent = 
                this.elements.statsPanel.classList.contains('minimized') ? '+' : '−';
        });
        
        // Control de velocidad
        this.elements.speedControl.addEventListener('input', (e) => {
            const speed = parseInt(e.target.value);
            this.solarSystem.setTimeScale(speed);
            this.updateSpeedDisplay(speed);
        });
        
        // Botón pausar/reanudar
        this.elements.pauseBtn.addEventListener('click', () => {
            const isPaused = this.solarSystem.togglePause();
            const btnIcon = this.elements.pauseBtn.querySelector('.btn-icon');
            const btnText = this.elements.pauseBtn.querySelector('.btn-text');
            
            if (isPaused) {
                btnIcon.textContent = '▶';
                btnText.textContent = 'REANUDAR';
            } else {
                btnIcon.textContent = '⏸';
                btnText.textContent = 'PAUSAR';
            }
        });
        
        // Botón REINICIAR TODO
        this.elements.resetBtn.addEventListener('click', () => {
            this.resetEverything();
        });
        
        // Checkboxes de visualización
        this.elements.showOrbits.addEventListener('change', (e) => {
            this.solarSystem.toggleOrbits(e.target.checked);
        });
        
        this.elements.showLabels.addEventListener('change', (e) => {
            this.solarSystem.toggleLabels(e.target.checked);
        });
        
        this.elements.showStars.addEventListener('change', (e) => {
            this.solarSystem.toggleStars(e.target.checked);
        });
        
        this.elements.showAsteroids.addEventListener('change', (e) => {
            this.solarSystem.toggleAsteroids(e.target.checked);
        });
        
        // ¡NUEVOS! Botones científicos
        this.elements.timelineBtn.addEventListener('click', () => {
            this.showTimeline();
        });
        
        this.elements.sizeCompareBtn.addEventListener('click', () => {
            this.showSizeComparison();
        });
        
        this.elements.moonsAsteroidsBtn.addEventListener('click', () => {
            this.showMoonsAndAsteroids();
        });
        
        // Tabs del panel de información
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.switchTab(e.target.dataset.tab);
            });
        });
        
        // Eventos del sistema solar
        window.addEventListener('planetSelected', (e) => {
            this.showPlanetInfo(e.detail.name, e.detail.data);
        });
        
        window.addEventListener('timeUpdate', (e) => {
            this.updateTimeDisplay(e.detail.simulationTime);
        });
        
        window.addEventListener('fpsUpdate', (e) => {
            this.elements.fpsCounter.textContent = e.detail.fps + ' FPS';
        });
    }
    
    updateSpeedDisplay(speed) {
        const speedText = speed === 1 ? '1 día/seg' : `${speed} días/seg`;
        this.elements.speedValue.textContent = speed + 'x';
        
        const speedDesc = this.elements.speedValue.nextElementSibling;
        if (speedDesc) {
            speedDesc.textContent = `(${speedText})`;
        }
    }
    
    startTimeUpdates() {
        setInterval(() => {
            if (!this.solarSystem.isPaused) {
                const simTime = this.solarSystem.getSimulationTime();
                this.updateTimeDisplay(simTime);
                this.updateEarthStats(simTime);
            }
        }, 100);
    }
    
    updateTimeDisplay(totalSeconds) {
        const SECONDS_PER_YEAR = 31557600;
        const SECONDS_PER_DAY = 86400;
        
        const years = Math.floor(totalSeconds / SECONDS_PER_YEAR);
        let remaining = totalSeconds % SECONDS_PER_YEAR;
        
        const days = Math.floor(remaining / SECONDS_PER_DAY);
        
        this.elements.yearValue.textContent = years;
        this.elements.dayValue.textContent = days;
    }
    
    updateEarthStats(totalSeconds) {
        const SECONDS_PER_DAY = 86400;
        const earthDays = (totalSeconds / SECONDS_PER_DAY).toFixed(2);
        this.elements.earthDays.textContent = `${earthDays} días`;
        
        const earthData = PLANET_DATA.earth;
        if (earthData) {
            this.elements.earthSunDistance.textContent = earthData.distanceFromSun;
        }
    }
    
    populatePlanetGrid() {
        const planetKeys = ['sun', 'mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
        
        // Agregar solo planetas
        planetKeys.forEach(key => {
            const data = PLANET_DATA[key];
            const button = document.createElement('button');
            button.className = 'planet-btn';
            button.textContent = data.name;
            button.dataset.planet = key;
            
            button.addEventListener('click', () => {
                document.querySelectorAll('.planet-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                button.classList.add('active');
                this.solarSystem.selectPlanet(key);
                
                // Cerrar paneles científicos automáticamente
                this.closeScientificPanels();
            });
            
            this.elements.planetGrid.appendChild(button);
        });
    }
    
    /**
     * ¡NUEVO! Cerrar paneles científicos automáticamente
     */
    closeScientificPanels() {
        this.elements.timelinePanel.classList.remove('active');
        this.elements.sizeComparePanel.classList.remove('active');
        this.elements.moonsAsteroidsPanel.classList.remove('active');
    }
    
    /**
     * ¡NUEVO! Cambiar entre pestañas del panel de información
     */
    switchTab(tabName) {
        this.currentTab = tabName;
        
        // Actualizar botones de tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.tab === tabName) {
                btn.classList.add('active');
            }
        });
        
        // Recargar información del planeta seleccionado
        if (this.solarSystem.selectedPlanet) {
            const data = PLANET_DATA[this.solarSystem.selectedPlanet];
            this.showPlanetInfo(this.solarSystem.selectedPlanet, data);
        }
    }
    
    /**
     * ¡MEJORADO! Mostrar información del planeta con pestañas
     */
    showPlanetInfo(planetName, data) {
        let infoHTML = '';
        
        if (this.currentTab === 'general') {
            infoHTML = `
                <h2>${data.name}</h2>
                <p>${data.description}</p>
                
                <h3>Características Principales</h3>
                <ul>
                    <li><strong>Diámetro:</strong> ${data.diameter}</li>
                    <li><strong>Masa:</strong> ${data.mass}</li>
                    <li><strong>Temperatura:</strong> ${data.temperature}</li>
                    ${data.distanceFromSun ? `<li><strong>Distancia del Sol:</strong> ${data.distanceFromSun}</li>` : ''}
                    ${data.orbitalPeriod && planetName !== 'sun' ? `<li><strong>Período orbital:</strong> ${data.orbitalPeriod}</li>` : ''}
                    ${data.dayLength ? `<li><strong>Duración del día:</strong> ${data.dayLength}</li>` : ''}
                    ${data.moons ? `<li><strong>Lunas:</strong> ${data.moons}</li>` : ''}
                </ul>
                
                <h3>Datos Curiosos</h3>
                <ul>
                    ${data.facts.map(fact => `<li>${fact}</li>`).join('')}
                </ul>
            `;
        } else if (this.currentTab === 'missions') {
            if (data.missions && data.missions.length > 0) {
                infoHTML = `
                    <h2>${data.name} - Misiones</h2>
                    <p><strong>Descubrimiento:</strong> ${data.discoveryYear} - ${data.discoveredBy}</p>
                    
                    <h3>Misiones Espaciales</h3>
                    <div class="missions-list">
                        ${data.missions.map(mission => `
                            <div class="mission-item">
                                <h4>🚀 ${mission.name}</h4>
                                <p><strong>Año:</strong> ${mission.year}</p>
                                <p><strong>Agencia:</strong> ${mission.agency}</p>
                                <p><strong>Estado:</strong> ${mission.status}</p>
                            </div>
                        `).join('')}
                    </div>
                `;
            } else {
                infoHTML = `
                    <h2>${data.name} - Misiones</h2>
                    <p>No ha habido misiones espaciales a este cuerpo celeste aún.</p>
                `;
            }
        } else if (this.currentTab === 'scientific') {
            infoHTML = `
                <h2>${data.name} - Datos Científicos</h2>
                
                ${data.composition ? `
                    <h3>Composición</h3>
                    <p>${data.composition}</p>
                ` : ''}
                
                ${data.scientificFacts ? `
                    <h3>Descubrimientos y Hechos Científicos</h3>
                    <ul>
                        ${data.scientificFacts.map(fact => `<li>${fact}</li>`).join('')}
                    </ul>
                ` : ''}
                
                <h3>Datos Técnicos</h3>
                <ul>
                    <li><strong>Tamaño real:</strong> ${data.realSize ? data.realSize.toLocaleString() + ' km' : data.diameter}</li>
                    <li><strong>Masa:</strong> ${data.mass}</li>
                    <li><strong>Temperatura:</strong> ${data.temperature}</li>
                    ${planetName !== 'sun' ? `<li><strong>Período orbital:</strong> ${data.orbitalPeriod}</li>` : ''}
                </ul>
            `;
        }
        
        this.elements.infoContent.innerHTML = infoHTML;
        this.elements.infoPanel.classList.add('active');
    }
    
    /**
     * ¡NUEVO! Mostrar Timeline Histórica
     */
    showTimeline() {
        const timelineHTML = DISCOVERY_TIMELINE.map(item => `
            <div class="timeline-item">
                <div class="timeline-year">${item.year}</div>
                <div class="timeline-event">${item.event}</div>
                <div class="timeline-detail">${item.detail}</div>
                <div class="timeline-culture">📍 ${item.culture}</div>
            </div>
        `).join('');
        
        document.getElementById('timelineContent').innerHTML = timelineHTML;
        this.elements.timelinePanel.classList.add('active');
        
        // Cerrar otros paneles
        this.elements.sizeComparePanel.classList.remove('active');
        this.elements.moonsAsteroidsPanel.classList.remove('active');
    }
    
    /**
     * ¡NUEVO! Mostrar Comparación de Tamaños
     */
    showSizeComparison() {
        const planets = ['sun', 'jupiter', 'saturn', 'uranus', 'neptune', 'earth', 'venus', 'mars', 'mercury'];
        const maxSize = PLANET_DATA.sun.realSize;
        
        const comparisonHTML = planets.map(key => {
            const data = PLANET_DATA[key];
            const percentage = (data.realSize / maxSize) * 100;
            
            return `
                <div class="size-bar-container">
                    <div class="size-bar-label">
                        <span class="size-bar-name">${data.name}</span>
                        <span class="size-bar-value">${data.realSize.toLocaleString()} km</span>
                    </div>
                    <div class="size-bar" style="width: ${percentage}%"></div>
                </div>
            `;
        }).join('');
        
        document.getElementById('sizeCompareContent').innerHTML = `
            <h3>Comparación de Diámetros Reales</h3>
            <p style="margin-bottom: var(--space-lg); color: var(--color-text-dim);">
                Todos los tamaños mostrados a escala relativa al Sol (100%)
            </p>
            ${comparisonHTML}
        `;
        
        this.elements.sizeComparePanel.classList.add('active');
        
        // Cerrar otros paneles
        this.elements.timelinePanel.classList.remove('active');
        this.elements.moonsAsteroidsPanel.classList.remove('active');
    }
    
    /**
     * ¡NUEVO! Mostrar Lunas y Asteroides Famosos
     */
    showMoonsAndAsteroids() {
        const moonsHTML = FAMOUS_MOONS_AND_ASTEROIDS.map(item => `
            <div class="moon-asteroid-item">
                <div class="moon-header">
                    <span class="moon-icon">${item.icon}</span>
                    <div class="moon-title-group">
                        <h3 class="moon-name">${item.name}</h3>
                        <span class="moon-parent">${item.type} de ${item.parent}</span>
                    </div>
                </div>
                <div class="moon-stats">
                    <span class="moon-stat"><strong>Diámetro:</strong> ${item.diameter}</span>
                    <span class="moon-stat"><strong>Descubierto:</strong> ${item.discovered}</span>
                </div>
                <p class="moon-description">${item.description}</p>
            </div>
        `).join('');
        
        document.getElementById('moonsAsteroidsContent').innerHTML = `
            <p style="margin-bottom: var(--space-lg); color: var(--color-text-dim); line-height: 1.6;">
                Explora las lunas y asteroides más fascinantes del sistema solar, desde las lunas volcánicas 
                de Júpiter hasta los mundos helados con océanos ocultos.
            </p>
            ${moonsHTML}
        `;
        
        this.elements.moonsAsteroidsPanel.classList.add('active');
        
        // Cerrar otros paneles
        this.elements.timelinePanel.classList.remove('active');
        this.elements.sizeComparePanel.classList.remove('active');
    }
    
    resetEverything() {
        // Resetear sistema solar completo
        this.solarSystem.resetAll();
        
        // Resetear slider
        this.elements.speedControl.value = 1;
        this.updateSpeedDisplay(1);
        
        // Resetear botón de pausa
        const btnIcon = this.elements.pauseBtn.querySelector('.btn-icon');
        const btnText = this.elements.pauseBtn.querySelector('.btn-text');
        btnIcon.textContent = '⏸';
        btnText.textContent = 'PAUSAR';
        
        // Resetear displays de tiempo
        this.elements.yearValue.textContent = '0';
        this.elements.dayValue.textContent = '0';
        
        // Resetear estadísticas
        this.elements.earthDays.textContent = '0 días';
        
        // Limpiar selección de planetas
        document.querySelectorAll('.planet-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Cerrar todos los paneles
        this.elements.infoPanel.classList.remove('active');
        this.elements.timelinePanel.classList.remove('active');
        this.elements.sizeComparePanel.classList.remove('active');
        this.elements.moonsAsteroidsPanel.classList.remove('active');
        
        console.log('✅ TODO REINICIADO - Sistema listo');
        this.showNotification('🔄 SISTEMA REINICIADO', 'success');
    }
    
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            left: 50%;
            transform: translateX(-50%);
            padding: 1rem 2rem;
            background: linear-gradient(135deg, rgba(0, 255, 255, 0.95), rgba(102, 126, 234, 0.95));
            border: 2px solid #00ffff;
            border-radius: 12px;
            color: #000;
            font-family: 'Orbitron', sans-serif;
            font-weight: 700;
            font-size: 1.1rem;
            z-index: 10000;
            box-shadow: 0 0 30px rgba(0, 255, 255, 0.8);
            animation: slideDown 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideUp 0.5s ease-in';
            setTimeout(() => notification.remove(), 500);
        }, 2000);
    }
    
    showWelcomeMessage() {
        console.log('%c╔═══════════════════════════════════════════════════════════════╗', 'color: #00ffff; font-weight: bold');
        console.log('%c║   SISTEMA SOLAR 3D - VERSIÓN CIENTÍFICA COMPLETA v3.0        ║', 'color: #00ffff; font-weight: bold; font-size: 14px');
        console.log('%c╠═══════════════════════════════════════════════════════════════╣', 'color: #00ffff; font-weight: bold');
        console.log('%c║  🌍 Simulación Física Orbital Precisa                         ║', 'color: #00ff9f; font-size: 12px');
        console.log('%c║  ☄️  Cinturón de Asteroides: 2,000 asteroides                ║', 'color: #ffd60a; font-size: 12px');
        console.log('%c║  📅 Timeline Histórica: 24 eventos cruciales                  ║', 'color: #ff006e; font-size: 12px');
        console.log('%c║  📏 Comparación de Tamaños a Escala Real                      ║', 'color: #667eea; font-size: 12px');
        console.log('%c║  🚀 40+ Misiones Espaciales Documentadas                      ║', 'color: #00d4ff; font-size: 12px');
        console.log('%c║  🔬 Datos Científicos Completos y Verificados                 ║', 'color: #7d4cdb; font-size: 12px');
        console.log('%c╠═══════════════════════════════════════════════════════════════╣', 'color: #00ffff; font-weight: bold');
        console.log('%c║  Desarrollado con precisión científica y pasión 🚀❤️         ║', 'color: #ffffff; font-style: italic');
        console.log('%c╚═══════════════════════════════════════════════════════════════╝', 'color: #00ffff; font-weight: bold');
    }
}

// Inicializar aplicación
document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
    
    window.addEventListener('orientationchange', () => {
        setTimeout(() => {
            if (window.innerHeight < 600 && window.innerWidth > window.innerHeight) {
                document.getElementById('controlPanel')?.classList.remove('active');
                document.getElementById('infoPanel')?.classList.remove('active');
            }
        }, 100);
    });
    
    window.addEventListener('resize', () => {
        if (window.app && window.app.solarSystem) {
            window.app.solarSystem.onWindowResize();
        }
    });
});

// Manejo de errores
window.addEventListener('error', (e) => {
    console.error('❌ Error:', e.error);
});

// Optimización: Pausar cuando no está visible
document.addEventListener('visibilitychange', () => {
    if (window.app && window.app.solarSystem) {
        if (document.hidden) {
            if (!window.app.solarSystem.isPaused) {
                window.app.solarSystem.togglePause();
                window.app.wasAutoPaused = true;
            }
        } else {
            if (window.app.wasAutoPaused) {
                window.app.solarSystem.togglePause();
                window.app.wasAutoPaused = false;
            }
        }
    }
});

// Prevenir comportamientos por defecto
window.addEventListener('dragover', (e) => e.preventDefault());
window.addEventListener('drop', (e) => e.preventDefault());
