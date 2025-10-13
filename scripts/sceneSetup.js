import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CONFIG } from './config.js';

export class SceneSetup {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.controls = null;
        
        this.init();
    }

    init() {
        // Create scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xf5f5f5);

        // Create camera
        const { fov, near, far, position } = CONFIG.camera;
        this.camera = new THREE.PerspectiveCamera(
            fov,
            this.container.offsetWidth / this.container.offsetHeight,
            near,
            far
        );
        this.camera.position.set(position.x, position.y, position.z);

        // Create renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: CONFIG.renderer.antialias });
        this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.outputEncoding = THREE[CONFIG.renderer.outputEncoding];
        this.renderer.toneMapping = THREE[CONFIG.renderer.toneMapping];
        this.renderer.toneMappingExposure = CONFIG.renderer.toneMappingExposure;
        this.renderer.shadowMap.enabled = CONFIG.renderer.shadowMapEnabled;
        this.renderer.shadowMap.type = THREE[CONFIG.renderer.shadowMapType];
        this.container.appendChild(this.renderer.domElement);

        // Setup controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        Object.assign(this.controls, CONFIG.controls);

        // Add lighting
        this.setupLighting();

        // Handle resize
        window.addEventListener('resize', () => this.onWindowResize());

        // Double click for auto-rotate
        this.setupAutoRotate();
    }

    setupLighting() {
        const { ambient, directional1, directional2, directional3, hemisphere } = CONFIG.lighting;

        // Ambient light
        const ambientLight = new THREE.AmbientLight(ambient.color, ambient.intensity);
        this.scene.add(ambientLight);

        // Directional lights
        const dirLight1 = new THREE.DirectionalLight(directional1.color, directional1.intensity);
        dirLight1.position.set(directional1.position.x, directional1.position.y, directional1.position.z);
        dirLight1.castShadow = true;
        this.scene.add(dirLight1);

        const dirLight2 = new THREE.DirectionalLight(directional2.color, directional2.intensity);
        dirLight2.position.set(directional2.position.x, directional2.position.y, directional2.position.z);
        this.scene.add(dirLight2);

        const dirLight3 = new THREE.DirectionalLight(directional3.color, directional3.intensity);
        dirLight3.position.set(directional3.position.x, directional3.position.y, directional3.position.z);
        this.scene.add(dirLight3);

        // Hemisphere light
        const hemiLight = new THREE.HemisphereLight(
            hemisphere.skyColor,
            hemisphere.groundColor,
            hemisphere.intensity
        );
        hemiLight.position.set(0, 20, 0);
        this.scene.add(hemiLight);
    }

    setupAutoRotate() {
        let autoRotateEnabled = false;
        this.container.addEventListener('dblclick', () => {
            autoRotateEnabled = !autoRotateEnabled;
            this.controls.autoRotate = autoRotateEnabled;
        });
    }

    onWindowResize() {
        const width = this.container.offsetWidth;
        const height = this.container.offsetHeight;
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }

    getScene() {
        return this.scene;
    }
}