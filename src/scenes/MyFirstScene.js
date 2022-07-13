import { Engine, Scene, FreeCamera, Vector3, MeshBuilder, StandardMaterial, Color3, HemisphericLight } from "@babylonjs/core";
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';
const createScene = (canvas) => {
  const engine = new Engine(canvas);
  const scene = new Scene(engine);

  const camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, true);

  new HemisphericLight("light", Vector3.Up(), scene);

  // const box = MeshBuilder.CreateBox("box", { size: 2 }, scene);
  // const material = new StandardMaterial("box-material", scene);
  // material.diffuseColor = Color3.Blue();
  // box.material = material;
  BABYLON.SceneLoader.ImportMesh("","./assets/","yakiniku_cake.glb",scene,function (meshes) {
    // scene.createDefaultCameraOrLight(true, true, true);
    // scene.createDefaultEnvironment();
    // scene.activeCamera.alpha += Math.PI;
    console.log(meshes);
  });
  engine.runRenderLoop(() => {
    scene.render();
  });
};

export { createScene };