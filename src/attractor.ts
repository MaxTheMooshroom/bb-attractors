
import { ui } from './ui'

export enum AttractorType {
    None,
    LookAt
}

export class Attractor extends Locator {
    target?: Locator;
    type: AttractorType = AttractorType.None;
    // constraints: AttractorConstraint[] = [];

    static register(): void {
        OutlinerElement.registerType(Attractor, 'attractor');
        MenuBar.menus.edit.addAction(ui.BUTTONS.add_attractor, '6');
        Group.prototype.menu?.addAction(ui.BUTTONS.add_attractor, '#settings');
    }

    static unregister() {
        Group.prototype.menu?.removeAction(ui.BUTTONS.add_attractor);
        MenuBar.menus.edit.removeAction('add_attractor');
        delete OutlinerElement.types['attractor'];
    }
}
