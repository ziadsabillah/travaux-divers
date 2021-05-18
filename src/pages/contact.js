import Layout from "components/layout";
import SEO from "components/seo";
import ContactSection from "sections/contact";

export default function Contact() {
    return (
        <>

            <Layout>
                <SEO title="Contact" />
                <ContactSection />
            </Layout>

        </>
    )
}