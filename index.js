// const {} = require('colors')
// การเรียกใช้งาน library colors ที่เราติดตั้ง ไม่จำเป็นต้องประกาศตัวแปร สามารถ import แบบบรรทัดล่างได้เลย

require('colors'); // สิ่งที่ library ทำคือจะไป over right string ให้เปลี่ยนสีได้ เช่น

const { TYPES } = require('./helper') // import TYPES ในไฟล์ js ที่เป็น object ที่เก็บ key, value กำหนดคำที่เราเรียกใช้(key) กับสีที่กำหนด(value)

const {success, warn, error} = TYPES // destructure คือ หากมีการเรียกใช้ key {success, warn, error} จะได้ value ของ obj 'TYPES'

// console.log('this is green'.green); // เปลี่ยนสีโดยการ .green ด้านหลัง string

// สร้าง Fn สำหรับ method ที่จะแปลง string ที่รับมาให้เปลี่ยนสีตามที่เรากำหนด

const logSuccess = (message) => {
    const msg = message[success]
    console.log(msg);
}

const logWarn = (message) => {
    const msg = message[warn]
    console.log(msg);
}

const logError = (message) => {
    const msg = message[error]
    console.log(msg);
}

// สร้าง Fn ที่เอาไว้สร้าง log ขึ้นมา ซึ่งเป็น Fn ที่จะ return method กลับไป 3 methods

const log = () => {
    return {
        success: (msg) => logSuccess(msg),
        warn: (msg) => logWarn(msg),
        error: (msg) => logError(msg)
    }
}

// วิธีการใช้งานคือ ให้ user ประกาศตัวแปรหนึ่งที่เรียกใช้งาน Fn log() และนำตัวเเปรนั้นมาเรียกใช้ method ที่เราสร้างตามด้วย string
const logger = log()

logger.success('Yes!!') // ผลลัพธ์ที่ได้คือ log ที่แสดงผล string + สีที่เราใส่ให้
logger.warn("It's okay!!")
logger.error('No!!')

module.exports = log;