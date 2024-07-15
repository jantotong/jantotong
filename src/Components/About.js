import React, {Component} from 'react';
import * as THREE from 'three';

class About extends Component {
    render() {
        if (this.props.data) {
            const {OrbitControls} = require('three/examples/jsm/controls/OrbitControls');
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({
                canvas: document.querySelector('#bg'),
            });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.position.setZ(3);
            camera.position.setY(3);

            renderer.render(scene, camera)

            const myfaceTexture = new THREE.TextureLoader().load('images/myface.jpg')

            const myface = new THREE.Mesh(
                new THREE.BoxGeometry(10, 2, 2),
                new THREE.MeshBasicMaterial({map: myfaceTexture})
            );
            scene.add(myface)

            const white_color = new THREE.Color(0xffffff);
            scene.background = white_color;

            const pointLight = new THREE.PointLight(0xffffff)
            pointLight.position.set(20, 20, 20)

            const ambientLight = new THREE.AmbientLight(0xffffff);
            scene.add(pointLight, ambientLight)

            const controls = new OrbitControls(camera, renderer.domElement);

            function animate() {
                requestAnimationFrame(animate)
                myface.rotation.x += 0.001;
                controls.update()
                renderer.render(scene, camera)
            }

            animate()

            var name = this.props.data.name;
            var bio = this.props.data.bio;
            var phone = this.props.data.phone;
            var email = this.props.data.email;
            var resume_Download = "images/" + this.props.data.resume_download;
        }

        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <canvas id="bg"></canvas>
                    </div>
                    <div className="nine columns main-col">
                        <h2>Nice to meet you!</h2>
                        <p>{bio}</p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>{name}</span><br/>
                                    <span>{phone}</span><br/>
                                    <span>{email}</span>
                                </p>
                            </div>
                            <div className="columns download">
                                <p>
                                    <a href={resume_Download} className="button" download><i
                                        className="fa fa-download"></i>Download Resume</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default About;