import React from 'react'
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import styled from '@emotion/styled';

const ImageBackground = styled(BackgroundImage)`
    height: 700px;



`;

const ImagenHotel = () => {

    const { image } = useStaticQuery(graphql`
    query {
  image: file(relativePath: {eq:"8.jpg"}) {
    sharp: childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
}
    `);

    return (
        <ImageBackground tag="section" fluid={image.sharp.fluid}
        fadeIn="soft"
        >
        </ImageBackground>
    )
}

export default ImagenHotel
