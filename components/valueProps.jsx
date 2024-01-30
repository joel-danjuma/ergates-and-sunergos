import SectionTitle from "./sectionTitle";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";

const valueProps = [{}];

const ValueProps = () => {
  return (
    <section className="bg-[#FBF4DF]">
      <div className="p-4 ">
        <SectionTitle title="Comprehensive Training and Consulting Solutions Tailored to Your Needs">
          With A Focus on individual attention we are commited to delivering
          customized strategies, empowering your workforce , and guiding your
          business to sustainable growth and excellence
        </SectionTitle>
        <div className="container-div lg:gap-[40px] gap-[20px]">
          <div className="w-full">
            <Card className="lg:h-[440px] h-fit text-start p-4 bg-white/80 ">
              <CardHeader className="text-2xl">
                Our Approach to Leadership <br /> Development
              </CardHeader>
              <CardBody className="lg:space-y-4 space-y-2 text-xl">
                <p>
                  Ergates and Sunergos is a premier provider of leadership
                  development solutions that unleash the full potential of
                  leaders and teams
                </p>
                <p>
                  Our Unique approach to leadership development combines
                  powerful content based on decades of research and development
                  , expert consultants and facilitators and innovative
                  technology that supports and reinforces lasting behaviour
                  change
                </p>
              </CardBody>
              <CardFooter>
                <Button color="primary">Learn More</Button>
              </CardFooter>
            </Card>
          </div>
          <div className="w-full">
            <Card className="lg:h-[440px] h-fit text-start p-4 bg-white/80 ">
              <CardHeader className="text-2xl">
                <p>Leadership development expands a leader&apos;s impact</p>
              </CardHeader>
              <CardBody className="lg:space-y-4 space-y-2 text-xl">
                <p>
                  As leaders adopt and internalize principles of individual
                  effectiveness they :
                </p>
                <ul className="lg:space-y-4 space-y-2">
                  <li>- Build Charecter and Competence</li>
                  <li>
                    - Identify their purpose and connect it with key business
                    goals
                  </li>
                  <li>- Develop emotional resilience and agility</li>
                </ul>
              </CardBody>
              <CardFooter>
                <Button color="primary">Learn More</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
