import * as React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import About from '../components/About';


export default () => {
  return (
    <Layout>
      <SEO title="Home" />
      <About />
    </Layout>
  )
};
