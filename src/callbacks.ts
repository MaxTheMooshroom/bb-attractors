
import Vue from "vue";
import { Attractor } from "./attractor";
import { register_attractor_preview } from './render';

const PERSISTENT_STATE: Record<string, any> = {};

const CALLBACKS: Record<string, EventCallback> = {
    add_attractor: function() {
        register_attractor_preview(Attractor);

        PERSISTENT_STATE.attractor_objs = PERSISTENT_STATE.attractor_objs || [];
        PERSISTENT_STATE.attractor_cols = PERSISTENT_STATE.attractor_cols || [];

        let objs = PERSISTENT_STATE.attractor_objs as OutlinerElement[];
        let cols = PERSISTENT_STATE.attractor_objs as Collection[];
        
        Undo.initEdit({elements: objs, outliner: true, collections: cols});
        var attractor = new Attractor({ name: 'attractor' }).addTo(Group.first_selected||selected[0]).init();
        attractor.select()?.createUniqueName();
        objs.push(attractor);
        Undo.finishEdit('Add locator');
        Vue.nextTick(function() {
            if (settings.create_rename.value) {
                attractor.rename();
            }
        })
    },
};

export default CALLBACKS;
