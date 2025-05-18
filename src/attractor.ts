
import { ui } from './ui'

export enum AttractorConstraintType {
    None,
    LookAt
}

type AttractorTarget = [OutlinerNode, AttractorConstraintType];

export class Attractor {
    constraints: AttractorTarget[] = [];

	static all: Attractor[] = [];
	static selected: Attractor[] = [];

    /**Check if any elements of the type are in the project */
	static hasAny(): boolean { return Attractor.all.length > 0; }
	/**Check if any elements of the type are currently selected */
	static hasSelected(): boolean { return Attractor.selected.length > 0; }

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
