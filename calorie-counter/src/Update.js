const Msg = {
    SHOW_FORM: 'SHOW_FORM',
};

export function showFormMsg(showForm) {
    return {
        type: Msg.SHOW_FORM,
        showForm,
    };
}

function update(msg, model) {
    switch (msg.type) {
        case Msg.SHOW_FORM:
            const { showForm } = msg;
            return {...model, showForm, description: '', calories: 0 };
        default:
            return model;
    }
    return model;
}

export default update;