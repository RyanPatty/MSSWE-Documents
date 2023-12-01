import { GraduateStudent, UndergraduateStudent } from './Student.js';

class InternationalGraduateStudent extends GraduateStudent {
  getName() {
    return this.name;
  }

  getFeatures() {
    return this.features;
  }
}

class InternationalUndergraduateStudent extends UndergraduateStudent {
  getName() {
    return this.name;
  }

  getFeatures() {
    return this.features;
  }
}

export { InternationalGraduateStudent, InternationalUndergraduateStudent };
