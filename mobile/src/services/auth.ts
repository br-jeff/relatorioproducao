export default function singIn() { 
    return new Promise( resolve=> { 
        setTimeout( ()=> { 
            resolve({
                token: 'almsçsamlkq2poij213op34klm465lmk',
                user: {
                    login: 'jefferson'
                }
            })
        },1000)
    } )
 }