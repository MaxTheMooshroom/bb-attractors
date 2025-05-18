
import THREE from "three";

import AttractorPng from "$attractor.png?b64";
import { Attractor } from "./attractor";


export function register_attractor_preview(_type: typeof OutlinerElement | typeof OutlinerNode) {
    const map = new THREE.TextureLoader().load(AttractorPng);
	map.magFilter = map.minFilter = THREE.NearestFilter;
    
    new NodePreviewController(_type, {
		setup(element: OutlinerElement) {
            if (!Project) return;
			let mesh = new THREE.Object3D();
			Project.nodes_3d[element.uuid] = mesh;
			mesh.name = element.uuid;
			mesh.type = element.type;
			mesh.isElement = true;
			mesh.visible = element.visibility;
			mesh.rotation.order = 'ZYX';

			let material = new THREE.SpriteMaterial({
				map,
				alphaTest: 0.1,
				sizeAttenuation: false
			});
			let sprite = new THREE.Sprite(material);
			sprite.name = element.uuid;
            // @ts-ignore
			sprite.type = element.type;
			sprite.isElement = true;
			mesh.add(sprite);
			mesh.sprite = sprite;

            (this as NodePreviewController).updateTransform(element);
			(this as NodePreviewController).dispatchEvent('setup', {element});
		},
		updateTransform(element) {
			NodePreviewController.prototype.updateTransform.call(this, element);
			(this as NodePreviewController).updateWindowSize(element);
		},
		updateSelection(element) {
			let {mesh} = element;

			mesh.sprite.material.color.set(element.selected ? gizmo_colors.outline : CustomTheme.data.colors.text);
			mesh.sprite.material.depthTest = !element.selected;
			mesh.renderOrder = element.selected ? 100 : 0;

			(this as NodePreviewController).dispatchEvent('update_selection', {element});
		},
		updateWindowSize(element) {
            if (Preview.selected.camera instanceof THREE.OrthographicCamera) return;

			let size = 0.4 * Preview.selected.camera.fov / Preview.selected.height;
			element.mesh.sprite.scale.set(size, size, size);
		}
    });

    let attractor_suggestion_list = $('<datalist id="attractor_suggestion_list" hidden></datalist>').get(0);
    if (!attractor_suggestion_list) return;
    
	document.body.append(attractor_suggestion_list);
	
	Attractor.updateAutocompleteList = function() {
        if (!attractor_suggestion_list) return;
		attractor_suggestion_list.innerHTML = '';
		Attractor.all.forEach(locator => {
            if (!attractor_suggestion_list) return;
			let option = document.createElement('option');
			option.value = locator.name;
			attractor_suggestion_list.append(option);
		})
	}
}

export function unregister_attractor_preview() {

}
