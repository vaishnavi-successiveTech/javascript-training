// 5.  Write a program to implement a Promise-based task queue, that processes tasks in a specified order, with a specified concurrency limit
class PromiseRateLimiter {
  constructor(limit) {
    this.limit = limit;
    this.activeRequest = 0;
    this.queue = [];
  }
  addTask(task, priority) {
    return new Promise((resolve, reject) => {
      this.queue.push({
        task:() => task().then(resolve).catch(reject),
        priority
      });
      this.queue.sort((a, b) => a.priority - b.priority);
      this.processQueue(); // Trying to process the task
    });
  }

  processQueue() {
    // process the task here.
    if (this.activeRequest >=this.limit || this.queue === 0) {
      return;
    }
    const nextTask = this.queue.shift();
    this.activeRequest++; // active requests updated.
    nextTask.task().finally(() => {
      this.activeRequest--;
      this.processQueue();
    });
  }
}

const createTask = (id, time) => {
  return () => {
    new Promise((resolve) => {
      console.log(`Task ${id} started`);
      setTimeout(() => {
        console.log(`Task ${id} finished after ${time}`);
        resolve(`ask ${id} completed after ${time}`);
      }, time);
    });
  };
};

const rateLimiter=new PromiseRateLimiter(3);

rateLimiter.addTask(createTask(1,1000),2);
rateLimiter.addTask(createTask(3,1000),1);
rateLimiter.addTask(createTask(5,1000),7);
rateLimiter.addTask(createTask(2,1000),3);
