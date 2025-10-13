import { SceneSetup } from './sceneSetup.js';
import { ModelLoader } from './modelLoader.js';
import { switchLanguage, getCurrentLang, initLanguage } from './language.js';

// Initialize scene
const sceneSetup = new SceneSetup('ganesha-model');
const modelLoader = new ModelLoader(sceneSetup.getScene());

// Load model
modelLoader.load().catch((error) => {
    console.error('Failed to load model:', error);
});

// Start animation loop
sceneSetup.animate();

// Initialize language to Indonesian
initLanguage();

// Make switchLanguage available globally for onclick handlers
window.switchLanguage = switchLanguage;

// Yes button event handler
document.getElementById('yes-button').addEventListener('click', function() {
    const lang = getCurrentLang();
    const message = lang === 'id' 
        ? 'Terima kasih! Sejarah akan dimulai...' 
        : 'Thank you! The history will begin...';
    alert(message);
});