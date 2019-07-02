import React from 'react';
import { graphql } from 'gatsby';

import './layout.css';

export const query = graphql`
  query {
    rickAndMorty {
      characters(filter: { name: "Rick" }) {
        results {
          id
          name
          image
        }
      }
    }
    allInstaNode {
      nodes {
        id
        thumbnails {
          src
        }
        caption
      }
    }
  }
`;

const Index = ({ data }) => (
  <>
    <section className='grid'>
      {data.rickAndMorty.characters.results.map(rick => (
        <figure key={rick.id} className='image'>
          <img src={rick.image} alt={rick.name} />
          <figcaption>{rick.name}</figcaption>
        </figure>
      ))}
    </section>
    <h2>More on Instragram</h2>
    <section className='grid'>
      {data.allInstaNode.nodes.map(insta => (
        <figure key={insta.id} className='image'>
          <img src={insta.thumbnails[1].src} alt={insta.caption} />
          <figcaption>{insta.caption}</figcaption>
        </figure>
      ))}
    </section>
  </>
);

export default Index;
