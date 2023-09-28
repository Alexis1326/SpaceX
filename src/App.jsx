import { useState, useEffect } from "react"
import { Center, Heading, Image} from "@chakra-ui/react";
import { LaunchItem } from "./components/LaunchItem";
import * as API from "./services/launches"
import logo from "./assets/log-spacex.png"

function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(()=>{
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <Image m={4} src={logo} width={300} />
      <Heading as="h1" size="lg">
        SpaceX Launches
      </Heading>
      <section>
        {launches.map(launch=> (
          <LaunchItem key={launch.fligth_number} {...launch}/>
        ))}
      </section>
    </>
  )
}

export default App
