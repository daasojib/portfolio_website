import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Container from "../Shared/Container";
import ReactProjects from "./ReactProjects";
import HtmlProjects from "./HtmlProjects";

const Projects = () => {
  return (
    <Container>
      <div className="my-20 text-center">
        <h1 className="text-5xl font-Pacifico my-14">Projects</h1>
        <Tabs>
          <TabList className="no-animation">
            <Tab>React</Tab>
            <Tab>HTML</Tab>
          </TabList>

          <TabPanel>
            <ReactProjects></ReactProjects>
          </TabPanel>
          <TabPanel>
            <HtmlProjects></HtmlProjects>
          </TabPanel>
        </Tabs>
      </div>
    </Container>
  );
};

export default Projects;
