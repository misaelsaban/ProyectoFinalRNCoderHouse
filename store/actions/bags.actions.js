export const SELECT_BAG_ID = 'SELECT_BAG_ID';

export const selectBag = (id) => ({
    type: SELECT_BAG_ID,
    bagID: id
})