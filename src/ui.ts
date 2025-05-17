
import CALLBACKS from "./callbacks";

export namespace ui {
    export const BUTTONS: Record<string, Action> = {
        add_attractor: new Action('add_attractor', {
            name: 'Add Attractor',
            click: CALLBACKS.add_attractor,
            icon: 'phishing',
        }),
    };
}
