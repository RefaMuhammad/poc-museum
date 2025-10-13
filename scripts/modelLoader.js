import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { CONFIG } from './config.js';

export class ModelLoader {
    constructor(scene) {
        this.scene = scene;
        this.model = null;
        this.isModelLoaded = false;
    }

    load() {
        console.log('Mencoba load model GLB...');
        
        const loader = new GLTFLoader();
        
        return new Promise((resolve, reject) => {
            loader.load(
                CONFIG.modelPath,
                (gltf) => this.onLoadSuccess(gltf, resolve),
                (xhr) => this.onLoadProgress(xhr),
                (error) => this.onLoadError(error, reject)
            );
        });
    }

    onLoadSuccess(gltf, resolve) {
        console.log('Model berhasil di-load!');
        this.model = gltf.scene;
        
        // Fix materials
        this.fixMaterials();
        
        // Center and scale
        this.centerAndScale();
        
        this.scene.add(this.model);
        this.isModelLoaded = true;
        resolve(this.model);
    }

    fixMaterials() {
        this.model.traverse((child) => {
            if (child.isMesh) {
                if (child.material) {
                    child.material.needsUpdate = true;
                    
                    if (child.material.color) {
                        child.material.emissive = new THREE.Color(0x222222);
                        child.material.emissiveIntensity = 0.2;
                    }
                    
                    child.material.flatShading = false;
                    child.material.side = THREE.DoubleSide;
                }
                
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
    }

    centerAndScale() {
        const box = new THREE.Box3().setFromObject(this.model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = CONFIG.modelScale / maxDim;
        this.model.scale.multiplyScalar(scale);
        
        this.model.position.x = -center.x * scale;
        this.model.position.y = -center.y * scale;
        this.model.position.z = -center.z * scale;
    }

    onLoadProgress(xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    }

    onLoadError(error, reject) {
        console.error('Error loading GLB:', error);
        this.createPlaceholder();
        reject(error);
    }

    createPlaceholder() {
        const geometry = new THREE.CylinderGeometry(0.8, 1.2, 3, 32);
        const material = new THREE.MeshPhongMaterial({ 
            color: 0x8b7355,
            shininess: 30
        });
        const mesh = new THREE.Mesh(geometry, material);
        this.scene.add(mesh);

        const headGeometry = new THREE.SphereGeometry(0.8, 32, 32);
        const head = new THREE.Mesh(headGeometry, material);
        head.position.y = 2;
        this.scene.add(head);
        
        this.model = new THREE.Group();
        this.model.add(mesh);
        this.model.add(head);
        this.scene.add(this.model);
    }
}