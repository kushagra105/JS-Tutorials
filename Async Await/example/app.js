async function getClients()
{
    const clients = new Promise ((resolve, reject)=>{
        setTimeout( () => {
            console.log("hello")
            resolve('Done')
            console.log("World!!")
        },3000);
    });
    const err = false;
    if (!err){
        const res = await clients;
    }
    else
    {
        await Promise.reject("Failed");
    }
}
getClients()
    .then(response => console.log(response))
    .catch(err => console.log(err));
