export const SHOW = 'show';
export const HIDE = 'hide';

export const show = (payload = false) => ({
    type:    SHOW,
    payload: payload,
});
export const hide = () => ({
    type: HIDE,
});
