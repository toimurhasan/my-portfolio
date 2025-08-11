import PeerSolve from "./PeerSolve";
import HobbyHub from "./HobbyHub";
import { SBT } from "./SBT";

const Projects = () => {
  return (
    <section
      id="projects"
      className="pb-10 px-4 lg:px-20 max-w-7xl mx-auto bg-base-100 xl:rounded-2xl"
    >
      <h3 className="text-center py-6 text-2xl font-light mb-4">
        Projects <span className="text-primary">I Made</span>
      </h3>
      <div className="space-y-8">
        <SBT></SBT>
        <PeerSolve></PeerSolve>
        <HobbyHub></HobbyHub>
      </div>
    </section>
  );
};

export default Projects;
