import { useTranslation } from "react-i18next";

import MoonIcon from "./MoonIcon";
import { getPhaseName } from "./moonUtils";

function MoonWidget() {
	const { t } = useTranslation();
	const phase = getPhaseName();
	return (
		<div className="flex flex-col items-center p-4">
			<div className="font-semibold">{t("moon.moon")}</div>
			<MoonIcon phase={phase} />

			<div className="font-semibold">{t(`moon.${phase}`)}</div>
		</div>
	);
}

export default MoonWidget;
