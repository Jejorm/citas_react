import { useState, useEffect } from 'react'

import { Error } from './Error'

export const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

    const [nombre, setNombre] = useState('')

    const [propietario, setPropietario] = useState('')

    const [email, setEmail] = useState('')

    const [fecha, setFecha] = useState('')

    const [síntomas, setSíntomas] = useState('')

    const [error, setError] = useState(false)

    useEffect(() => {

        if (Object.keys(paciente).length > 0) {

            setNombre(paciente.nombre)

            setPropietario(paciente.propietario)

            setEmail(paciente.email)

            setFecha(paciente.fecha)

            setSíntomas(paciente.síntomas)
        }

    }, [paciente])

    const generarId = () => {

        const random = Math.random().toString(36).substring(2)

        const fecha = Date.now().toString(36)

        return random + fecha
    }

    const handleSubmit = e => {

        e.preventDefault()

        if ([nombre, propietario, email, fecha, síntomas].includes('')) {

            setError(true)

            return
        }

        setError(false)

        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            síntomas,
        }

        if (paciente.id) {

            objetoPaciente.id = paciente.id

            const pacientesActualizados = pacientes.map(
                pacienteState =>
                    pacienteState.id === paciente.id
                        ? objetoPaciente
                        : pacienteState
            )

            setPacientes(pacientesActualizados)

            setPaciente({})

        } else {

            objetoPaciente.id = generarId()

            setPacientes([
                ...pacientes,
                objetoPaciente
            ])
        }

        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSíntomas('')
    }

    return (

        <div className='mx-4 md:w-1/2 lg:w-2/5'>

            <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

            <p className='text-xl mt-8 text-center mb-12'>
                Añade Pacientes y {''}
                <span className='text-indigo-600 font-bold'>Administrados</span>
            </p>

            <form
                className='bg-white shadow-md rounded-lg py-10 px-5 mb-12'
                onSubmit={handleSubmit}
            >

                { error && <Error><p>Todos los campos son obligatorios</p></Error>}

                <div className='mb-8'>

                    <label
                        className='block text-gray-700 uppercase font-bold text-xl'
                        htmlFor='mascota'
                    >
                        Nombre Mascota
                    </label>

                    <input
                        className='border-2 w-full p-2 mt-4 text-xl rounded-md placeholder:text-gray-400'
                        id='mascota'
                        type='text'
                        placeholder='Nombre de la Mascota'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />

                </div>

                <div className='mb-8'>

                    <label
                        className='block text-gray-700 uppercase font-bold text-xl'
                        htmlFor='propietario'
                    >
                        Nombre Propietarios
                    </label>

                    <input
                        className='border-2 w-full p-2 mt-4 text-xl rounded-md placeholder:text-gray-400'
                        id='propietario'
                        type='text'
                        placeholder='Nombre del Propietario'
                        value={propietario}
                        onChange={e => setPropietario(e.target.value)}
                    />

                </div>

                <div className='mb-8'>

                    <label
                        className='block text-gray-700 uppercase font-bold text-xl'
                        htmlFor='email'
                    >
                        Email
                    </label>

                    <input
                        className='border-2 w-full p-2 mt-4 text-xl rounded-md placeholder:text-gray-400'
                        id='email'
                        type='email'
                        placeholder='Email Contacto'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                </div>

                <div className='mb-8'>

                    <label
                        className='block text-gray-700 uppercase font-bold text-xl'
                        htmlFor='alta'
                    >
                        Alta
                    </label>

                    <input
                        className='border-2 w-full p-2 mt-4 text-xl rounded-md placeholder:text-gray-400'
                        id='alta'
                        type='date'
                        value={fecha}
                        onChange={e => setFecha(e.target.value)}
                    />

                </div>

                <div className='mb-8'>

                    <label
                        className='block text-gray-700 uppercase font-bold text-xl'
                        htmlFor='síntomas'
                    >
                        Síntomas
                    </label>

                    <textarea
                        className='border-2 w-full p-2 mt-4 text-xl rounded-md placeholder:text-gray-400'
                        id='síntomas'
                        placeholder='Describe los Síntomas'
                        value={síntomas}
                        onChange={e => setSíntomas(e.target.value)}
                    />

                </div>

                <input
                    className='bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer transition-all hover:bg-indigo-700'
                    type='submit'
                    value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                />

            </form>

        </div>
    )
}