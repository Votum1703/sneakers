import React from "react"
import axios from "axios";
import Card from "../Card";

function Profile() {
  const [profile, setProfile] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(()=> {
    (async ()=> {
      try {
      const { data } = await axios.get('https://65a96784219bfa37186931df.mockapi.io/orders')
      setProfile(data.reduce((prev, obj) => [...prev, ...obj.items], []));
      setIsLoading(false)
      } catch (error) {
        alert('Ошибка при запросе заказов')
        console.log(error);
      }
    })()

  }, [])

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои заказы</h1>
      </div>

      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(8)] : profile).map((item, index) => (
          <Card 
          key={index}
          loading={isLoading}
          {...item} />
        ))}
      </div>
    </div>
  );
}

export default Profile;