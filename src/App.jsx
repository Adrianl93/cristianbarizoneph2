import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OnlineCourses from './components/OnlineCourses'; 
import Home from './components/Home'; 
import NavBar from './components/NavBar';
import Section from './components/Section';
import Footer from './components/Footer';
import foto1 from './assets/foto1.jpg';
import foto2 from './assets/foto2.jpg';
import foto3 from './assets/foto3.jpg';
import foto4 from './assets/foto4.jpg';
import foto5 from './assets/foto5.jpg';
import foto6 from './assets/foto6.jpg';
import foto7 from './assets/foto7.jpg';
import foto8 from './assets/foto8.jpg';
import foto9 from './assets/foto9.jpg';
import foto10 from './assets/foto10.jpg';
import foto11 from './assets/foto11.jpg';
import foto12 from './assets/foto12.jpg';



import './App.css';

const projectData = {
    colors: {
        primary: "#a47b5e",
        secondary: "#f7dbb0",
        accent: "#393237",
        backHome: "#be9380",
        back1: "#d4b39f",
        back2:"#ead4bf",
        back3: "#f5dfb0"
    },
    navBar: {
        home: "Home",
        sections: [
            { id: "section1", label: "Fotografía" },
            { id: "section2", label: "Cursos" },
            { id: "section3", label: "Contacto" }
        ]
    },
    sections: [
        {
            id: "home",
            title: "¡Bienvenido!",
            description1: "¡Hola! Soy Cristian Barizone, fotógrafo profesional especializado en familias.",
            description2: "A lo largo de mi carrera, me he formado con referentes destacados tanto a nivel nacional como internacional, lo que me ha permitido perfeccionar mi técnica y estilo.",
            description3: "Cursé estudios en la Universidad Nacional de Río Cuarto (UNRC) y en la Universidad Católica de Salta (UCASAL), especializándome en fotografía de niños y familias, para capturar esos momentos únicos y memorables que atesorarás para siempre.",
            image: foto1,
            backgroundColor: "#be9380"
        },
        {
            id: "section1",
            title: "Fotografía",
            description: "",
            image: foto2,
            backgroundColor: "#d4b39f",
            images: [foto4, foto5, foto6, foto7,foto8, foto9, foto10, foto11,foto12] 
        },
        {
            id: "section2",
            title: "Cursos de fotografía",
            description: [
                "¡Explora el arte de la fotografía con nuestros cursos! 📸✨",
                "Ofrecemos modalidad virtual y presencial con prácticas en diversos rincones de la ciudad.",
                "Recibirás orientación personalizada y apoyo para sentirte seguro en tu camino fotográfico.",
                "Obtendrás los mejores recursos, presets y acciones listos para aplicar en tus fotografías.",
                "",
                "¡Únete y aprende a contar historias a través de imágenes poderosas! 🌟",
                "",
                "¡Reserva tu lugar y comienza tu aventura en el mundo de la fotografía!"
              ],
              
            starterDate:"Agosto 2024",
            schedule:"Sábados de 10 a 13 hrs",
            duration:"8 clases ( 2 meses)",
            modality:"Clases prácticas en locaciones exteriores",
            booking:"Abonando el 50% al momento de la inscripción",
            info:"Info y reservas: 3584601279",
            limitedPlaces:"Cupos limitados",
            image: foto2,
            backgroundColor: "#ead4bf",
            courseStartDate: '2024-08-03T10:00:00', // Fecha del curso
            contact: {
                whatsapp: "https://wa.me/3584601279", // Numero de whatsapp
                message: "Hola Cristian!! quiero inscribirme a tu curso"
            }
        },
        {
            id: "section3",
            title: "Contacto",
            description: "",
            image: foto3,
            backgroundColor: "#f5dfb0",
        
            form: {
                namePlaceholder: "Nombre",
                emailPlaceholder: "Email",
                messagePlaceholder: "Mensaje",
                submitButtonLabel: "Enviar"
            }
        }
    ],
    footer: {
        email: "mailto:email@example.com",
        whatsapp: "https://wa.me/3584601279",
        instagram: "https://www.instagram.com/cristianbarizonephotography"
    },
    onlineCourses:  { 
        curso1: {
            id:1,
            title: 'Curso de Fotografía Inicial',
            description: [
                "¡Descubre la fotografía con este curso inicial para principiantes! 📸✨",
                "Aprende desde los conceptos básicos de la cámara hasta capturar imágenes con confianza y creatividad.",
                "El curso incluye clases prácticas en distintas locaciones de la ciudad donde aprenderás composición, iluminación y manejo de la cámara. Te guiaré paso a paso para capturar imágenes que cuenten historias.",
                "¿Listo para desbloquear tu potencial creativo? 🌟",
                "¡Reserva tu lugar y comienza tu aventura fotográfica!"
              ], 
            whatsappMessage: 'Hola, estoy interesado en el Curso de Fotografía Inicial',
        },
        curso2: {
            id:2,
            title: 'Curso de Fotografía Avanzado',
            description: [
                "¡Lleva tus técnicas fotográficas al siguiente nivel con este curso avanzado! 📸✨",
                "Explora técnicas avanzadas de composición, manejo de luz, y retoque digital para crear imágenes impactantes perfeccionando tu estilo y visión artística.",
                "Te acompañaré a través de sesiones en diferentes locaciones, trabajando con iluminación natural y artificial para conseguir resultados profesionales.",
                "¿Listo para perfeccionar tu técnica y destacar en el mundo de la fotografía? 🌟",
                "¡Reserva tu lugar y transforma tu pasión en arte fotográfico!"
                ],
            whatsappMessage: 'Hola, estoy interesado en el Curso de Fotografía Avanzado',
        },
        curso3: {
            id:3,
            title: 'Workshop de Fotografía',
            description: [
                "¡Transforma tu forma de ver la fotografía con este workshop de alto nivel! 📸✨",
                "Sumérgete en una experiencia donde aprenderás técnicas avanzadas de composición y manejo de luz directamente en el campo.",
                "Participa en sesiones prácticas en diversas locaciones obteniendo resultados impactantes",
                "Trabaja de cerca con un fotógrafo experimentado que te guiará en cada paso, ayudándote a perfeccionar tu técnica y a crear imágenes únicas.",
                "¿Listo para llevar tus habilidades a la práctica y destacar en el mundo de la fotografía? 🌟",
                "¡Inscríbete ahora y vive una experiencia fotográfica transformadora!"
            ],
            whatsappMessage: 'Hola, estoy interesado en el Workshop de fotografía',
        },
        curso4: {
            id:4,
            title: 'Clase de Edición fotográfica',
            description: [
                "¡Transforma tus fotografías desde cero con nuestra clase de edición básica! 🎨📸",
                "Descubre los fundamentos esenciales para mejorar tus imágenes con técnicas sencillas de edición, desde la corrección de color hasta el retoque inicial.",
                "Aprende a aplicar ajustes básicos de edición para transformar tus fotos en creaciones visuales impactantes, sin necesidad de experiencia previa.",
                "¿Listo para dar el primer paso en el arte de la edición y ver cómo tus fotos cobran vida? 🌟",
                "¡Inscríbete y comienza a transformar tus imágenes en obras maestras con técnicas accesibles y prácticas!"
            ],
            whatsappMessage: 'Hola, estoy interesado en la Clase de Edición fotográfica',
        },
        curso5: {
            id:5,
            title: 'Mentoring 1 to 1',
            description: [
                "¿Deseas atención personalizada? ¡nuestro mentoring 1 a 1 es la solución! 📸✨",
                "Recibe atención exclusiva y asesoramiento experto en sesiones individuales diseñadas para abordar tus necesidades y objetivos específicos en fotografía.",
                "Cada sesión está adaptada a tu nivel y estilo, brindándote apoyo y feedback personalizado para ayudarte a alcanzar tu máximo potencial.",
                "¿Quieres llevar tu fotografía al siguiente nivel con orientación experta y apoyo personalizado?🌟",
                "¡Reserva tu sesión de mentoring 1 a 1 y empieza a avanzar hacia tus metas fotográficas con confianza!"
            ],
            whatsappMessage: 'Hola, estoy interesado en el Mentoring 1 to 1',
        }
    }
};



function App() {
    useEffect(() => {
        document.documentElement.style.setProperty('--primary-color', projectData.colors.primary);
        document.documentElement.style.setProperty('--secondary-color', projectData.colors.secondary);
        document.documentElement.style.setProperty('--accent-color', projectData.colors.accent);
    }, []);

    return (
        <Router>
        <div className="App">
            <NavBar data={projectData.navBar} />
            <Routes>
                {/* Ruta para la página principal */}
                <Route path="/" element={<Home data={projectData} />} />

                {/* Ruta para la página de Cursos Online */}
                <Route path="/OnlineCourses" element={<OnlineCourses data={projectData} />} />

                {/* Rutas para las secciones */}
                {projectData.sections.map((section) => (
                    <Route key={section.id} path={`/${section.id}`} element={<Section data={section} />} />
                ))}

                {/* Ruta por defecto o 404 */}
                <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
            <Footer data={projectData.footer} />
        </div>
    </Router>
    );
}

export default App;
