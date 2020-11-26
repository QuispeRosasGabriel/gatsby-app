import { graphql } from 'gatsby'
import React from 'react'

export const query = graphql`
	query($slug: String!){
  allDatoCmsHabitacion(filter: {slug: {eq: $slug}}) {
    nodes {
      titulo
      id
      slug
      contenido
      imagen {
        fluid(maxWidth: 1200) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
}
`;

const HabitacionTemplate = ({data}) => {
    return (
        <div>
            Habitacion.js
        </div>
    )
}

export default HabitacionTemplate
