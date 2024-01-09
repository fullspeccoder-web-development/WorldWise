import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

export default function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message
        message={"Add your first city by clicking on a city on the map"}
      />
    );
  const countries = cities.reduce((arr, city) => {
    const { country, emoji } = city;
    const isCountryIncluded = arr.some((el) => el.country === country);
    if (!isCountryIncluded) return [...arr, { country, emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country, ind) => (
        <CountryItem key={ind} country={country} />
      ))}
    </ul>
  );
}
