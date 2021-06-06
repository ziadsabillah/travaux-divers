/** @jsx jsx */
import { jsx, Box, Container, Image, Button } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import GalleryCard from 'components/cards/gallery-card';

import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

import gallery1 from 'assets/images/gallery/1.jpeg';
import gallery2 from 'assets/images/gallery/2.jpg';
import gallery3 from 'assets/images/gallery/3.jpg';
import gallery4 from 'assets/images/gallery/4.jpg';
import gallery5 from 'assets/images/gallery/5.jpeg';
import gallery6 from 'assets/images/gallery/6.jpeg';
import gallery7 from 'assets/images/gallery/project-6.jpeg';
import gallery8 from 'assets/images/gallery/clinic.jpeg';

const data = [
  {
    id: 1,
    image: gallery1,
    title: 'Plateau Casanearshore',
  },
  {
    id: 2,
    image: gallery2,
    title: 'Mitscorp',
  },
  {
    id: 3,
    image: gallery3,
    title: 'Thaïs',
  },
  {
    id: 4,
    image: gallery4,
    title: 'Park View Square',
  },
  {
    id: 5,
    image: gallery6,
    title: 'Devcorp',
  },
  {
    id: 6,
    image: gallery5,
    title: "Cabinet d'Avocats AGJAL"
  },
  {
    id: 7,
    image: gallery7,
    title: "Made Architecture",
  },
  {
    id: 8,
    image: gallery8,
    title: "Clinique Val Anfa",
  }
];

const masonryOptions = {
  transitionDuration: 0,
};

const Gallery = () => {
  return (
    <Box id="gallery" as="section" sx={styles.section}>
      <Container sx={styles.container}>
        <SectionHeading
          sx={styles.heading}
          slogan="Projets que nous aimons"
          title="NOS REALISATIONS"
        />
        <Box as={Masonry} options={masonryOptions} sx={styles.galleryWrapper}>
          {data?.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Gallery;

const styles = {
  section: {
    pt: [30, 30, 40, 50, 60],
    pb: [60, 60, 60, 90, 80, 120],
  },
  heading: {
    mb: [30, 30, 40, 60],
  },
  galleryWrapper: {
    mx: '-15px',
  },
  button: {
    minHeight: [50, 50, 50, 60],
    fontSize: [14, 14, 16],
    width: '100%',
    svg: {
      transition: 'margin-left 0.3s ease-in-out 0s',
    },
    ':hover': {
      svg: {
        ml: '5px',
      },
    },
  },
};
