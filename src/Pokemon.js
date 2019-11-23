
import React from 'react';

class PokemonComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                {/* Pokemon'un adını yazdırdık. */}
                <div>
                    <h2>
                        {this.props.name}
                    </h2>
                </div>

                {/* Pokemon'un Resimini bastırdık. */}
                <div>
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`}
                    />
                </div>

                {/* Tipi */}
                <div><b>Tipi:</b> {this.props.type}</div>

                {/* Gücü */}
                <div><b>Gücü:</b> {this.props.base_experience}</div>

                {/* Pokemonları ayıran çizgi */}
                <hr />
            </div>
        )
    }
}

export default PokemonComponent;