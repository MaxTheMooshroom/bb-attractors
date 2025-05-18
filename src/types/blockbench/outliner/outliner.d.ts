
interface OutlinerNode {
    type: string;
    visibility: boolean;
    mesh: THREE.Object3D;
    selected: boolean;
}

interface NodePreviewControllerOptions {
    updateWindowSize?(element: OutlinerNode): void;
}

interface NodePreviewController {
    updateWindowSize(element: OutlinerNode): void;
}
