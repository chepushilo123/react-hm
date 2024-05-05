import { useState } from "react";


let postList = [{name: 'vasya', title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, aliquam?', likes: 0},
    {name: 'petya', title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, aliquam?', likes: 0},
    {name: 'jora', title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, aliquam?', likes: 0},
    {name: 'toma', title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, aliquam?', likes: 0},
    {name: 'kesha', title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, aliquam?', likes: 0}]



export default function Posts() {

    return (

        postList.map(title => {

            let [count, setCount] = useState(title.likes)

                return (
                <>
                    <div className="block block_post">
                        <div className="post">
                            <h4>{title.name}</h4>
                            <p>{title.title}</p>
                        </div>
                        <div className="likes">
                            <button onClick={() => {setCount(count + 1)}}>{count}</button>
                        </div>
                    </div>
                </>
                )
        })
    );
}