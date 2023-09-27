import useFetch from '../Hooks/useFetch'
import ItemDetails from '../components/Items/ItemDetails'

const Detalle = ( { id }) => {
    const [character] = useFetch(`https://rickandmortyapi.com/api/character/${id}`)
    return (
        <>
            {
                character !== null &&
                <ItemDetails character={character} />

            }
        </>
    )
}

export default Detalle