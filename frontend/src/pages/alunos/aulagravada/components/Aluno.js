import React, { Component } from 'react';


class Aluno extends Component {
    render = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', padding: 12 }}>
                <div style={{display:'flex',marginBottom:32, flex:1, alignItems:'center', justifyContent:'center'}}>
                    <iframe width="695" height="391" src="https://www.youtube.com/embed/ZJn5jjZM5ss" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div style={{ border: '1px solid gray', padding: 32, display: 'flex', flex: 1, flexDirection:'column' }}>
                    <p>
                        <b>Sujeito simples:</b> é quando na frase existe uma ação sendo praticada por um núcleo no singular ou plural. Por que um núcleo? Porque nem sempre o sujeito simples é uma pessoa, pode ser, por exemplo, um grupo (turma, bando, orquestra), um numeral (dois, cinco), um pronome (ele, ela, nós), uma palavra substantivada (o amor, o falar).
                    </p>

                    <p>
                        <b>Sujeito composto:</b> é representado por mais de um núcleo, como vimos acima. Lembre-se que o sujeito sempre está ligado à ação praticada.
                    </p>
                </div>
            </div>
        )
    }
}

export default Aluno