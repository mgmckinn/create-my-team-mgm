const Employee = require("./Employee");

// Create Engineer Class
class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.title = "Engineer";
        this.github = github;
    }
    getGitHub(){
        return this.github;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;
