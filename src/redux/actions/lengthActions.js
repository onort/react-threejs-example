import { types } from "./"

export const decreaseLength = () => ({ type: types.DECREASE_LENGTH })

export const increaseLength = () => ({ type: types.INCREASE_LENGTH })

export const setLength = length => ({ type: types.SET_LENGTH, length })
