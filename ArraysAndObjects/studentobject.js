function createStudent(name, age, grades) {  
    return {  
        name: name,  
        age: age,  
        grades: grades,  
        calculateAverage: function() {  
            if (this.grades.length === 0) {  
                return 0; // Return 0 if there are no grades.  
            }  
            const sum = this.grades.reduce((acc, grade) => acc + grade, 0);  
            return sum / this.grades.length;  
        }  
    };  
}  

// Example usage:  
const student1 = createStudent("John Doe", 20, [90, 85, 78]);  
console.log("Average Grade:", student1.calculateAverage());  
// this.grades.reduce: This calls the reduce method on the array named this.grades. 
// (acc, grade) => acc + grade: This is the callback function that is applied to each element in the array. 
// acc: Represents the accumulator, which starts at 0 and accumulates the sum throughout the loop. 
// grade: Represents the current element being processed in the array. 
// acc + grade: In each iteration, the current grade is added to the accumulator. 
// 0: This is the initial value of the accumulator, meaning the sum starts at 0.