import { useEffect, useState } from "react"

const Sidebar = ({setCategory}) => {
    const [categorys,setCategorys] = useState([])

    useEffect(()=>{
        fetch('category.json')
        .then(res => res.json())
        .then(data => setCategorys(data))
    },[])

    const handleCategoryClick =(categoryName) =>{
        setCategory(categoryName);
    }
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow">
        <ul className="flex flex-col gap-2">
            <li className="btn text-black hover:bg-purple-600 p-2 hover:text-white rounded-xl"  onClick={() => handleCategoryClick('all')}>All Products</li>
            {categorys.map((category) => (
                <li className="btn text-black hover:bg-purple-600 p-2 hover:text-white rounded-xl" key={category.id} onClick={() => handleCategoryClick(category.name)}>
                    {category.icon} {category.name}
                </li>
            ))}
        </ul>

    </div>
  )
}

export default Sidebar