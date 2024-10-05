import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/ContactForm.css';

const ContactForm = ({ data }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isFormValid, setIsFormValid] = useState(false);

    const validateForm = () => {
        const errors = {};
        if (formData.name.trim().split(' ').length < 1) {
            errors.name = 'El nombre debe tener al menos una palabra.';
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
            errors.email = 'El email no es válido.';
        }
        if (formData.message.trim().split(' ').length < 2) {
            errors.message = 'El mensaje debe tener más de una palabra.';
        }
        setFormErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        validateForm();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid) {
            alert('Por favor, completa el formulario correctamente.');
            return;
        }
        const templateParams = {
            to_name: process.env.REACT_APP_TO_NAME, // Nombre del destinatario
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
        };

        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID, // Reemplaza con tu Service ID
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Reemplaza con tu Template ID
            templateParams,
            process.env.REACT_APP_EMAILJS_USER_ID // Reemplaza con tu User ID/ Public Key
        ).then((response) => {
            alert('Mensaje enviado exitosamente!');
            setFormData({
                name: '',
                email: '',
                message: '',
            });
        }).catch((error) => {
            console.error('Error al enviar el mensaje:', error);
            alert('Hubo un error al enviar el mensaje, por favor intenta de nuevo.');
        });
    };

    return (
        <div className="contact-form-container">
            <div className="contact-image-container">
                <img src={data.image} alt="Curso de fotografía" className="contact-image" />
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <h2 className='titleh2'>{data.title}</h2>
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    {formErrors.name && <p className="error">{formErrors.name}</p>}
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {formErrors.email && <p className="error">{formErrors.email}</p>}
                </div>
                <div>
                    <textarea
                        name="message"
                        placeholder="Mensaje"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    {formErrors.message && <p className="error">{formErrors.message}</p>}
                </div>
                <button type="submit" disabled={!isFormValid}>Enviar</button>
            </form>
        </div>
    );
};

export default ContactForm;
