/**
 * Interface for Director.
 */
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

/**
* Interface for Teacher.
*/
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}


/**
 * Class representing a Director.
 */
class Director implements DirectorInterface {
  workFromHome(): string {
      return 'Working from home';
  }

  getCoffeeBreak(): string {
      return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
      return 'Getting to director tasks';
  }
}

/**
* Class representing a Teacher.
*/
class Teacher implements TeacherInterface {
  workFromHome(): string {
      return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
      return 'Cannot have a break';
  }

  workTeacherTasks(): string {
      return 'Getting to work';
  }
}

/**
 * Function to create an employee.
 */
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
  } else {
      return new Director();
  }
}
