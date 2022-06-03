import React, { useState } from 'react'
import { IState as Props } from "../App";

interface IProps{
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
    people: Props["people"]
}

const AddToList:React.FC<IProps> = ({people,setPeople}) => {
    const [input, setInput] = useState({
        name: "",
        age: "",
        notes: "",
        image: ""
    }) 
    const handleChange=(e:React.ChangeEvent<HTMLInputElement| HTMLTextAreaElement>)=>{
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }
    const handleClick=()=>{
        if(!input.name || !input.age) return

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                image: input.image,
                notes: input.notes
            }
        ]);

        setInput({
            name: "",
            age: "",
            image: "",
            notes: ""
        })
    }
  return (
    <div className="AddToList">
            <input 
                type="text"
                onChange={handleChange}
                className="AddToList-input"
                name="name"
                value={input.name}
                placeholder="Name"
            />
            <input 
                type="text"
                onChange={handleChange}
                className="AddToList-input"
                name="age"
                value={input.age}
                placeholder="Age"
            />
            <input 
                type="text"
                onChange={handleChange}
                className="AddToList-input"
                name="image"
                value={input.image}
                placeholder="Image Url"
            />
            <textarea
                onChange={handleChange}
                className="AddToList-input"
                name="notes"
                value={input.notes}
                placeholder="Note"
            />
            <button
                onClick={handleClick}
                className="AddToList-btn"
            >
                Add to List
            </button>
        </div>
  )
}

export default AddToList;