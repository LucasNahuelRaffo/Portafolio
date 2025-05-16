"use client"

// PortfolioApp.jsx
import perfil from "./img/foto_mia.jpg"
import imagen1 from "./img/Screenshot 2025-05-14 115931.jpg"
import imagen2 from "./img/Screenshot 2.jpg"
import imagen3 from "./img/Screenshot 3.jpg"
import { useState, useEffect } from "react"
import ParticleBackground from "./components/ParticleBackground"

import { Github, Linkedin, Mail, Moon, Sun, ExternalLink, Menu, X } from "lucide-react"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  // Simula la carga de datos desde una API
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulación de carga de datos
    setTimeout(() => {
      setProjects([
        {
          id: 1,
          title: "🌱 Sitio Web: Laureles Holístico",
          description:
            "Diseño y desarrollo completo de un sitio web para un centro de bienestar. Incluye secciones de servicios, testimonios, galería, preguntas frecuentes y formulario de contacto, Tecnologías: como  HTML, CSS, JavaScript",
          tags: ["React", "Node.js", "MongoDB"],
          image: imagen1,
          link: "https://lucasnahuelraffo.github.io/Laureles/",
        },
        {
          id: 2,
          title: "🌍 Juego: Adivina el colectivo",
          description:
            "juego educativo en el que los usuarios deben adivinar un colectivo con base en ciertas pistas. Tecnologías: JavaScript puro.",
          tags: ["React", "Redux", "Firebase"],
          image: imagen2,
          link: "#",
        },
        {
          id: 3,
          title: "🚀 Manejo de Api- Pokedex",
          description:
            "Pokédex Web App es una aplicación web interactiva construida con React que consume datos en tiempo real desde la PokéAPI, una API pública de Pokémon..",
          tags: ["React Native", "GraphQL", "AWS"],
          image: imagen3,
          link: "#",
        },
      ])
      setLoading(false)
    }, 1000)
  }, [])

  // Cambia el modo oscuro
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  // Datos personales
  const personalInfo = {
    name: "Lucas Nahuel Raffo",
    title: "Desarrollador Frontend",
    description:
      "Soy un desarrollador de software especializado en crear experiencias web interactivas y atractivas. Con experiencia en React y tecnologías frontend modernas.",
    skills: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Node.js", "Git", "Responsive Design", "CSS3/Tailwind"],
    experience: [
      {
        id: 2,
        company: "Freelancer",
        position: "Desarrollador Web",
        period: "2020 - 2025 - Presente",
        description: "Creación de sitios web responsive y aplicaciones para clientes.",
      },
      {
        id: 1,
        company: "Formacion-pasantia",
        position: "técnico de reparación de hardware ",
        period: "2025",
        description:
          "Encargado de en identificar, solucionar y reparar problemas en los componentes físicos de un sistema informático.",
      },
    ],
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log({ name, email, message })
    alert("Mensaje enviado correctamente!")
    setName("")
    setEmail("")
    setMessage("")
  }

  return (
    <div className="relative">
      <ParticleBackground darkMode={darkMode} />
      <div
        className={`min-h-screen transition-colors duration-300 relative z-1 ${darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}
      >
        {/* Barra de navegación */}
        <nav className={` w-full z-10 ${darkMode ? "bg-gray-800" : "bg-white"} shadow-md`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0 font-bold text-xl">{personalInfo.name}</div>

              {/* Navegación para pantallas grandes */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-4">
                  <a
                    href="#home"
                    className="relative px-3 py-2 font-medium text-current transition-colors duration-300 hover:text-blue-500
              before:content-[''] before:absolute before:bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-blue-500
              before:transition-all before:duration-300 hover:before:w-full"
                  >
                    Inicio
                  </a>
                  <a
                    href="#about"
                    className="relative px-3 py-2 font-medium text-current transition-colors duration-300 hover:text-blue-500
              before:content-[''] before:absolute before:bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-blue-500
              before:transition-all before:duration-300 hover:before:w-full"
                  >
                    Sobre mí
                  </a>
                  <a
                    href="#projects"
                    className="relative px-3 py-2 font-medium text-current transition-colors duration-300 hover:text-blue-500
              before:content-[''] before:absolute before:bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-blue-500
              before:transition-all before:duration-300 hover:before:w-full"
                  >
                    Proyectos
                  </a>
                  <a
                    href="#experience"
                    className="relative px-3 py-2 font-medium text-current transition-colors duration-300 hover:text-blue-500
              before:content-[''] before:absolute before:bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-blue-500
              before:transition-all before:duration-300 hover:before:w-full"
                  >
                    Experiencia
                  </a>
                  <a
                    href="#contact"
                    className="relative px-3 py-2 font-medium text-current transition-colors duration-300 hover:text-blue-500
              before:content-[''] before:absolute before:bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-blue-500
              before:transition-all before:duration-300 hover:before:w-full"
                  >
                    Contacto
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                {/* Botón de modo oscuro */}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-2 rounded-full ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                {/* Botón de menú para móvil */}
                <div className="md:hidden ml-4">
                  <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className={`p-2 rounded-md ${darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"}`}
                  >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Menú móvil */}
          {menuOpen && (
            <div className={`md:hidden ${darkMode ? "bg-gray-800" : "bg-white"}`}>
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#home"
                  className="block px-3 py-2 rounded-md hover:text-blue-500 font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  Inicio
                </a>
                <a
                  href="#about"
                  className="block px-3 py-2 rounded-md hover:text-blue-500 font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  Sobre mí
                </a>
                <a
                  href="#projects"
                  className="block px-3 py-2 rounded-md hover:text-blue-500 font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  Proyectos
                </a>
                <a
                  href="#experience"
                  className="block px-3 py-2 rounded-md hover:text-blue-500 font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  Experiencia
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 rounded-md hover:text-blue-500 font-medium"
                  onClick={() => setMenuOpen(false)}
                >
                  Contacto
                </a>
              </div>
            </div>
          )}
        </nav>
        {/* Hero section */}
        <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-1/2">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                  Hola, soy <span className="text-blue-500">{personalInfo.name}</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6">{personalInfo.title}</h2>
                <p className="text-lg mb-8 max-w-2xl">{personalInfo.description}</p>
                <div className="flex space-x-4">
                  <a
                    href="#contact"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
                  >
                    Contáctame
                  </a>
                  <a
                    href="#projects"
                    className={`border ${darkMode ? "border-white hover:bg-gray-800" : "border-gray-300 hover:bg-gray-100"} px-6 py-3 rounded-md font-medium transition-colors`}
                  >
                    Ver proyectos
                  </a>
                </div>
              </div>
              <div className="hidden md:block md:w-1/2">
                <img
                  src={perfil || "/placeholder.svg"}
                  alt="Profile"
                  className="mx-auto rounded-full w-64 h-64 object-cover border-4 border-blue-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sobre mí */}
        <section id="about" className={`py-16 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Sobre Mí</h2>

            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <p className="text-lg mb-6">
                  Me especializo en crear aplicaciones modernas, rápidas y escalables utilizando las últimas tecnologías
                  frontend.
                </p>
                <p className="text-lg mb-6">
                  Mi objetivo es proporcionar soluciones eficientes y optimizadas que ofrezcan la mejor experiencia
                  posible al usuario, manteniendo siempre estándares de calidad y rendimiento.
                </p>
                <p className="text-lg">
                  Estoy constantemente aprendiendo y actualizándome con las últimas tendencias y mejores prácticas del
                  desarrollo web.
                </p>
              </div>

              <div className="md:w-1/2 md:pl-12">
                <h3 className="text-xl font-semibold mb-4">Mis habilidades</h3>
                <div className="flex flex-wrap gap-3">
                  {personalInfo.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-110 hover:shadow-lg cursor-default ${
                        darkMode
                          ? "bg-gray-700 text-blue-300 hover:bg-blue-600 hover:text-white"
                          : "bg-blue-100 text-blue-800 hover:bg-blue-500 hover:text-white"
                      } animate-fadeIn`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proyectos */}
        <section id="projects" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Mis Proyectos</h2>

            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div
                  className={`animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 ${darkMode ? "border-white" : "border-blue-500"}`}
                ></div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className={`rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 ${
                      darkMode ? "bg-gray-800" : "bg-white"
                    }`}
                  >
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className={`px-2 py-1 rounded text-xs font-medium ${
                              darkMode ? "bg-gray-700 text-blue-300" : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        className="inline-flex items-center text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Ver proyecto <ExternalLink size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Experiencia */}
        <section id="experience" className={`py-16 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Experiencia Profesional</h2>

            <div className="space-y-12">
              {personalInfo.experience.map((job) => (
                <div key={job.id} className="md:flex">
                  <div className="md:w-1/3 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold">{job.company}</h3>
                    <p className="text-blue-500 font-medium">{job.position}</p>
                    <p className={darkMode ? "text-gray-300" : "text-gray-600"}>{job.period}</p>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-lg">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contact" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Contáctame</h2>

            <div className="md:flex md:gap-12">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h3 className="text-xl font-bold mb-4">¡Hablemos!</h3>
                <p className="mb-6 text-lg">
                  Estoy interesado en oportunidades freelance y proyectos desafiantes. Si tienes alguna propuesta o
                  pregunta, no dudes en contactarme.
                </p>

                <div className="space-y-4">
                  <a href="Lucasnraffo@gmail.com" className="flex items-center hover:text-blue-500">
                    <Mail size={20} className="mr-3" />
                    <span>lucasnraffo@gmail.com</span>
                  </a>
                  <a
                    href="https://github.com/LucasNahuelRaffo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-blue-500"
                  >
                    <Github size={20} className="mr-3" />
                    <span>github.com/LucasNahuelRaffo</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/lucas-nahuel-raffo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-blue-500"
                  >
                    <Linkedin size={20} className="mr-3" />
                    <span>linkedin.com/in/lucas-nahuel-raffo</span>
                  </a>
                </div>
              </div>

              <div className="md:w-1/2">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full px-4 py-2 rounded-md border ${
                        darkMode
                          ? "bg-gray-800 border-gray-700 focus:border-blue-500"
                          : "bg-white border-gray-300 focus:border-blue-500"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full px-4 py-2 rounded-md border ${
                        darkMode
                          ? "bg-gray-800 border-gray-700 focus:border-blue-500"
                          : "bg-white border-gray-300 focus:border-blue-500"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                      placeholder="tu.email@ejemplo.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={`w-full px-4 py-2 rounded-md border ${
                        darkMode
                          ? "bg-gray-800 border-gray-700 focus:border-blue-500"
                          : "bg-white border-gray-300 focus:border-blue-500"
                      } focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                      placeholder="Tu mensaje..."
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-md font-medium transition-colors"
                  >
                    Enviar mensaje
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`py-8 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p>
                  © {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.
                </p>
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/LucasNahuelRaffo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/lucas-nahuel-raffo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
                >
                  <Linkedin size={20} />
                </a>
                <a href="mailto:tu.email@ejemplo.com" className="hover:text-blue-500">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
