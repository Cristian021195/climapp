import { useCounter } from '../../Global'

export const ElementA = () => {
    const bears = useCounter((state) => state.bears);
  return (
    <div>
        <p>ElementA {bears}</p>
    </div>
  )
}
