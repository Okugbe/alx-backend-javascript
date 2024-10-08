export default function getStudentIdsSum(students) {
    // Use the reduce function to sum up the IDs
    return students.reduce((sum, student) => sum + student.id, 0);
}