class intern {
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
        return "intern";
    }
}

module.exports = intern;