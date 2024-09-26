import Link from "next/link"
import { Suspense } from "react"
import BestSellingBooks from "../BestSellingBooks"
import Section from "../globalTags/Section"
import { Button } from "../shadcn/button"
import Container from "../ui/Container"
import SectionTitle from "../ui/SectionTitle"
import { LoadingSpinner } from "../ui/Loading"

async function FeaturedSection() {
  return (
    <Section>
      <Container className="gap-[72px]">
        <SectionTitle text='Best seller of the week' />
        <Suspense fallback={<LoadingSpinner />}>
          <BestSellingBooks />
        </Suspense>
        <Button variant='outline' title="view all" className="self-center" >
          <Link href='/books'>View All</Link>
        </Button>
      </Container>
    </Section>
  )
}

export default FeaturedSection