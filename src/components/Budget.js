import React,{useState} from 'react'
import items from "../data/items";

const Budget = () => {
    console.log(items)

    const [price, setPrice] = useState()
    console.log("Price : ",price)

  return (
    <div>
        <h4>Enter Your budget to check available items: </h4>
        <input type='number' onChange={(e)=>{
            setPrice(e.target.value)
            console.log(e.target.value)
        }} />
        <h4>Items you can buy are in Green color</h4>
        <table>
            <tbody>
                {
                    items.map((item,index)=>(
                        <tr key={index}>
                            <td>{item.item}</td>
                            {
                                price>item.price ? 
                                <td style={{color:"green"}}>{item.price}</td> :
                                <td style={{color:"red"}}>{item.price}</td>
                            }
                        </tr>
                    ))
                }

            </tbody>
        </table>
    </div>
  )
}

export default Budget