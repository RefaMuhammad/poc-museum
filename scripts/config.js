export const CONFIG = {
    modelPath: 'assets/models/3d edit.glb',
    modelScale: 2.2,
    camera: {
        fov: 50,
        near: 0.1,
        far: 1000,
        position: { x: 0, y: 1, z: 4 }
    },
    controls: {
        enableDamping: true,
        dampingFactor: 0.05,
        enableZoom: true,
        enablePan: false,
        minDistance: 2,
        maxDistance: 10,
        autoRotate: false,
        autoRotateSpeed: 2
    },
    lighting: {
        ambient: { color: 0xffffff, intensity: 1.2 },
        directional1: { 
            color: 0xffffff, 
            intensity: 1.5, 
            position: { x: 5, y: 10, z: 7 } 
        },
        directional2: { 
            color: 0xffffff, 
            intensity: 0.8, 
            position: { x: -5, y: 5, z: -5 } 
        },
        directional3: { 
            color: 0xffffff, 
            intensity: 0.6, 
            position: { x: 0, y: -5, z: 5 } 
        },
        hemisphere: { 
            skyColor: 0xffffff, 
            groundColor: 0x444444, 
            intensity: 0.8 
        }
    },
    renderer: {
        antialias: true,
        outputEncoding: 'sRGBEncoding',
        toneMapping: 'ACESFilmicToneMapping',
        toneMappingExposure: 1.2,
        shadowMapEnabled: true,
        shadowMapType: 'PCFSoftShadowMap'
    }
};