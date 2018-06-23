import * as R from 'ramda';

const Msg = {
    SHOW_FORM: 'SHOW_FORM',
    MEAL_INPUT: 'MEAL_INPUT',
    CALORIES_INPUT: 'CALORIES_INPUT',
};

export function showFormMsg(showForm) {
    return {
        type: Msg.SHOW_FORM,
        showForm,
    };
}

export function mealInputMsg(description) {
    return {
        type: Msg.MEAL_INPUT,
        description,
    };
}

export function caloriesInputMsg(calories) {
    return {
        type: Msg.CALORIES_INPUT,
        calories,
    };
}

function update(msg, model) {
    switch (msg.type) {
        case Msg.SHOW_FORM:
            const { showForm } = msg;
            return {...model, showForm, description: '', calories: 0 };
        case Msg.MEAL_INPUT:
            const { description } = msg;
            return { ...model, description };
        case Msg.CALORIES_INPUT:
            const calories = R.pipe(
                parseInt,
                R.defaultTo(0)
            )(msg.calories);
            return { ...model, calories };
        default:
            return model;
    }
    return model;
}

export default update;