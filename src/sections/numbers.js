import Feature from 'components/cards/feature';
import { Box, Container, Text } from 'theme-ui';
import Icon from 'components/icon';
import employeeIcon from 'assets/images/icons/icon-employee.png';
import engineerIcon from 'assets/images/icons/icon-engineer.png';
import machineIcon from 'assets/images/icons/icon-machines.png';
import projectsIcon from 'assets/images/icons/icon-projects.png';

import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';

import CountUp from 'react-countup';

const Numbers = () => {


    const data = {
        employees: {
            icon: employeeIcon,
            number: 8500,
        },
        engineers: {
            icon: engineerIcon,
            number: 250,
        },
        machines: {
            icon: machineIcon,
            number: 1500,
        },
        projects: {
            icon: projectsIcon,
            number: 1500
        }
    };

    return (
        <>

            <Box id='numbers' sx={styles.section} as="section">
                <Container>
                    <Box sx={styles.sectionWrapper}>
                        <InView threshold="0.15">
                            {({ ref, inView }) => (
                                <motion.div ref={ref} initial={{ opacity: 0 }}
                                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ duration: 0.1 }}>
                                    <Box as="div">
                                        <Icon sx={styles.icon} path={data.employees.icon} />
                                        <Text sx={styles.title}>Salariés</Text>
                                        <Text sx={styles.number}>
                                            <CountUp end={data.employees.number} />
                                        </Text>
                                    </Box>
                                </motion.div>
                            )}
                        </InView>

                        <InView threshold="0.15">
                            {({ ref, inView }) => (
                                <motion.div ref={ref} initial={{ opacity: 0 }}
                                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ duration: 0.3 }}>
                                    <Box as="div">
                                        <Icon sx={styles.icon} path={data.engineers.icon} />
                                        <Text sx={styles.title}>Ingénieurs</Text>
                                        <Text sx={styles.number}>
                                            <CountUp end={data.engineers.number} />
                                        </Text>
                                    </Box>
                                </motion.div>
                            )}
                        </InView>
                        <InView threshold="0.15">
                            {({ ref, inView }) => (
                                <motion.div ref={ref} initial={{ opacity: 0 }}
                                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ duration: 0.6 }}>
                                    <Box as="div">
                                        <Icon sx={styles.icon} path={data.machines.icon} />
                                        <Text sx={styles.title}>Machines</Text>
                                        <Text sx={styles.number}>
                                            <CountUp end={data.machines.number} />
                                        </Text>
                                    </Box>
                                </motion.div>
                            )}
                        </InView>

                        <InView threshold="0.15">
                            {({ ref, inView }) => (
                                <motion.div ref={ref} initial={{ opacity: 0 }}
                                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                                    transition={{ duration: 0.9 }}>
                                    <Box as="div">
                                        <Icon sx={styles.icon} path={data.projects.icon} />
                                        <Text sx={styles.title}>Projets</Text>
                                        <Text sx={styles.number}>
                                            <CountUp end={data.projects.number} />
                                        </Text>
                                    </Box>
                                </motion.div>
                            )}
                        </InView>


                    </Box>
                </Container>
            </Box>

        </>
    )
}

export default Numbers;

const styles = {
    section: {
        backgroundColor: '#EEEEEE',
        padding: '50px'
    },
    sectionWrapper: {
        display: 'grid',
        gap: ['40px', null, null, null, '30px'],
        gridTemplateColumns: [
            'repeat(2, 1fr)',
            null,
            null,
            'repeat(4, 180px)',
            'repeat(4, 1fr)'
        ],
        justifyContent: ['unset', null, null, 'center', 'flex-start'],
        textAlign: 'center'
    },
    icon: {
        margin: ['15px', null, null, '5px'],

    },
    title: {
        fontSize: '20px',
        mt: '15px'
    },
    number: {
        fontSize: '30px',
        mt: '15px',
        color: '#46B3FE',
        fontWeight: 'bold'
    }
}