
export async function Get(){
    try{
        return await fetch("https://localhost:44346/api/Shirt")
        .then((res)=> res.json())
        .catch(()=>console.log("erorr"))
    }
    catch{
        console.log("error");
    }
}
