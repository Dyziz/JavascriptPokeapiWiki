async function ambilData() {
    const imgElement = document.getElementById("gambarPokemon");
    const errorText = document.getElementById("errorText");
    const namaPokemon = document.getElementById("namaPokemon").value.toLowerCase().trim();

    if (errorText) {
        errorText.style.display = "none";
    }

    if (namaPokemon === "") {
        if (imgElement) imgElement.style.display = "none";
        return;
    }

    try {
        const respond = await fetch(`https://pokeapi.co/api/v2/pokemon/${namaPokemon}`)

        if (!respond.ok) {
            throw new Error("Pokemon tidak ditemukan, lol");
        }
        const data = await respond.json();
        const gambarPokemon = data.sprites.front_default;

        if (imgElement) {
            imgElement.src = gambarPokemon;
            imgElement.style.display = "block";
        }
    }

    catch (error) {
        console.log("error", error);
        if (imgElement) {
            imgElement.src = "error.svg";
            imgElement.style.display = "block";
        }
        if (errorText) {
            errorText.textContent = "gambar gk ada lol, ngetik yang bnr";
            errorText.style.display = "block";
        }
    }
}

ambilData();