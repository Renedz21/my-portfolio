export const query = async () => {
    const res = await fetch('https://my-portfolio-be.onrender.com/api/project')
        .then(res => res.json())
        .catch(err => console.log(err))
    return res
}