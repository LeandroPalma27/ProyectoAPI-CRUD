const urlCRUD = 'https://reqres.in/api/users';

const buscarUsuario = async (id) => {
    // Por defecto es GET:
    const promesaUsuario = await fetch(`${urlCRUD}/${id}`);
    const usuario = await promesaUsuario.json();
    if (!usuario.data) {
        throw {
            message: 'User not found'
        };
    } else {
        const { data } = { ...usuario }
        return data;
    }
}

// CREAR USUARIO:
const createUser = async (usuario) => {

    try {
        // Para una peticion POST, el fetch se suele manejar asi:
        const res = await fetch(urlCRUD, {
            method: 'POST',
            // Indicamos la informacion al backend como string:
            body: JSON.stringify(usuario),
            // Con headers especificamos ciertas cosas como el tipo de contenido de la informacion enviada:
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await res.json();
    } catch (error) {
        throw {
            message: error
        }
    }
}

const updateUser = async (id, data) => {

    try {
        const res = await fetch(`${urlCRUD}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await res.json();
    } catch (error) {
        throw {
            message: error
        }
    }

}

const deleteUser = async (id) => {

    const res = await fetch(`${urlCRUD}/${id}`, {
        method: 'DELETE',
    });
    if (res.status == 204) {
        return { message: 'Usuario eliminado con exito' };
    } else {
        throw { message: 'No se pudo eliminar' };
    }

}

const subirFoto = async (file) => {
    if (file.length < 1) {
        alert('Seleccione un archivo!!');
    } else {
        try {
            const formData = new FormData();
            formData.append("upload_preset", "caf2w2by");
            formData.append("file", file[0]);
            const res = await fetch('https://api.cloudinary.com/v1_1/leandropalma27p/upload', {
                method: 'POST',
                body: formData
            });
            if (!res.ok) {
                throw await res.json();
            } else {
                return await res.json();
            }
        } catch (error) {
            throw error;
        }
    }
}

export {
    buscarUsuario,
    createUser,
    updateUser,
    deleteUser,
    subirFoto
}

