function delayedCallback(callback: () => void, delay: number): void {
    setTimeout(callback, delay);
  }
  
  delayedCallback(() => {console.log('Callback function được gọi sau 1s.');}, 1000); 
  