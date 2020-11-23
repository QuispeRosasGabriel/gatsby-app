import React, { Fragment } from 'react'
import { graphql, useStaticQuery } from "gatsby";


const ContenidoInicio = () => {

    const informacion = useStaticQuery(graphql)`
    {
        allDatoCmsPagina(filter: {}) {
          nodes {
            titulo,
            contenido,
            imagen {
              fluid {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
      
      
    `;

    return (
        <Fragment>
            <h2>Titulo de Página</h2>
        </Fragment>
    )
}

export default ContenidoInicio
