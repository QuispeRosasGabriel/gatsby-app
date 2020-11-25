const { graphql } = require("gatsby")

exports.createPages = async({ actions, grapql, reporter}) => {
    const resultado = await graphql(`
    query {
        allDatoCmsHabitacion {
            nodes {
                slug
            }
        }
    }
    `);

    if(resultado.errors) {
        reporter.panic('No hubo resultados', resultado.errors);
    }

    // Crear los archivos si existen las paginas

    const habitaciones = resultado.data.allDatoCmsHabitacion.nodes;

    habitaciones.forEach(habitacion => {
        actions.createPage({
            
        });
    });
}