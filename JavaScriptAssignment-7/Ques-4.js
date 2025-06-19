// 4. Write a program to implement a Promise-based rate limiter, that limits the number of concurrent requests to a certain number
class RateLimiter {
  constructor(limit) {
    this.limit = limit;
    this.activeRequest = 0;
    this.queue = [];
  }
  addTask(task) {
    // task parameter is a function
    return new Promise((resolve, reject) => {
      this.queue.push(() => task().then(resolve).catch(reject));
      this.processQueue();
    });
  }

  processQueue(){ // process the task
   if(this.activeRequest>=this.limit || this.queue.length===0){
    return ;
   }
   const nextTask= this.queue.shift();
   this.activeRequest++;
  // here nextTask() act as a promise and Execute the task.
   nextTask().finally(()=>{
    this.activeRequest--;
    this.processQueue();
   })
  }
}

const createTask =(id,time) =>{
    return ()=>
        new Promise((resolve)=>{
            console.log(`Task ${id} started`);
            setTimeout(()=>{
                console.log(`Task ${id} finished after ${time}`);
                resolve(`Task ${id} completed after ${time}`);
            },time);
        });
};

const rateLimiter=new RateLimiter(3);

for(let i=1;i<=5;i++){
   rateLimiter.addTask(createTask(i,1000));
}
