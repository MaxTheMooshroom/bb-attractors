
import THREE from 'three';

export enum TransformSpace {
    LOCAL,
    WORLD,
}

export class Transform {
    position: THREE.Vector3 = new THREE.Vector3(0, 0, 0);
    scale: THREE.Vector3 = new THREE.Vector3(1, 1, 1);
    pivot: THREE.Vector3 = new THREE.Vector3(0, 0, 0);
    rotation: THREE.Vector3 = new THREE.Vector3(0, 0, 0);
    tspace: TransformSpace = TransformSpace.LOCAL;
}

export class SceneObjectFab {
    name: string;
    type: string;
    transform: Transform = new Transform();

    texture?: string | THREE.Texture;
    mesh?: THREE.Object3D;

    [key: string]: any;

    constructor(type: string, name: string) {
        this.type = type;
        this.name = name;
    }

    construct(): SceneObject {
        SceneObject.from_proto(this);
        
        
    }
}

export class SceneObject {
    static from_proto(proto: SceneObjectFab): SceneObject {
        let obj = new THREE.Object3D();
        Object.assign(obj, proto);

        return new SceneObject(obj);
    }

    constructor(obj: THREE.Object3D) {

    }

}

export class SceneManager {

}

export default SceneObject;
