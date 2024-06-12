import { Header } from '$/widgets/Header'
import { CallMeSection } from '$/widgets/sections/CallMe'
import { ServiceSection } from '$/widgets/sections/Service'
import { WhoWeAreSection } from '$/widgets/sections/WhoWeAre'

export const MainPage = () => {
	return (
		<>
			<Header />
			<WhoWeAreSection />
			<CallMeSection />
			<ServiceSection />
		</>
	)
}
