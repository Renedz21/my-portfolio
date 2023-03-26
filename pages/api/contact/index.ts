interface Props {
    name: string,
    email: string,
    message: string
}
export default async function handler({ name, email, message }: Props) {
    const result = await fetch('https://my-portfolio-be.onrender.com/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            message
        })
    })
    return result.json();
}