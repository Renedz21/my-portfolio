export const query = async () => {
    const res = await fetch('https://my-portfolio-be.onrender.com/api/project')
        .then(res => res.json())
        .catch(err => console.log(err))
    return res
}

export const getOneQuery = async (id: string) => {
    // const res = await fetch(`https://my-portfolio-be.onrender.com/api/project/${id}`)
    const res = await fetch(`localhost:3500/api/project/${id}`)
        .then(res => res.json())
        .catch(err => console.log(err))
    return res
}