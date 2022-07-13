import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';
const createScene = async (canvas) => {
  const engine = new BABYLON.Engine(canvas);
  const scene = new BABYLON.Scene(engine);
  await BABYLON.SceneLoader.ImportMeshAsync("","./assets/","vase.glb",scene);
  scene.createDefaultCameraOrLight(true, true, true);
  scene.createDefaultEnvironment();
  scene.activeCamera.alpha += Math.PI;
  update(engine,scene);
};


const update = (engine,scene) =>{
  engine.runRenderLoop(() => {
    scene.render();
  });
}

export { createScene };