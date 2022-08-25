// Syntactic sugar
class Instructor {
    name;
    designation = 'Web Course Instructor';
    team = 'Web Team';
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    startSupportSession(time) {
        console.log(`Start the session ${time}`);
    }
    makeQuiz(module) {
        console.log(`Make a qize of module ${module}`);
    }
}

const amir = new Instructor('Amir', 'Mumbai')
console.log(amir);
amir.startSupportSession('9.00');
amir.makeQuiz(60);