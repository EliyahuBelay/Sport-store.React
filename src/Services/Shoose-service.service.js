
export async function Get() {
    try {

        return await fetch("https://localhost:44346/api/Shoes")
            .then(res => res.json())
            .catch(() => console.log("error"))
    }
    catch{
        console.log("error");
    }
}

// export function Get(id){
//     fetch(`https://localhost:44346/api/Shoes/Get/${id}`)
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(()=>console.log("error"))
// }