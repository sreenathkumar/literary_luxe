import { cn } from "@/lib/utils"
import Branding from "./ui/Branding"
import FooterBottom from "./ui/FooterBottom"
import FooterCTA from "./ui/FooterCTA"
import LinkList from "./ui/LinkList"
import Container from "./ui/Container"

function Footer() {
    return (
        <footer className={cn("pt-[96px] mt-auto w-full bg-[#131211]")}>
            <Container>
                <div className={cn("flex flex-col justify-start items-start gap-10 md:flex-row md:justify-between ")}>
                    <Branding />
                    <LinkList title="About Us" links={[
                        { title: "Home", url: '' },
                        { title: "Blog", url: "/blog" },
                        { title: "Contact", url: "/contact" },
                        { title: "Support", url: "/support" },
                        { title: "FAQ", url: "/faq" }
                    ]} />
                    <LinkList title="Check out" links={[
                        { title: "Why you should read books", url: '/blog' },
                        { title: "What you get by reading books", url: "/blog" },
                        { title: "20 benefits of reading books", url: "/blog" },
                    ]} />
                    <FooterCTA />
                </div>
                <FooterBottom />
            </Container>
        </footer>
    )
}

export default Footer