import { useState, useEffect } from "react"
import { Heading, Box, Image, Flex, Text, Spacer, Tag } from "@chakra-ui/react";
import { FiCalendar } from "react-icons/fi"
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
          <Box 
            key={launch.fligth_number} 
            bg="gray.100" 
            p={4} m="4" 
            borderRadius="lg"
          >
            <Flex display="flex">
              <Text fontSize="2Xl">
                Mission <strong>{launch.mission_name}</strong>({launch.launch_year})
              </Text>
              <Spacer/>
              <Tag p={4} colorScheme= {launch.launch_success ? "green" : "red"}>
                {launch.launch_success ? "Succes" : "Failure"}
              </Tag>
            </Flex>

            <Flex align="center">
              <FiCalendar />
              <Text fontSize="sm" ml={1}>
                {launch.launch_date_local.split("T")[0]}
              </Text>
            </Flex>
          </Box>
        ))}
      </section>
    </>
  )
}

export default App
