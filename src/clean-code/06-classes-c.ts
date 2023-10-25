(() => {
    //APLICANDO el principio de responsabilidad única
    //priorizar la composición frente a la herencia
    type Gender = 'M' | 'F';
    console.log("CLAS E CC");

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
    }

    class User {

        private lastAccess: Date;
        public email: string;
        public role: string;

        constructor({ 
            email, 
            role 
        }: UserProperties) {            
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }


    interface SettingsProperties {
        workingDirectory: string;
        lastOpenFolder: string;
    }

    class Settings {
        public workingDirectory: string;
        public lastOpenFolder: string;
        constructor(
            { workingDirectory, lastOpenFolder }: SettingsProperties
        ) {
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
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

    class UserSettings {
        public person: Person;
        public user: User;
        public setting: Settings;

        constructor({
            name, gender, birthday,
            email, role,
            workingDirectory, lastOpenFolder
        } : UserSettingsProperties){
            this.person = new Person({name, gender, birthday});
            this.user = new User({email, role});
            this.setting = new Settings({workingDirectory, lastOpenFolder});
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        email: 'correo@dominio.com',
        role: 'Admin',
        name: 'Anthony',
        gender: 'M',
        birthday: new Date('1991-08-11')
    });

    //userSettings.checkCredentials;
    userSettings.user.checkCredentials;
    //, areCredentialsValid: userSettings.checkCredentials()
    console.log({ userSettings });


})();