import Queue from 'bull'
import redis from '../config/redis'

import redisConfig from '../config/redis'

import * as jobs from '../jobs'

const queues = Object.values(jobs).map((job) => ({
  bull: new Queue(job.key, process.env.REDIS_URL || ''),
  name: job.key,
  handle: job.handle,
}))

export default {
  queues,
  add(name: string, data: any) {
    const queue = this.queues.find((item) => (item.name = name))
    return queue && queue.bull.add(data)
  },
  process() {
    return this.queues.forEach((queue) => {
      queue.bull.process(queue.handle)
      queue.bull.on('failed', (job, err) => {
        console.log('Job failed:', job.name, job.data)
        console.log(err)
      })
    })
  },
}

// import RegistrationMail from '../jobs/RegistrationMail'

// const mailQueue = new Queue(RegistrationMail.key, process.env.REDIS_URL || '')
// // const mailQueue = new Queue(RegistrationMail.key, redisConfig)

// mailQueue.on('failed', (job) => {
//   console.log('Job Failed', job.name, job.data)
// })

// export default mailQueue
