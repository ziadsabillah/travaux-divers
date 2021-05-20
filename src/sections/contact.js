import SectionHeading from 'components/section-heading';
import { jsx, Box, Container, Flex, Button, Input, Textarea } from 'theme-ui';

import { rgba } from 'polished'


const Contact = () => {
    return (
        <>

            <Box id="contact" as="section">
                <Container>
                    <SectionHeading sx={styles.heading} title='Contact' slogan="Demandez Votre Devis" />

                    <Flex as="form" sx={styles.form}>
                        <Box as="label" htmlFor="email" variant="styles.srOnly">
                            Email
                        </Box>
                        <Input type="email" id="email" placeholder="Votre Email" />
                        <Box as="label" htmlFor="name" variant="styles.srOnly">
                            Nom
                        </Box>
                        <Input type="name" id="name" placeholder="Votre Nom" />
                        
                    </Flex>
                    <Flex as="form" sx={styles.form}>
                    <Box as="label" htmlFor="entrepriseName" variant="styles.srOnly">
                            Nom du société
                        </Box>
                        <Input type="text" id="entrepriseName" placeholder="Raison Social" />
                        <Box as="label" htmlFor="tel" variant="styles.srOnly">
                            Numero de Telephone
                        </Box>
                        <Input type="tel" id="tel" placeholder="Numero de Telephone" />
                    </Flex>
                    <Flex as='form' sx={styles.form}>
                        <Box as="label" htmlFor="text" variant="styles.srOnly">
                            Message
                        </Box>
                        <Textarea rows={8} type="text" id="message" placeholder="Entrer votre message" />
                    </Flex>
                    <Flex as="form" sx={styles.formBtn  }>
                        <Button variant="black">Envoyer</Button>
                    </Flex>


                </Container>
            </Box>

        </>
    )
}

export default Contact;

const styles = {
    section: {
        pt: [30, 30, 40, 50, 60],
        pb: [60, 60, 60, 90, 80, 120],
    },
    heading: {
        mb: [30, 30, 40, 60],
        textAlign: 'center'
    },
    form: {
        mt: [10, 10],
        alignItems: 'center',
        display: ['block', 'flex'],
        input: {
            margin: '10px',
            backgroundColor: rgba('#fff', 0.08),
            borderRadius: '5px',
            borderColor: rgba('#000', 0.5),
            color: rgba('#000', 0.8),
            flexGrow: 1,
            fontFamily: 'body',
            height: 'auto',
            px: '30px',
            py: '0',
            minHeight: [50, 50, 60],
            width: ['100%', 'auto'],
            '::placeholder': {
              color: rgba('#000', 0.8),
            },
        },
        textarea: {
            margin: '10px',
            backgroundColor: rgba('#fff', 0.08),
            borderRadius: '5px',
            borderColor: rgba('#000', 0.5),
            color: rgba('#000', 0.8),
            flexGrow: 1,
            fontFamily: 'body',
            height: 'auto',
            px: '30px',
            py: '0',
            minHeight: [50, 50, 60],
            width: ['100%', 'auto'],
            '::placeholder': {
              color: rgba('#000', 0.8),
            },
        }
    },
    formBtn: {
        display: ['block', 'flex'],
        justifyContent: 'center',
        margin: '20px'
    }
}