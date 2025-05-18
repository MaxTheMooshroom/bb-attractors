
import THREE from 'three';

export namespace gizmos {

export function billboard(
            sprite_texture: string | THREE.Texture,
            position: THREE.Vector3 = new THREE.Vector3(0, 0, 0),
            scale: number = 1
        ): void {
    if (typeof sprite_texture === "string") {
        sprite_texture = new THREE.TextureLoader().load(sprite_texture);
    }
}

// export function 

}

export default gizmos;
