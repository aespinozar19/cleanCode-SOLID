(() => {
    //NO aplicando el principio de responsabilidad única
    type Gender = 'M' | 'F';
    console.log("CLAS E B");

    interface PersonProperties {
        name: string;
        gender: Gender;
        birthday: Date;
    }

    class Person {

        public name: string;
        public gender: Gender;
        public birthday: Date;

        constructor({ name, gender, birthday }: PersonProperties) {
            this.name = name;
            this.gender = gender;
            this.birthday = birthday;
        }
    }

    interface UserProperties {
        email: string;
        role: string;
        //personProperties: PersonProperties;
        name: string;
        gender: Gender,
        birthday: Date;
    }

    class User extends Person {

        private lastAccess: Date;
        public email: string;
        public role: string;

        constructor({ email, role, name, gender, birthday }: UserProperties) {
            super({ name, gender, birthday });
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }


    interface UserSettingsProperties {
        workingDirectory: string;
        lastOpenFolder: string;
        email: string;
        role: string;
        name: string;
        gender: Gender;
        birthday: Date;
    }

    class UserSettings extends User {
        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor(
            { workingDirectory, lastOpenFolder, email, role, name, gender, birthday }: UserSettingsProperties
        ) {
            super({ email, role, name, gender, birthday });
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;

        }
    }


    //const newPerson = new Person('Anthony', 'M', new Date('1991-08-11'));
    //console.log({newPerson});

    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        email: 'correo@dominio.com',
        role: 'Admin',
        name: 'Anthony',
        gender: 'M',
        birthday: new Date('1991-08-11')
    });

    userSettings.checkCredentials;
    //, areCredentialsValid: userSettings.checkCredentials()
    console.log({ userSettings });


})();