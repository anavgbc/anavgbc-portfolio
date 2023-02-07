import { motion, useTransform, useViewportScroll } from "framer-motion";

import {
  AboutmeSection,
  AboutmeSectionContent,
  AboutmeCard,
  AboutmeImg,
  AboutmeInfo,
} from "./style";

import { useRef } from "react";
import { userData } from "@/utils/userData";
import ParticlesBackground from "../ParticlesBackground";
import { StackCards } from "@/pages/home/style";
import { stackData } from "@/utils/stackData";
import { Stack } from "../Stack";

export const Aboutme = () => {
  const ref = useRef(null);

  const linkedInUrl = `https://www.linkedin.com/in/${userData.linkedinUser}`;

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.1, 0.9]);

  return (
    <AboutmeSection id="aboutme">
      <ParticlesBackground />
      <AboutmeSectionContent>
        <AboutmeCard>
          {/* <AboutmeImg src={`https://github.com/${userData.githubUser}.png`} /> */}
        </AboutmeCard>
        <AboutmeInfo>
          <p>
            Desenvolvedora Web Full Stack pela Kenzie Academy Brasil e estudante
            de Análise e Desenvolvimento de Sistemas, artista, curiosa e
            criativa, encontrei o meu caminho em meio a programação ao perceber
            que sempre estaria em contato com a criação e nunca deixaria de
            aprender coisas novas todos os dias, buscando sempre deixar um pouco
            de mim nas letrinhas na tela do computador, e enxergando cada dia
            mais a programação como uma arte lógica.
          </p>
          {
            <>
              <StackCards>
                {stackData.map((stack, index) => (
                  <Stack key={index} title={stack.title} icon={stack.img} />
                ))}
              </StackCards>
            </>
          }
        </AboutmeInfo>
      </AboutmeSectionContent>
    </AboutmeSection>
  );
};
