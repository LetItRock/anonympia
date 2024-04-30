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
  firstName?: string;
  lastName?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://react-email-demo-bdj5iju9r-resend.vercel.app`
  : "http://localhost:3000";

export const DDOS = ({
  firstName,
  lastName
}: any) => {
  const previewText = `Shall not send stale wine`;

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
               You shall not send stale wine.
            </Heading>
            <Section className="flex flex-row " >
              <Text className="text-black text-[14px] leading-[24px]">
                Hello {firstName} {lastName} ,
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                Wine shall be sent fresh and not stale
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default DDOS;

export function renderDdos(inputs: any) {
  return render(<DDOS {...inputs} />);
}




