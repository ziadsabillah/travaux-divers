import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Clients from 'sections/clients';
import FeaturedSpace from 'sections/featured-space';
// import OurCustomer from 'sections/our-customer';
import Gallery from 'sections/gallery';
import Pricing from 'sections/pricing';
import Blog from 'sections/blog';
import Subscription from 'sections/subscription';
import Contact from 'sections/contact';
import Numbers from 'sections/numbers';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';



export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Travaux Divers - MaTechSo Template" />
        <Banner />
        <InView threshold="0.5">
          {({ ref, inView }) => (
            <motion.div ref={ref} initial={{ opacity: 0 }}
            animate={inView ? {opacity: 1} : {opacity: 0}}
            transition={{ duration: 0.8 }}>
              <FeaturedSpace    />
            </motion.div>
          )}
        </InView>
        
        <Gallery />
        <Numbers />
        <Clients />
        <Blog />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}
