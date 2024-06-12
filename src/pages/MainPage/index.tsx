import { Footer } from '$/widgets/Footer'
import { GoToUp } from '$/widgets/GoToUp'
import { Header } from '$/widgets/Header'
import { CallMeSection } from '$/widgets/sections/CallMe'
import { NewsSection } from '$/widgets/sections/News'
import { OurProjectsSection } from '$/widgets/sections/OurProjects'
import { ServiceSection } from '$/widgets/sections/Service'
import { TeamSection } from '$/widgets/sections/Team'
import { TestimonialSection } from '$/widgets/sections/Testimonial'
import { WhoWeAreSection } from '$/widgets/sections/WhoWeAre'

export const MainPage = () => {
	return (
		<div className="wrapper">
			<Header />
			<WhoWeAreSection />
			<CallMeSection />
			<ServiceSection />
			<OurProjectsSection />
			<TeamSection />
			<NewsSection />
			<TestimonialSection />
			<Footer />
			<GoToUp />
		</div>
	)
}
