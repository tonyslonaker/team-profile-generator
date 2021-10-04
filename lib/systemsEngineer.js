class systemsEngineer {
    const (name, id, email, gitHub) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.gitHub = gitHub;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getgitHub() {
        return this.gitHub;
    }
    getRole() {
        return "Systems Engineer";
    }
}

module.exports = systemsEngineer;