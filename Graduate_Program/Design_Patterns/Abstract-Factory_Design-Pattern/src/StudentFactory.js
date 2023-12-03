class StudentFactory {
    createGraduate() {
      throw new Error('Nust overwrite message');
    }
  
    createUndergraduate() {
        throw new Error('Nust overwrite message');
    }
  }
  
  export default StudentFactory;
  