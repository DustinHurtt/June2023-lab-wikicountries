import { Link } from "react-router-dom"

const HomePage = ({ countries }) => {


  return (
    <div className="container" style={{maxHeight: "90vh", overflow: "scroll"}}>
    <h1 style={{fontSize: "24px"}}>WikiCountries: Your Guide to the World</h1>

    <div className="list-group">

        {
            countries.map((country) => {
                return <Link className="list-group-item list-group-item-action" to={`/${country.alpha3Code}`}><img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="flag" /> {country.name.common}</Link>
            })
        }

      

    </div>
  </div>
  )
}

export default HomePage