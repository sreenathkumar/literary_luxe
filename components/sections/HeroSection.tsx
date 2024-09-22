import Container from "@/components/ui/Container";
import H1 from "@/components/globalTags/H1";
import { Button } from "@shadcn/button";
import Link from "next/link";
import Section from "../globalTags/Section";

function HeroSection() {
    return (
        <Section>
            <Container>
                <div className="flex flex-col md:max-w-[600px]">
                    <H1>Get the best books to read and enjoy.</H1>
                    <p className="text-neutral-200 text-lg tracking-wide leading-relaxed mt-6">Discover the books that captivate readers worldwide. Explore what people are reading and loving across the globe, and delve into their reviews and insights. Share your thoughts and opinions on these books, adding your unique perspective to the literary conversation.</p>
                </div>
                <Button className="mt-10 py-3 px-5 text-primary text-base font-medium">
                    <Link href='/books'>Explore Now!</Link>
                </Button>
            </Container>
        </Section>
    )
}

export default HeroSection