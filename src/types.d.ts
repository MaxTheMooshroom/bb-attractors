
declare global {
    type HasFields<Keys extends string> = Record<Keys, unknown>;

    // class StatefulFunction<Keys extends string, Types> { (): { (): void } };
    type EventCallback = (event?: Event) => void;
    class MenuSeparator {
        id: string;
    }
    
    class Object3D {

    }
}

export {};
