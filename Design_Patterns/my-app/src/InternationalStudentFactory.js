import StudentFactory from './StudentFactory.js';
import { InternationalGraduateStudent, InternationalUndergraduateStudent } from './InternationalStudent.js';

class InternationalStudentFactory extends StudentFactory {
  createGraduate(name, features) {
    return new InternationalGraduateStudent(name, features);
  }

  createUndergraduate(name, features) {
    return new InternationalUndergraduateStudent(name, features);
  }
}

export default InternationalStudentFactory;