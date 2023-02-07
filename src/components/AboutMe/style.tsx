import { styled } from "@/styles/stitches.config";

export const AboutmeSection = styled("section", {
  background: "$grey1",
  padding: "$section 0",
  "@mobile": {
    padding: "$sectionMobile 0",
  },
});

export const AboutmeSectionContent = styled("div", {
  display: "flex",
  justifyContent: "space-around",
  margin: "50px",
  backgroundColor: "#ffffffe",
  backdropFilter: "blur(2px)",

  "@mobile": {
    flexDirection: "column",
    alignItems: "center",
  },
});

export const AboutmeCard = styled("div", {
  width: "25%",
  height: "100%",
  padding: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
});

export const AboutmeImg = styled("img", {
  backgroundColor: "red",
  width: "90%",
  height: "300px",
  objectFit: "contain",
});

export const AboutmeInfo = styled("div", {
  width: "60%",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  textAlign: "justify",

  p: {
    marginBottom: "30px",
  },

  "@tablet": {
    width: "36rem",
    padding: "10px",
  },
  "@mobile": {
    width: "100%",
    padding: "10px",
  },
});
