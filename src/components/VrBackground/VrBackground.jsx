import React, { Component, useEffect } from 'react';
import corona_bk from "./images/corona_bk.png"
import corona_ft from "./images/corona_ft.png"
import corona_lf from "./images/corona_lf.png"
import corona_rt from "./images/corona_rt.png"
import corona_up from "./images/corona_up.png"
import corona_dn from "./images/corona_dn.png"
import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";

const VrBackground = () => {
  
    // let camera, scene, renderer;
    // let geometry, material, mesh, sphere;

    useEffect(() => {
    dimensionDoor()
    }, [])

    const dimensionDoor = () => {
      const scene = new THREE.Scene();  
      const camera = new THREE.PerspectiveCamera(
      100,
      window.innerWidth / window.innerHeight,
      0.01,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor("#000000");
    renderer.setSize(window.innerWidth, window.innerHeight);
    const container = document.getElementById("myCanvas");
    container.appendChild(renderer.domElement);

    window.addEventListener("resize", () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });


    camera.position.z = Math.floor(Math.random()*25
    );
    camera.position.y = Math.floor(Math.random()*25
    );

   
    const createSpace = () => {
    let materialArray = []
    let texture_ft = new THREE.TextureLoader().load(corona_ft)
    let texture_bk = new THREE.TextureLoader().load(corona_bk)
    let texture_up = new THREE.TextureLoader().load(corona_up)
    let texture_dn = new THREE.TextureLoader().load(corona_dn)
    let texture_rt = new THREE.TextureLoader().load(corona_rt)
    let texture_lf = new THREE.TextureLoader().load(corona_lf)

    materialArray.push(new THREE.MeshBasicMaterial({map: texture_ft}))
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_bk}))
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_up}))
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_dn}))
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_rt}))
    materialArray.push(new THREE.MeshBasicMaterial({map: texture_lf}))

    for(let i=0; i < 6; i++)  {
      materialArray[i].side = THREE.DoubleSide;
    }

    let skyboxGeo = new THREE.BoxGeometry(1000, 1000, 1000)
    let skybox = new THREE.Mesh(skyboxGeo, materialArray)
    scene.add(skybox);
    }

    createSpace()


    const geometry1 = new THREE.BoxGeometry(2, 2, 2);
    const material1 = new THREE.MeshNormalMaterial({ wireframe: true });
    const mesh1 = new THREE.Mesh(geometry1, material1);
    scene.add(mesh1);

    const geometry2 = new THREE.SphereGeometry(4, 4, 4);
    const material2 = new THREE.MeshNormalMaterial({ wireframe: true });
    const sphere2 = new THREE.Mesh(geometry2, material2);
    scene.add(sphere2);


 
    const  controls = new OrbitControls(camera, renderer.domElement)
    controls.minDistance = 1
    controls.maxDistance = 325

    const animate = () => {
    requestAnimationFrame(animate)
    sphere2.rotation.x -= .015
    sphere2.rotation.y -= .015

    mesh1.rotation.x += .02
    mesh1.rotation.y += .02
    renderer.render(scene, camera);
    }
    animate()

    }

    return (
    
      <div id="myCanvas" className="background"></div>
   

    );

}

export default VrBackground;