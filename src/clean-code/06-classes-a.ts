(() => {
    //NO aplicando el principio de responsabilidad única
    type Gender = 'M'|'F';
    
    class Person {
        /* Manera larga
        public name: string;
        public gender: Gender;
        public birthday: Date;

        constructor(name: string, gender: Gender, birthday: Date){
            this.name = name;
            this.gender = gender;
            this.birthday = birthday;
        }*/

        // Manera Corta
        constructor(
            public name: string,
            public gender: Gender,
            public birthday: Date
            ){}
    }

    class User extends Person{
        
        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            
            name: string,
            gender: Gender,
            birthday: Date
            ){
                super(name, gender, birthday);
                this.lastAccess = new Date();
            }

        checkCredentials(){
            return true;
        }
    }

    class UserSettings extends User{

        constructor(
            public workingDirectory : string,
            public lastOpenFolder   : string,
            email                   : string,
            role                    : string,
            name                    : string,
            gender                  : Gender,
            birthday                : Date
        ){
            super(email, role ,name, gender, birthday);
        }
    }


    const newPerson = new Person('Anthony', 'M', new Date('1991-08-11'));
    console.log({newPerson});

    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'correo@dominio.com',
        'Admin',
        'Anthony',
        'M',
        new Date('1991-11-08')
    );

    //, areCredentialsValid: userSettings.checkCredentials()
    console.log({userSettings });


})();