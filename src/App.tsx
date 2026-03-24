import AirWidget from "./features/air/AirWidget";
import CitySearch from "./features/city/CitySearch";
import Header from "./features/Header";
import CitiesWidget from "./features/weather/CitiesWidget/CitiesWidget";
import ForecastWidget from "./features/weather/ForecastWidget/ForecastWidget";
import MainWidget from "./features/weather/MainWidget/MainWidget";
import MoonWidget from "./features/weather/MoonWidget/MoonWidget";
import UVWidget from "./features/weather/UVWidget/UVWidget";
import WindWidget from "./features/weather/WindWidget/WindWidget";
import Footer from "./ui/Footer";
import Widget from "./ui/Widget";

function App() {
	return (
		<div className="min-h-screen w-screen flex-col bg-sky-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300">
			<main className="mx-auto flex h-full w-full max-w-5xl flex-col gap-4 p-6">
				<Header />
				<CitySearch />
				<div className="flex grid-cols-2 flex-col gap-4 md:grid">
					<Widget>
						<MainWidget />
					</Widget>
					<Widget>
						<ForecastWidget />
					</Widget>
				</div>
				<div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4">
					<Widget>
						<UVWidget />
					</Widget>
					<Widget>
						<WindWidget />
					</Widget>
					<Widget>
						<MoonWidget />
					</Widget>
					<Widget>
						<AirWidget />
					</Widget>
				</div>
				<Widget>
					<CitiesWidget />
				</Widget>
				<Footer />
			</main>
		</div>
	);
}

export default App;
