import StudentFactory from './StudentFactory.js';
import { NationalGraduateStudent, NationalUndergraduateStudent } from './NationalStudent.js';

class NationalStudentFactory extends StudentFactory {
  createGraduate(name, features) {
    return new NationalGraduateStudent(name, features);
  }

  createUndergraduate(name, features) {
    return new NationalUndergraduateStudent(name, features);
  }
}

export default NationalStudentFactory;
