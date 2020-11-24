import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from "gatsby";


const ContenidoInicio = () => {

    const informacion = useStaticQuery(graphql`
    query {
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
    `);


    const { contenido, titulo, imagen } = informacion.allDatoCmsPagina.nodes[0];

    return (
        <Fragment>
            <h2>{titulo}</h2>
            <div>
                <p>{contenido}</p>
            </div>
            <img src={imagen.fluid.src} alt="imagen" />
        </Fragment>
    )
}

export default ContenidoInicio;
