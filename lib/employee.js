class employee {
    const (name, id, email, officePhone, gitHub) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.officePhone = officePhone;
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
    getofficePhone() {
        return this.officePhone;
    }
    getgitHub() {
        return this.gitHub;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = employee;