interface Response {
    token: string;
    user: {
        login : string
        nome: string
    };
}

export function singIn(): Promise<Response> { 
    return new Promise( resolve=> { 
        setTimeout( ()=> { 
            resolve({
                token: 'almsçsamlkq2poij213op34klm465lmk',
                user: {
                    login: 'jefferson',
                    nome: 'jeferson ferreira da silva'
                }
            })
        },100)
    } )
 }