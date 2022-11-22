## Asserts

No typescript temos a função `asserts` que pode typar um novo ou atualizar um tipo.

A função `asserts` é irmã das funções de type-guards:
 - [Typescript type-guard](https://www.typescriptlang.org/docs/handbook/advanced-types.html)

Mas a `asserts` não altera o fluxo de controle quando ele continuar através da função.


Ex:

Na função a baixo, queremos que apenas um usuario logado possa publica um post
todavia, estamos validando o loggin dele, em outro método, seria errado atribuir validação de loggin, ao método de publicação de post.

Ainda assim, mesmo validando esse método, e tentando manter a variavel, não uma reatribuição, recebemos um erro, porque o compilador não pode indentificar que o loggin já foi validado.

```typescript
export class some {
    constructor(public loggedInUserId?: string){}

    cratePost(title: string){
        this.assertUserIsLoggedIn();
        
        // will have a error here, since loggedInUserId can be undefined
        this.publicPost(this.loggedInUserId, title)
    }

    assertUserIsLoggedIn(){
        if(!this.loggedInUserId) {
            throw new Error('You must be logged in')
        }
    }

    publicPost(id: string, title: string) {
        console.debug('post', id.length, title)
    }
}
```
Então usamos o assert, para garantir tanto ao compilador, quando a outros devs lendo nosso código, quanto a testes unitários, que o retorno dessa função, garante que o ID de usuario agora existe

Então dentro da mesma classe: 

```typescript
cratePost(title: string){
        this.assertUserIsLoggedIn();

        this.publicPost(this.loggedInUserId, title)
    }

    assertUserIsLoggedIn(): asserts this is this & { loggedInUserId: string }  {
        if(!this.loggedInUserId) {
            throw new Error('You must be logged in')
        }
    }

    publicPost(id: string, title: string) {
        console.debug('post', id.length, title)
    }
```

Usando o assert definimos que após a execução daquela função o loggedInUserId será apenas string, já validado.
O que acontece é: se não for string, soltamos um erro, então o após essa função não vai existir, assim podemos tipar o após ela, tranquilamente.

