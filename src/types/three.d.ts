
import 'three';

declare module 'three' {
    interface Object3D {
        isElement: boolean;
        sprite: THREE.Sprite;
    }
}
