import { useCounter } from '../../Global'

export const ElementB = () => {
    const increasePopulation = useCounter((state) => state.increasePopulation);    
    return (
        <>
        <div>
            <p>ElementA</p>
        </div>
        <button onClick={()=>{increasePopulation()}}>Click +1</button>
        </>
    )
}
