class GraduateStudent {
    constructor(name, features) {
      if (new.target === GraduateStudent) {
        throw new TypeError("Cannot construct Abstract instances directly");
      }
      this.name = name;
      this.features = features;
    }
  
    getName() {
      throw new Error('This method must be overwritten!');
    }
  
    getFeatures() {
      throw new Error('This method must be overwritten!');
    }
  
  }
  
  class UndergraduateStudent {
    constructor(name, features) {
      if (new.target === UndergraduateStudent) {
        throw new TypeError("Cannot construct Abstract instances directly");
      }
      this.name = name;
      this.features = features;
    }
  
    getName() {
      throw new Error('This method must be overwritten!');
    }
  
    getFeatures() {
      throw new Error('This method must be overwritten!');
    }
  }
  
  export { GraduateStudent, UndergraduateStudent };
  