/** 🌹oddFEELING */

// React-vis
// High-cahrts

import logger from 'node-color-log';

class log {
  success(msg) {
    return logger
      .color('green')
      .log('# ')
      .joint()
      .color('black')
      .bgColor('green')
      .log('SUCCESS ')
      .joint()
      .color('green')
      .log(' >  ')
      .joint()
      .color('green')
      .log(msg ? msg : '');
  }
  error(msg) {
    return logger
      .color('red')
      .log('# ')
      .joint()
      .color('black')
      .bgColor('red')
      .log('ERROR ')
      .joint()
      .color('red')
      .log(' >  ')
      .joint()
      .color('red')
      .log(msg ? msg : '');
  }

  info(msg) {
    return logger
      .color('cyan')
      .log('# ')
      .joint()
      .color('black')
      .bgColor('cyan')
      .log('INFO ')
      .joint()
      .color('cyan')
      .log(' >  ')
      .joint()
      .color('cyan')
      .log(msg ? msg : '');
  }

  warn(msg) {
    return logger
      .color('yellow')
      .log('# ')
      .joint()
      .color('black')
      .bgColor('yellow')
      .log('WARN ')
      .joint()
      .color('yellow')
      .log(' >  ')
      .joint()
      .color('yellow')
      .log(msg ? msg : '');
  }

  data(msg) {
    return logger
      .color('magenta')
      .log('# ')
      .joint()
      .color('black')
      .bgColor('magenta')
      .log('DATA ')
      .joint()
      .color('magenta')
      .log(' >  ')
      .joint()
      .color('magenta')
      .log(msg ? msg : '');
  }
}

export default new log();
