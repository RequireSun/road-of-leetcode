import {bar} from './another';

console.log('a.mjs', bar());

export const foo = () => {
    return 'foo';
};
