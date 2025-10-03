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
            .catch(error => console.log(error));

        alert("Modulo inviato correttamente")
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

            <form className="container" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Autore</label>
                    <input className="form-control"
                        type="text"
                        name="author"
                        value={formData.author} required
                        onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Titolo del libro</label>
                    <input className="form-control"
                        name="title"
                        value={formData.title} required
                        onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label"></label>
                    <textarea className="form-control"
                        name="body"
                        value={formData.body} required
                        onChange={handleChange} />
                </div>
                <div className="mb-3 form-check">
                    <input className="form-check-input"
                        type="checkbox"
                        name="public"
                        value={formData.public}
                        onChange={handleChange} />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Invia richiesta</button>
            </form>
        </>
    );
};