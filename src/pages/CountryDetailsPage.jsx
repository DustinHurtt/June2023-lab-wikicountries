import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"


const CountryDetailsPage = ({ countries }) => {

    const [country, setCountry] = useState(null)

    const { countryId } = useParams()
    
    useEffect(() => {

        console.log("Country ID ====>", countryId)
        const thisCountry = countries.find((country) => country.alpha3Code === countryId)

        setCountry(thisCountry)

    }, [countryId])

  return (
    <div className="container">
    <p style={{fontSize: "24px", fontWeight: "bold"}}>Country Details</p>

    {
        country && 

        <>
                <h1>{country.name.common}</h1>

                <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="flag" />                

                <table className="table">
                <thead></thead>
                <tbody>
                    <tr>
                    <td style={{width: "30%"}}>Capital</td>
                    <td>{country.capital}</td>
                    </tr>
                    <tr>
                    <td>Area</td>
                    <td>
                        {country.area} km
                        <sup>2</sup>
                    </td>
                    </tr>
                    <tr>
                    <td>Borders</td>
                    <td>
                        <ul>
                        {country.borders.map((border) => {
                            return (
                                <li>
                                    <Link to={`/${border}`}>{border}</Link>

                                </li>
                            )
                        })}
                        </ul>
                    </td>
                    </tr>
                </tbody>
                </table>

        </>
    }
            </div>

  )
}

export default CountryDetailsPage
