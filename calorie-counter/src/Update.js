import * as R from 'ramda';

const Msg = {
    SHOW_FORM: 'SHOW_FORM',
    MEAL_INPUT: 'MEAL_INPUT',
    CALORIES_INPUT: 'CALORIES_INPUT',
    SAVE_MEAL: 'SAVE_MEAL',
    DELETE_MEAL: 'DELETE_MEAL',
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

export const saveMealMsg = {
    type: Msg.SAVE_MEAL
};

export function deleteMealMsg(id) {
    return {
        type: Msg.DELETE_MEAL,
        id: id,
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
        case Msg.SAVE_MEAL:
            return add(msg, model);
        case Msg.DELETE_MEAL:
            const { id } = msg;
            const meals = R.filter(
                meal => meal.id !== id,
                model.meals);
            return { ...model, meals };
        default:
            return model;
    }
    return model;
}

function add(msg, model) {
    const { nextId, description, calories } = model;
    const meal = { id: nextId, description, calories };
    const meals = [...model.meals, meal];
    return {
        ...model,
        meals,
        nextId: nextId + 1,
        description: '',
        calories: 0,
        showForm: false,
    }
}

export default update;