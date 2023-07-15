// usecasesInstance.ts

export class UsecaseInstance<T> {
  constructor(private readonly useCase: T) {}
  getInstance(): T {
    return this.useCase;
  }
}


//! clase genérica  UsecaseInstance  <T> parametro genérico
//se pasa como argumento la instancia a instanciar , el metodo get instance devuelve la instancia de usecase que se inicializó con el argumento pasado 
//por el constructor 
//UsecaseInstance se utiliza  en el patrón de inyección de dependencias.

// UsecaseInstance se utiliza para proporcionar acceso a la instancia del caso de uso a otras partes del código.