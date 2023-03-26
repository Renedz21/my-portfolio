export const query = async () => {
    const res = await fetch('http://localhost:3500/api/project')
        .then(res => res.json())
        .catch(err => console.log(err))
    return res
}