export const countryNameCodeMapping = {
  //for the circuits
  Bahrain: "BH",
  "Saudi Arabia": "SA",
  Australia: "AU",
  Japan: "JP",
  China: "CN",
  USA: "US",
  "United States": "US",
  Italy: "IT",
  Monaco: "MC",
  Canada: "CA",
  Spain: "ES",
  Austria: "AT",
  UK: "GB",
  Hungary: "HU",
  Belgium: "BE",
  Netherlands: "NL",
  Azerbaijan: "AZ",
  Singapore: "SG",
  Mexico: "MX",
  Brazil: "BR",
  Qatar: "QA",
  UAE: "AE",

  //for the drivers
  FRA: "FR",
  ESP: "ES",
  CAN: "CA",
  MON: "MC",
  DEN: "DK",
  GER: "DE",
  FIN: "FI",
  CHN: "CN",
  AUS: "AU",
  GBR: "GB",
  JPN: "JP",
  NED: "NL",
  MEX: "MX",
  THA: "TH",

  //for the nationality
  Dutch: "NL",
  Mexican: "MX",
  Spanish: "ES",
  Monegasque: "MC",
  British: "GB",
  Australian: "AU",
  Canadian: "CA",
  Chinese: "CN",
  Danish: "DK",
  Japanese: "JP",
  Thai: "TH",
  German: "DE",
  French: "FR",
  Finnish: "FI",
  American: "US"
};

export const getCountryCode = (countryName: string) => {
  for (const country in countryNameCodeMapping) {
    if (country === countryName) {
      // @ts-expect-error some index error
      return countryNameCodeMapping[country].toLowerCase();
    }
  }
  return null;
};
