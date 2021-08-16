// Default configuration
const config = {
  timezone: 'Asia/Tehran',
  locale: 'fa',
  format: 'Y-M-D H:I',
};

// Load modules
const JalaliDateTime = require('jalali-date-time');
const jalali = JalaliDateTime(config);

export default jalali

//jalali.toTime(new Date());
