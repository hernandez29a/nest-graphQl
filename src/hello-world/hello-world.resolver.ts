import { Float, Query, Resolver } from '@nestjs/graphql';

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
}
