import { useState } from "react";

export default function MyMain() {

    const [formData, setFormData] = useState({
        author: "",
        title: "",
        body: "",
        public: false
    })

    // funzione per il submit

    function handleSubmit(e) {
        e.preventDefault();
        axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
            .then(res => console.log("dati inviati", res.data))
            .catch(error => console.log(error))
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            setFormData({ ...formData, [name]: checked });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        name="author"
                        value={formData.author} required
                        onChange={handleChange} />
                    <input type="text"
                        name="title"
                        value={formData.title} required
                        onChange={handleChange} />
                    <textarea
                        name="body"
                        value={formData.body} required
                        onChange={handleChange} ></textarea>
                    <input type="checkbox"
                        name="public"
                        value={formData.public}
                        onChange={handleChange} />
                    <button type="submit">Invia richiesta</button>
                </form>

            </div>
        </>
    );
};
