class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.tardies = 0;
    this.scores = [];
  }

  fullName () {
    return `Your fullname is ${this.firstName} ${this.lastName}`
  }
  
  markLate () {
    this.tardies += 1;
    return `${this.firstName} has been late ${this.tardies} times`;
  }

  addScore (score) {
    this.scores.push(score);
    return this.scores;
  }

  calculateAverageScore() {
    let sum = this.scores.reduce((total, grade) => total + grade, 0);
    return `${sum / this.scores.length} is ${this.student}'s average test score.`;
  }

}

let firstStudent = new Student('Colt', 'Steele', 1);
let secondStudent = new Student('David', 'Ngo', 3);
