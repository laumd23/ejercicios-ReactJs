
export default function Home(props) {
  
  const { dishes } = props;
  const render = dishes.map((dish, index) => {
    const headers = Object.keys(dishes[0]);
    return headers.map((header) => {
      return (
        <>
          <div key={`dish${index}`}>
            <p>{header}: {dish[header]}</p>
          </div>
        </>
      )
    })
  })
  return (
    <>
      {render}
    </>
  )
}