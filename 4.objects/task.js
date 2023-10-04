function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
	this.setSubject = function(subjectName) {
		this.subject = subjectName;
	};
	this.addMarks = function(...marksToAdd) {
		if (!this.marks) {
			console.log("У студента нет оценок");
			return;
		}
		this.marks.push(...marksToAdd);
	};
	this.getAverage = function() {
		if (!this.marks || this.marks.length === 0) {
			return 0;
		}
		let sum = this.marks.reduce((total, mark) => total + mark, 0);
		return sum / this.marks.length;
	};
	this.exclude = function(reason) {
		delete(this.subject);
		delete(this.marks);
		this.excluded = reason;
	};
}
let student1 = new Student('Maria', 'female', 23);
student1.setSubject('Mathematics');
student1.addMarks(3, 4, 4);
console.log(student1.getAverage());
console.log(student1);
let student2 = new Student('Boris', 'male', 54);
student2.setSubject('Russian language')
student2.exclude('плохая учёба');
console.log(student2);
let student3 = new Student('Ivan', 'male', 19);
student3.setSubject('Literature');
student3.addMarks(5, 4, 5);
console.log(student1.getAverage());
this.setSubject = function(subjectName) {
	this.subject = subjectName;
};
console.log(student3);