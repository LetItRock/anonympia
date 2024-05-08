import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  render,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface VercelInviteUserEmailProps {
  username?: string;
  userImage?: string;
  invitedByUsername?: string;
  invitedByEmail?: string;
  teamName?: string;
  teamImage?: string;
  inviteLink?: string;
  inviteFromIp?: string;
  inviteFromLocation?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://anonympia.vercel.app`
  : "http://localhost:4000";

export const Invite = ({
  firstName,
  lastName
}: any) => {
  const previewText = `We have the fluffish of crossonts, but no wine to enjoy them with`;

  const videoLink = "https://www.youtube.com/watch?v=3BydWohNNkU"

  return (
    <Html>

      <Preview>{previewText}</Preview>
      <Tailwind>
        <Head />
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={`${baseUrl}/Flag.gif`}
                width="200"
                height="150"
                alt="Anonympia"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
               We have the fluffish of crossonts, <br/> but no wine to enjoy them with :(
            </Heading>
            <Section className="flex flex-row " >
              <Text className="text-black text-[14px] leading-[24px]">
                Hello {firstName} {lastName},
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                We want to respond to our citizens about what has been happening lately.
              </Text>
            </Section>
            <Section className="flex flex-row ">
              <p>Your email client may not support video playback directly. If not, <a
                  href={videoLink}>click here</a> to watch the video.</p>
              <video poster={`${baseUrl}/Bomb.png`} width="480" height="270" controls={true}>
                <source src="https://www.youtube.com/embed/3BydWohNNkU" type="video/mp4"/>
              </video>
              {/*<iframe width="420" height="315"*/}
              {/*        src="https://www.youtube.com/embed/3BydWohNNkU">*/}
              {/*</iframe>*/}
            </Section>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full"/>
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              This invitation was intended for{" "}
              <span className="text-black">{firstName} {lastName}</span>.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Invite;

export function renderInvite(inputs: any) {
  return render(<Invite {...inputs} />);
}




