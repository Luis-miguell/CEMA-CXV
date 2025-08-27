import React from "react";

function EditForm(){



    return( 
        <div>
            <h2>Editar Perfil</h2>
            <form>
                <label>Nombre:</label>
                <input type="text" name="name" />
                <label>Apellido:</label>
                <input type="text" name="lastname" />
            </form>
        </div>
    );
}
export default EditForm