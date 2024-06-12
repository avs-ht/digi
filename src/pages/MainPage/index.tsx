import { Header } from '$/widgets/Header'
import { CallMeSection } from '$/widgets/sections/CallMe'
import { OurProjectsSection } from '$/widgets/sections/OurProjects'
import { ServiceSection } from '$/widgets/sections/Service'
import { TeamSection } from '$/widgets/sections/Team'
import { WhoWeAreSection } from '$/widgets/sections/WhoWeAre'

export const MainPage = () => {
	return (
		<>
			<Header />
			<WhoWeAreSection />
			<CallMeSection />
			<ServiceSection />
			<OurProjectsSection />
			<TeamSection />
		</>
	)
}
