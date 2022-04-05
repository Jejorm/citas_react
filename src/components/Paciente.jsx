export const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

    const { nombre, propietario, email, fecha, síntomas, id } = paciente

    const handleEliminar = () => {
        const respuesta = confirm('¿Deseas eliminar este paciente?')

        if (respuesta) {
            eliminarPaciente(id)
        }
    }

    return (

        <div className='mx-4 my-8 bg-white shadow-md px-5 py-10 rounded-xl'>

            <p className='font-bold text-xl mb-8 text-gray-700 uppercase'>
                Nombre: {''}

                <span className='font-normal normal-case text-xl'>{nombre}</span>

            </p>

            <p className='font-bold mb-8 text-xl text-gray-700 uppercase'>
                Propietario: {''}

                <span className='font-normal normal-case text-xl'>{propietario}</span>

            </p>

            <p className='font-bold mb-8 text-xl text-gray-700 uppercase'>
                Email: {''}

                <span className='font-normal normal-case text-xl'>{email}</span>

            </p>

            <p className='font-bold mb-8 text-xl text-gray-700 uppercase'>
                Fecha Alta: {''}

                <span className='font-normal normal-case text-xl'>{fecha}</span>

            </p>

            <p className='font-bold text-gray-700 text-xl uppercase'>
                Síntomas: {''}

                <span className='font-normal normal-case text-xl'>{síntomas}</span>

            </p>

            <div className='flex justify-between mt-12'>

                <button
                    className='px-4 py-2 sm:px-10 bg-indigo-600 text-white font-bold uppercase rounded-lg max-w-full hover:bg-indigo-700'
                    type='button'
                    onClick={ () => setPaciente(paciente) }
                >
                    Editar
                </button>

                <button
                    className='px-4 py-2 sm:px-10 bg-red-600 text-white font-bold uppercase rounded-lg max-w-full hover:bg-red-700'
                    type='button'
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>

            </div>

        </div>
    )
}