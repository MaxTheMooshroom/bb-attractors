
declare global {
    type HasFields<Keys extends string> = Record<Keys, unknown>;

    interface Callable<R = any, Args extends any[] = any[]> {
        (...args: Args): R;
    }

    class Callable {
        constructor() {
            
        }
    }

    function make_callable<C extends Callable = Callable>(obj: Object, fn: Callable): Callable {
        return Object.assign(obj.__call, obj);
    }

    // class StatefulFunction<Keys extends string, Types> { (): { (): void } };
    type EventCallback = (event?: Event) => void;
    class MenuSeparator {
        id: string;
    }
}

export {};
