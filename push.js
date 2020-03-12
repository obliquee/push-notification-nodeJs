var push = require('web-push')

//for getting the public key and private key
// let vapidKeys = push.generateVAPIDKeys();
// console.log(vapidKeys);

let vapidKeys = {
  publicKey: 'BOXgopbHNxxh0qoDMY9ayoVVQUYGn4kpUDkZJ7k4bK8Gxhu8ulAPqlVeKkPzW1AMpx418IJ2BaTY3A8iX4_2RgI',
  privateKey: 'KGVkhwa13Ad_tmm0OVFokYHnG_tYUP99MDMm-iIEzic'
}

push.setVapidDetails('mailto:test@code.co.usk', vapidKeys.publicKey,vapidKeys.privateKey)



push.sendNotification(sub, 'test message')