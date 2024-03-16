/**
 * 后端需要定义日志，可惜我现在经验太少，一点感觉都没有只能暂时将它们记下来，日后再说
 * 日志存储
 * @author JackBean
 */
const log4js = require('koa-log4js')

const levels = {
    'trace': log4js.levels.TRACE,
    'debug': log4js.levels.DEBUG,
    'info': log4js.Levels.INFO,
    'warn': log4js.levels.WARN,
    'error': log4js.levels.ERROR,
    'fatal': log4js.levels.FATAL,
}

log4js.configure({
    // 定义日志器有什么
    appenders:{
        console: { type: 'console' },
        info: {
            type:'file',
            filename:'logs/all-logs.log'
        },
        error: {
            type: 'dateFile',
            filename: 'logs/log',
            pattern: 'yyyy-MM-dd.log',
            alwaysIncludePattern: true //设置文件名称为filename+pattern
        }
    },
    // 定义日志器输出出来的东西
    categories: {
        default:{ appenders: ['console'], level:'debug' },
        info:{
            appenders: ['info', 'console'],
            level: 'info'
        },
        error:{
            appenders: ['error', 'console'],
            level: 'error'
        }
    }
})

/**
 * 日志输出，level为debug
 * @param {string} content 
 */
exports.debug = (content) => {
    let logger = log4js.getLogger('debug');
    logger.Level = levels.debug;
    logger.debug(content);
}

/**
 * 日志输出，level为info
 * @param {string} content 
 */
exports.info = (content) => {
    let logger = log4js.getLogger('info');
    logger.Level = levels.info;
    logger.info(content);
}

/**
 * 日志输出，level为error
 * @param {string} content 
 */
exports.error = (content) => {
    let logger = log4js.getLogger('error');
    logger.Level = levels.error;
    logger.error(content);
}