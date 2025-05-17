
import THREE from "three";

import AttractorPng from "$attractor.png?b64";

export function register_attractor_preview(_type: typeof OutlinerElement | typeof OutlinerNode) {
    // const map = new THREE.TextureLoader().load(AttractorPng);
	// map.magFilter = map.minFilter = THREE.NearestFilter;
    
    // new NodePreviewController(_type, {
	// 	setup(element: OutlinerNode) {
    //         if (!Project) return;
	// 		let mesh = new THREE.Object3D();
	// 		Project.nodes_3d[element.uuid] = mesh;
	// 		mesh.name = element.uuid;
	// 		mesh.type = element.type;
	// 		mesh.isElement = true;
	// 		mesh.visible = element.visibility;
	// 		mesh.rotation.order = 'ZYX';

	// 		let material = new THREE.SpriteMaterial({
	// 			map,
	// 			alphaTest: 0.1,
	// 			sizeAttenuation: false
	// 		});
	// 		let sprite = new THREE.Sprite(material);
	// 		sprite.name = element.uuid;
	// 		sprite.type = element.type;
	// 		sprite.isElement = true;
	// 		mesh.add(sprite);
	// 		mesh.sprite = sprite;

    //         // if (this.updateTransform)
    // 			this.updateTransform?.(element);

	// 		this.dispatchEvent('setup', {element});
	// 	},
	// 	updateTransform(element) {
	// 		NodePreviewController.prototype.updateTransform.call(this, element);
	// 		this.updateWindowSize(element);
	// 	},
	// 	updateSelection(element) {
	// 		let {mesh} = element;

	// 		mesh.sprite.material.color.set(element.selected ? gizmo_colors.outline : CustomTheme.data.colors.text);
	// 		mesh.sprite.material.depthTest = !element.selected;
	// 		mesh.renderOrder = element.selected ? 100 : 0;

	// 		this.dispatchEvent('update_selection', {element});
	// 	},
	// 	updateWindowSize(element) {
	// 		let size = 0.4 * Preview.selected.camera.fov / Preview.selected.height;
	// 		element.mesh.sprite.scale.set(size, size, size);
	// 	}
    // })
}

export function unregister_attractor_preview() {

}
