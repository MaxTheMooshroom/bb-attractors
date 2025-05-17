
export function menu_item_location(menu: Menu, path: string): number | undefined {
    let track = path.split('.')

    function traverse(arr: MenuItem[], layer: number = 0): number | undefined {
        if (track.length === layer || track[layer] === '' || !isNaN(parseInt(track[layer])) || (track[layer][0] == '#')) {
            let index = arr.length;
            if (track[layer] !== '' && track.length !== layer) {
                if (track[layer].startsWith('#')) {
                    // Group Anchor
                    let group = track[layer].substring(1);
                    let group_match = false;
                    index = 0;
                    for (let item of arr) {
                        if (item instanceof MenuSeparator) {
                            if (item.id == group) {
                                group_match = true;
                            } else if (group_match && item.id != group) {
                                break;
                            }
                        }
                        index++;
                    }
                } else {
                    index = parseInt(track[layer])
                }
            }
            return index;
        } else {
            for (let i = 0; i < arr.length; i++) {
                let item = arr[i];
                if (typeof item === 'string') continue;
                if ('children' in item && item.children instanceof Array && item.id === track[layer] && layer < 20) {
                    return traverse(item.children, layer+1);
                }
            }
        }
    }

    return traverse(menu.structure);
}
