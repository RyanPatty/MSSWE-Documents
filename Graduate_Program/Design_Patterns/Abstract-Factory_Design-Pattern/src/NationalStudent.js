import { GraduateStudent, UndergraduateStudent } from './Student.js';

class NationalGraduateStudent extends GraduateStudent {
  getName() {
    return this.name;
  }

  getFeatures() {
    return this.features;
  }
}

class NationalUndergraduateStudent extends UndergraduateStudent {
  getName() {
    return this.name;
  }

  getFeatures() {
    return this.features;
  }
}

export { NationalGraduateStudent, NationalUndergraduateStudent };