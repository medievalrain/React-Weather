import { useTranslation } from "react-i18next";

import useCurrentCity from "../../../hooks/useCurrentCity";
import useWeather from "../../../hooks/useWeather";
import Spinner from "../../../ui/Spinner";
import WeatherIcon from "../../../ui/WeatherIcon";
import { normalizeDate, toTimestampInSeconds } from "../../../utils/format";
import FormattedDate from "./FormattedDate";
import PeriodsForecast from "./PeriodsForecast";
import SaveButton from "./SaveButton";
import WeatherDescription from "./WeatherDescription";

function MainWidget() {
	const { weather, isFetching } = useWeather();
	const { city } = useCurrentCity();
	const { t } = useTranslation();

	if (weather && city) {
		const timestamp = toTimestampInSeconds(normalizeDate(new Date()));
		const index = weather.hourly.time.indexOf(timestamp);
		return (
			<div className="flex h-full flex-col justify-between px-4 pt-4 pb-2">
				<div className="flex items-center justify-between">
					<FormattedDate timezone={city.timezone} />
					{isFetching && <Spinner />}
					<SaveButton />
				</div>
				<WeatherDescription
					currentTemperature={weather.current_weather.temperature}
					weathercode={weather.current_weather.weathercode}
					temperatures={weather.hourly.temperature_2m}
					times={weather.hourly.time}
				/>
				<div className="flex -translate-x-4 items-center font-mono text-7xl font-extrabold">
					<WeatherIcon size="big" weathercode={weather.current_weather.weathercode} />
					{Math.round(weather.current_weather.temperature)}°
				</div>
				<div>
					{t("feels_like")} {Math.round(weather.hourly.apparent_temperature[index])}°
				</div>
				<PeriodsForecast
					temperatures={weather.hourly.temperature_2m}
					weathercodes={weather.hourly.weathercode}
					time={weather.hourly.time}
					timezone={city.timezone}
				/>
			</div>
		);
	} else return null;
}

export default MainWidget;
