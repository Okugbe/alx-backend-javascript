/**
 * Interface for the constructor of StudentClass.
 */
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

/**
* Interface for the StudentClass.
*/
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}
