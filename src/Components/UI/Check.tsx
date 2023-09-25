export const Check = ({color='#FF914D', width='1', height='1', extra_class="zoom-in"}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width+"rem"}
      height={height+"rem"}
      fill={color}
      className={"bi bi-check "+extra_class}
      viewBox="3 3 10 10"
    >
      <path d="M10.97 4.97a.75.75 0 011.07 1.05l-3.99 4.99a.75.75 0 01-1.08.02L4.324 8.384a.75.75 0 111.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 01.02-.022z"></path>
    </svg>
  )
}
