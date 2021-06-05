/** @jsx jsx */
import { jsx, Box, Button, Container, Image, Flex, Link } from 'theme-ui';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import SectionHeading from 'components/section-heading';
import Slider from 'react-slick';
import cafc from 'assets/images/clients/cafc.png';



function SlickArrow({ className, onClick, control }) {
  return (
    <Button
      variant="text"
      className={className}
      sx={styles.paginationButton}
      onClick={onClick}
    >
      {control === 'prev' ? (
        <BsArrowLeft size="32px" />
      ) : (
        <BsArrowRight size="32px" />
      )}
    </Button>
  );
}


const OurCustomer = () => {

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: <SlickArrow control="next" />,
    prevArrow: <SlickArrow control="prev" />,
    infinite: true,
  };


  return (
    <Box id="testimonials" as="section" sx={styles.section}>
      <Container>
        <SectionHeading slogan="NOS CLIENTS" description="Nos clients satisfaits!" />
        <Slider {...settings}>
          <Box as="div" sx={styles.reviewItem}>
            <Box as="div" sx={styles.reviewDetails}>
              <Box as="div" sx={styles.reviewName}>
                Megan
                </Box>
              <Box as="div" sx={styles.reviewPost}>
                CEO
                </Box>
            </Box>
            <Box as="quote" sx={styles.reviewInfo}>
              <p>
                Hey there this is a review
              </p>
            </Box>

          </Box>
        </Slider>

      </Container>
    </Box>
  );
};

export default OurCustomer;

const styles = {
  section: {
    pt: [60, 60, 60, 60, 80, 9],
    pb: [30, 30, 6],
  },
  reviewItem: {
    maxWidth: '700px',
  },
  reviewDetails: {
    float: 'left',
    pl: '10px',

  },
  reviewName: {
    margin: '24px 0 0',
    fontSize: '17px',
    color: '#2c3e50',
    fontWeight: '900',
    padding: '0',
    textTransform: 'uppercase',
    display: 'block'
  },
  reviewPost: {
    color: '#2c3e50',
    display: 'block',

  },
  reviewInfo: {
    mt: '0',
    clear: 'both',
    p: {
      fontStyle: 'italic',
      color: '#00bbaa',
      textAlign: 'center',
    },
  },
  pagination: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  paginationButton: {
    minHeight: '30px',
    padding: 0,
    position: 'absolute',
    bottom: '-60px',
    ':focus': {
      outline: '0 none',
    },
    svg: {
      transition: 'all 0.2s ease-in-out 0s',
    },
    '&.slick-disabled': {
      color: '#BBC7D7',
      svg: {
        transform: 'scale(0.8)',
      },
    },
    '&.slick-prev': {
      left: 'calc(50% - 16px)',
      transform: 'translateX(-50%)',
    },
    '&.slick-next': {
      transform: 'translateX(50%)',
      right: 'calc(50% - 16px)',
    },
  },
  contentWrapper: {
    display: ['flex'],
    alignItems: ['center'],
    flexDirection: [
      'column-reverse',
      'column-reverse',
      'column-reverse',
      'row',
    ],
  },
  customers: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    pt: [0, 0, 25, 25, 25, 6],
    '&.slick-slider': {
      marginBottom: '40px',
    },
    '.slick-track': {
      display: 'flex',
      alignItems: 'center',
    },
  },
  illustration: {
    alignItems: ['flex-start'],
    maxWidth: ['none', 'none', 'none', 'none', 480, 530, 760],
    m: ['50px 0 0', '50px 0 0', '50px 0 0', 0, '0 20px 0 0', '0 48px 0 0'],
  },
  rightContent: {
    m: [0, 0, 0, 0, '0px 48px 0px 0px', '0px 95px 0px 0px'],
  },
  heading: {
    textAlign: ['center', 'center', 'center', 'left'],
    marginLeft: 0,
    maxWidth: 580,
    m: ['0 auto 27px', '0 auto 27px', '0 auto 27px', '0 0 30px'],
    h2: {
      fontSize: [22, 22, 22, 28, 30, 36, 46],
      lineHeight: [1.6, 1.6, 1.6, 1.41],
      fontWeight: [500, 500, 500, 400],
    },
    p: {
      fontSize: ['15px', '15px', '15px', '17px'],
      mt: [3, 3, 3, 20, 5],
    },
  },
  link: {
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
