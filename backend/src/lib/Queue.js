import Bee from 'bee-queue';
import CancellationMail from '../app/jobs/CancellationMail';
import redisConfig from '../config/redis';

const jobs = [CancellationMail];

class Queue {
	constructor() {
		this.queues = {};

		this.init();
	}

	init() {
		jobs.forEach(({ key, handle }) => {
			this.queues[key] = {
				bee: new Bee(key, { redis: redisConfig }),
				handle,
			};
		});
	}

	add(queue, job) {
		return this.queues[queue].bee.createJob(job).save();
	}

	processQueue() {
		jobs.forEach(({ key }) => {
			const { bee, handle } = this.queues[key];
			bee.process(handle);
		});
	}
}

export default new Queue();
