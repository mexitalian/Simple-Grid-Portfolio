import React from "react";
import {
  Theme,
  Container,
  Grid,
  Box,
  Flex,
  Heading,
  Text,
  Separator,
  Tooltip,
  Dialog,
  Button,
  IconButton,
  Link,
  Card,
  Badge,
} from "@radix-ui/themes";
import { BentoCard } from "./components/BentoCard.tsx";
import { ProfileCard } from "./components/ProfileCard.tsx";
import { AIChatBot } from "./components/AIChatBot.tsx";
import { BackgroundShader } from "./components/BackgroundShader.tsx";
import { SOCIAL_LINKS, PROJECTS } from "./constants.tsx";
import { X, ArrowUpRight, Github, Code2, Sparkles } from "lucide-react";

const App: React.FC = () => {
  return (
    <Theme
      appearance="dark"
      accentColor="indigo"
      grayColor="slate"
      panelBackground="translucent"
      radius="medium"
    >
      <BackgroundShader />
      <Box style={{ backgroundColor: "transparent", minHeight: "100vh" }}>
        <Container size="4" p="5">
          <Flex direction="column" align="center" pt="9" pb="9">
            <Grid
              columns={{ initial: "1", sm: "2", lg: "4" }}
              gap="4"
              width="100%"
            >
              {/* Profile Card */}
              <Box
                gridColumn={{ sm: "span 2", lg: "span 2" }}
                gridRow={{ lg: "span 2" }}
              >
                <BentoCard>
                  <Box p="6">
                    <ProfileCard />
                  </Box>
                </BentoCard>
              </Box>

              {/* AI Chat Bot */}
              <Box gridColumn={{ sm: "span 2", lg: "span 2" }}>
                <BentoCard>
                  <Box p="6">
                    <AIChatBot />
                  </Box>
                </BentoCard>
              </Box>

              {/* Social Links */}
              {SOCIAL_LINKS.map((social) => (
                <Box key={social.name} height="100%">
                  <Tooltip content={`Visit ${social.name}`}>
                    <Link
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="none"
                      style={{ display: "block", height: "100%" }}
                    >
                      <BentoCard>
                        <Flex
                          direction="column"
                          align="center"
                          justify="center"
                          gap="4"
                          p="6"
                          height="100%"
                          style={{ cursor: "pointer" }}
                        >
                          <Box
                            p="4"
                            style={{
                              backgroundColor: "var(--slate-3)",
                              boxShadow: "var(--shadow-4)",
                              transition: "transform 0.3s",
                            }}
                          >
                            <Box style={{ color: "var(--indigo-11)" }}>
                              {social.icon}
                            </Box>
                          </Box>
                          <Flex direction="column" align="center">
                            <Text
                              size="2"
                              weight="bold"
                              color="gray"
                              highContrast
                            >
                              {social.name}
                            </Text>
                            <Text
                              size="1"
                              color="gray"
                              style={{
                                textTransform: "uppercase",
                                letterSpacing: "0.1em",
                              }}
                              mt="1"
                            >
                              {social.label}
                            </Text>
                          </Flex>
                        </Flex>
                      </BentoCard>
                    </Link>
                  </Tooltip>
                </Box>
              ))}

              {/* Projects */}
              {PROJECTS.map((project) => (
                <Box
                  key={project.title}
                  gridColumn={{ sm: "span 2", lg: "span 2" }}
                  gridRow={{ lg: "span 2" }}
                >
                  <Dialog.Root>
                    <Dialog.Trigger>
                      <Box style={{ cursor: "pointer", height: "100%" }}>
                        <BentoCard>
                          <Box
                            height="100%"
                            position="relative"
                            style={{ overflow: "hidden" }}
                          >
                            <img
                              src={project.image}
                              alt={project.title}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                transition: "transform 0.7s",
                                display: "block",
                              }}
                            />
                            <Box
                              position="absolute"
                              inset="0"
                              p="6"
                              style={{
                                background:
                                  "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "end",
                              }}
                            >
                              <Flex gap="2" mb="4">
                                {project.tags.map((tag) => (
                                  <Badge
                                    key={tag}
                                    size="1"
                                    variant="surface"
                                    color="indigo"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              </Flex>
                              <Heading
                                size="7"
                                weight="bold"
                                mb="2"
                                style={{
                                  color: "white",
                                  letterSpacing: "-0.02em",
                                }}
                              >
                                {project.title}
                              </Heading>
                              <Text
                                size="1"
                                weight="bold"
                                style={{
                                  color: "rgba(255,255,255,0.4)",
                                  textTransform: "uppercase",
                                  letterSpacing: "0.2em",
                                }}
                              >
                                Case Study{" "}
                                <ArrowUpRight
                                  size={14}
                                  style={{
                                    verticalAlign: "middle",
                                    marginLeft: 4,
                                  }}
                                />
                              </Text>
                            </Box>
                          </Box>
                        </BentoCard>
                      </Box>
                    </Dialog.Trigger>

                    <Dialog.Content
                      size="4"
                      style={{ padding: 0, overflow: "hidden" }}
                    >
                      <Box position="relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          style={{
                            width: "100%",
                            aspectRatio: "16/9",
                            objectFit: "cover",
                          }}
                        />
                        <Dialog.Close>
                          <Box position="absolute" top="4" right="4">
                            <IconButton
                              variant="ghost"
                              color="white"
                              highContrast
                              radius="full"
                              style={{
                                backgroundColor: "rgba(0,0,0,0.5)",
                                backdropFilter: "blur(8px)",
                              }}
                            >
                              <X size={20} />
                            </IconButton>
                          </Box>
                        </Dialog.Close>
                      </Box>
                      <Box p="7">
                        <Dialog.Title>
                          <Heading size="8" weight="bold" mb="2">
                            {project.title}
                          </Heading>
                        </Dialog.Title>
                        <Flex gap="3" mb="6">
                          {project.tags.map((tag) => (
                            <Text
                              key={tag}
                              size="1"
                              weight="bold"
                              color="indigo"
                              style={{
                                textTransform: "uppercase",
                                letterSpacing: "0.2em",
                              }}
                            >
                              {tag}
                            </Text>
                          ))}
                        </Flex>
                        <Dialog.Description>
                          <Text
                            size="3"
                            color="gray"
                            style={{ lineHeight: "1.6" }}
                            mb="6"
                            display="block"
                          >
                            {project.description} This exploration focuses on
                            the harmony between visual hierarchy and technical
                            feasibility in modern web interfaces.
                          </Text>
                        </Dialog.Description>
                        <Button
                          size="4"
                          width="100%"
                          variant="solid"
                          highContrast
                          asChild
                        >
                          <a href={project.link}>Explore Project</a>
                        </Button>
                      </Box>
                    </Dialog.Content>
                  </Dialog.Root>
                </Box>
              ))}

              {/* Tech Stats 1 */}
              <BentoCard>
                <Flex
                  direction="column"
                  align="center"
                  justify="center"
                  p="6"
                  height="100%"
                  gap="4"
                >
                  <Box
                    p="4"
                    style={{
                      backgroundColor: "var(--emerald-a3)",
                      color: "var(--emerald-11)",
                    }}
                  >
                    <Code2 size={32} />
                  </Box>
                  <Flex direction="column" align="center">
                    <Heading size="3" weight="bold">
                      Modern Tech
                    </Heading>
                    <Text
                      size="1"
                      color="gray"
                      weight="bold"
                      style={{
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                      }}
                      mt="1"
                    >
                      React / TS / Node
                    </Text>
                  </Flex>
                </Flex>
              </BentoCard>

              {/* Tech Stats 2 */}
              <BentoCard>
                <Flex
                  direction="column"
                  align="center"
                  justify="center"
                  p="6"
                  height="100%"
                  gap="4"
                >
                  <Box
                    p="4"
                    style={{
                      backgroundColor: "var(--orange-a3)",
                      color: "var(--orange-11)",
                    }}
                  >
                    <Github size={32} />
                  </Box>
                  <Flex direction="column" align="center">
                    <Heading size="3" weight="bold">
                      Open Source
                    </Heading>
                    <Text
                      size="1"
                      color="gray"
                      weight="bold"
                      style={{
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                      }}
                      mt="1"
                    >
                      Active Builder
                    </Text>
                  </Flex>
                </Flex>
              </BentoCard>

              {/* Call to Action */}
              <Box gridColumn={{ sm: "span 2", lg: "span 2" }}>
                <Link
                  href="#"
                  underline="none"
                  style={{ display: "block", height: "100%" }}
                >
                  <Card
                    size="3"
                    variant="surface"
                    style={{
                      height: "100%",
                      backgroundColor: "var(--indigo-9)",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <Flex align="center" justify="between" height="100%">
                      <Flex align="center" gap="5">
                        <Box
                          p="4"
                          style={{
                            backgroundColor: "rgba(255,255,255,0.2)",
                            color: "white",
                            boxShadow: "var(--shadow-4)",
                          }}
                        >
                          <Sparkles size={32} fill="currentColor" />
                        </Box>
                        <Flex direction="column">
                          <Heading
                            size="6"
                            weight="bold"
                            style={{ color: "white" }}
                          >
                            Available for work
                          </Heading>
                          <Text
                            size="1"
                            weight="bold"
                            style={{
                              color: "rgba(255,255,255,0.8)",
                              textTransform: "uppercase",
                              letterSpacing: "0.1em",
                            }}
                          >
                            Let's build the future together
                          </Text>
                        </Flex>
                      </Flex>
                      <ArrowUpRight
                        size={24}
                        style={{ color: "white", opacity: 0.6 }}
                      />
                    </Flex>
                  </Card>
                </Link>
              </Box>
            </Grid>

            <Separator size="4" mt="9" mb="5" />

            <Flex
              direction={{ initial: "column", md: "row" }}
              align="center"
              gap="6"
              pt="5"
              pb="9"
            >
              <Text
                size="1"
                weight="bold"
                color="gray"
                style={{ textTransform: "uppercase", letterSpacing: "0.4em" }}
              >
                &copy; {new Date().getFullYear()} Kinetic State
              </Text>
              <Box display={{ initial: "none", md: "block" }}>
                <Separator
                  orientation="vertical"
                  size="1"
                  style={{ height: 16 }}
                />
              </Box>
              <Flex gap="6">
                {["Twitter", "Github", "Resume"].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    size="1"
                    weight="bold"
                    color="gray"
                    highContrast
                    style={{
                      textTransform: "uppercase",
                      letterSpacing: "0.4em",
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </Theme>
  );
};

export default App;
