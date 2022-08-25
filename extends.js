class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    feedBack() {
        console.log(`${this.name} thank you for your feedback`);
    }
}

class Instructor extends TeamMember {
    designation = 'Web Course Instructor';
    team = 'Web Team';
    constructor(name, location) {
        super(name, location);
    }
    startSupportSession(time) {
        console.log(`Start the session ${time}`);
    }
    makeQuiz(module) {
        console.log(`Make a qize of module ${module}`);
    }
}

class Developer extends TeamMember {
    designation = 'Web Course Instructor';
    team = 'Web Team';
    tech;
    constructor(name, location, tech) {
        super(name, location);
        this.tech = tech;
    }
    developeFeature(feature) {
        console.log(`Please develope the ${feature}`);
    }
    release(version) {
        console.log(`Release the version ${version}`);
    }
}
class JobPlacement extends TeamMember {
    designation = 'JOb placement comando';
    team = 'Web Team';
    region;
    constructor(name, location, region) {
        super(name, location);
        this.region = region;
    }
    provideResume(resume) {
        console.log(`Please  the ${resume}`);
    }
    prepareStudent(student) {
        console.log(`Prepare of all ${student}`);
    }
}

// const alia = new Developer('Alia', 'Dhaka', 'React');
// console.log(alia);
// alia.feedBack();


const nums = [1, 2, 3, 4, 5];
let output = nums.filter(n => n % 2);
console.log(output);