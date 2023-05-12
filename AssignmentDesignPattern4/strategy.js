
class LoggingStrategy {
    logging(message) {
      
    }
  }
  

  class Info extends LoggingStrategy {
    logging(message) {
      console.info(message);
    }
  }
  

  class Warn extends LoggingStrategy {
    logging(message) {
      console.warn(message);
    }
  }
  

  class Error extends LoggingStrategy {
    logging(message) {
      console.error(message);
    }
  }
  

  class Table extends LoggingStrategy {
    logging(data) {
      console.table(data);
    }
  }
  
 
  class Strategy {
    constructor() {
      this.currentStrategy = null;
    }
  
    setStrategy(strategy) {
      this.currentStrategy = strategy;
    }
  
    logging(message) {
      if (this.currentStrategy) {
        this.currentStrategy.logging(message);
      } else {
        console.log("No logging strategy set.");
      }
    }
  }
  
  // Test code
  const strategy = new Strategy();
  
  strategy.setStrategy(new Info());
  strategy.logging('info....');
  
  strategy.setStrategy(new Warn());
  strategy.logging('warn....');
  
  strategy.setStrategy(new Error());
  strategy.logging('error....');
  
  strategy.setStrategy(new Table());
  strategy.logging(['table', 'table']);
  