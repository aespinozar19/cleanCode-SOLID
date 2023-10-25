(() => {

    // función para obtener información de una película por Id
    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getInfoMovieActorsById( movieId: string ) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( ActorId: string ) {
        console.log({ ActorId });
    }
    
    interface createMovieOptions {
        title: string, 
        description: string, 
        rating: number, 
        cast: string[]
    }

    // Crear una película - Crear Interface Pelicula
    //function createMovie(title: string, description: string, rating: number, cast: string[] ) {
    function createMovie({title, description, rating, cast} : createMovieOptions ) {
        console.log({ title, description, rating, cast });
    }


    function checkFullName (fullName: string){
        console.log(fullName);
        return true;   
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        //if ( fullName === 'fernando' ) return false;
        if ( checkFullName(fullName) ) return false;

        console.log('Crear actor');
        return true;        
 
    }

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        /*
        let result: number;
        
        if ( isDead ) {
            result = 1500;
        } else {
            if ( isSeparated ) {
                result = 2500;
            } else {
                if ( isRetired ) {
                    result = 3000;
                } else {
                    result = 4000; 
                }
            }
        }
        
        return result;*/

        if ( isDead ) return 1500;

        if ( isSeparated ) return 2500;

        return (isRetired) ? 3000 : 4000;

    }

    


})();




