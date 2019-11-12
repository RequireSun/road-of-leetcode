module.exports = (app) => {
    // coreLogger 会打印在 egg-web.log 文件里
    app.coreLogger.info('init in plugin');
    // app.config.coreMiddleware 是一个字符串数组
    app.config.coreMiddleware.unshift('addHeader');

    app.beforeStart(() => {
        app.coreLogger.info('before start in plugin');
    });
};
