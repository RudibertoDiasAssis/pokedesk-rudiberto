new Vue({
    el: '#app',
    data: {
      pokemonName: '',
      pokemon: null
    },
    methods: {
      searchPokemon() {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemonName}`)
          .then(response => response.json())
          .then(data => {
            this.pokemon = {
              name: data.name,
              imageUrl: data.sprites.front_default,
              type: data.types.map(type => type.type.name),
              abilities: data.abilities.map(ability => ability.ability.name)
            };
          })
          .catch(error => {
            console.error('Erro ao buscar Pokémon:', error);
            alert("Pokemon não encontrado!")
          });
      }
    }
  });
