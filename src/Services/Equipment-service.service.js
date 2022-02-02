
export async function Get(){
    return await fetch("https://localhost:44346/api/Equipment")
    .then(res => res.json())
    .catch(()=> console.log("error"))
}
