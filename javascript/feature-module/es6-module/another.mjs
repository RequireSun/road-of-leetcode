import {foo} from './index';

console.log('b.mjs', foo());

export const bar = () => {
    return 'bar';
};
