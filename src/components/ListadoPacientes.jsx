import { Paciente } from './Paciente'

export const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

    return (

        <div className='overflow-y-scroll md:w-1/2 md:h-screen lg:w-3/5'>

            { pacientes && pacientes.length

                ?

                    (
                        <>

                            <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>

                            <p className='text-xl mt-8 mb-12 text-center'>
                                Administra tus {''}
                                <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>

                            </p>

                            {
                                pacientes.map(paciente => (
                                    <Paciente
                                        paciente={paciente}
                                        key={paciente.id}
                                        setPaciente={setPaciente}
                                        eliminarPaciente={eliminarPaciente}
                                    />
                                ))
                            }

                        </>
                    )
                :
                    (
                        <>

                            <h2 className='font-black text-3xl text-center'>No hay Pacientes</h2>

                            <p className='text-xl mt-8 mb-12 text-center'>
                                Comienza agregando pacientes {''}
                                <span className='text-indigo-600 font-bold'>y aparecerán en este lugar</span>

                            </p>

                        </>

                    )
            }
        </div>
    )
}