import hh from 'hyperscript-helpers';
import { h } from 'virtual-dom';

const { pre } = hh(h);

function view(dispatch, model) {
    return pre(JSON.stringify(model, null, 2));
}

export default view;