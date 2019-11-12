module.exports = (options, app) => {
    return async (ctx, next) => {
        console.log('in');
        await next();
        ctx.set('Add-Header', JSON.stringify(options));
        console.log('out');
    };
};
