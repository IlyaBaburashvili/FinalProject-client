const { Campus, Student } = require('../models');

const seedDB = async () => {
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		description: "This is a school in NYC.",
		address: "New York, NY"
	});
	const dummy_campus2 = await Campus.create({
		name: "Harvard",
		description: "This is a school in MA.",
		address: "Boston, Mass"
	});

	const dummy_student = await Student.create({
			firstname: "Joe",
      lastname: "Shmo",
	  email: "Joe@gmail.com",
	  gpa:3.0
		});

	await dummy_student.setCampus(dummy_campus);
	
}

module.exports = seedDB;