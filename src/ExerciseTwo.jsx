import { useState, useEffect } from "react";

function Greeting(props) {
  const { name } = props;
  const [ change, setChange] = useState (`Hola ${name}`);

  useEffect(() => {
    const timer = setTimeout(()=>{
      setChange('Hola Alfonsina');
    }, 3000);
  }, []);

  return (
    <p>{change}</p>
  )
}

export default Greeting;