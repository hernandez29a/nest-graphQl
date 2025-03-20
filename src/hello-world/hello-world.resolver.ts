import { Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {
    @Query( () => String, { description: 'Hola mundo es lo q retorna', name: 'hello'} )
    helloWorld(): string {
        return 'Hello, World!';
    }

    @Query( () => Float, { name: 'ramdomNumber', description: 'Numero aleatorio entre 0 y 1'} )
    randomNumber(): number {
        return Math.random() * 100;
    }

    @Query( () => Int, { name: 'ramdomFromZetoTo', description: 'Numero aleatorio entre 0 y 10'} )    
    getRamdomNumber(): number {
        return Math.floor(Math.random() * 10) + 1; // Genera un número entero entre 0 y 10
    }
}
