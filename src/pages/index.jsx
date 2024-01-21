import React from "react";
import Layout from "@theme/Layout";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { IconHeartFilled } from "@tabler/icons-react";

export default function Index() {
    function ParallaxSectionImage({ src, alt, ...props }) {
        return (
            <div className="section">
                <Parallax easing="easeInOutSine" {...props}>
                    <img alt={alt} className="section-image" src={src} />
                </Parallax>
            </div>
        );
    }

    return (
        <ParallaxProvider>
            <Layout title="Index page" description="Rooms In The Back - Yet another backrooms game">
                <div style={{ backgroundColor: "#000000", fontWeight: "bold", fontFamily: "inter", display: "flex", flexDirection: "column" }}>
                    <div
                        style={{
                            height: "calc(100vh - 120px)",
                        }}
                        className="section"
                    >
                        <Parallax speed={-15}>
                            <img
                                style={{
                                    width: "60vw",
                                    height: "80vh",
                                }}
                                alt="Rooms In The Back logo"
                                src="/img/roomsintheback.svg"
                            />
                        </Parallax>
                    </div>
                    <div
                        style={{
                            height: "100vh",
                        }}
                        className="section"
                    >
                        <span style={{ fontSize: "4rem", fontFamily: "inter", textAlign: "center" }}>
                            Yet another <span className="backrooms-gradient">Backrooms</span> game
                        </span>
                    </div>

                    <ParallaxSectionImage src="/img/screenshots/level0-0.png" alt="Level 0 in Rooms In The Back" translateX={["-2%", "2%"]} />
                    <ParallaxSectionImage src="/img/screenshots/level0-1.png" alt="Level 0 in Rooms In The Back" translateX={["2%", "-2%"]} />
                    <ParallaxSectionImage src="/img/screenshots/level1-0.png" alt="Level 1 in Rooms In The Back" translateX={["-2%", "2%"]} />
                    <ParallaxSectionImage src="/img/screenshots/level1-1.png" alt="Level 1 in Rooms In The Back" translateX={["2%", "-2%"]} />
                    <ParallaxSectionImage src="/img/screenshots/poolrooms-0.png" alt="Poolrooms in Rooms In The Back" translateX={["-2%", "2%"]} />
                    <ParallaxSectionImage src="/img/screenshots/poolrooms-1.png" alt="Poolrooms in Rooms In The Back" translateX={["2%", "-2%"]} />

                    <Parallax
                        style={{
                            height: "100vh",
                        }}
                        className="section split-section"
                        speed={-10}
                    >
                        <img alt="Level 0 in Rooms In The Back, with 2 players visible" src="/img/friend.webp" />
                        <span style={{ fontSize: "4rem", fontFamily: "inter", textAlign: "center" }}>
                            <span className="friends-gradient">Play with friends</span>
                        </span>
                    </Parallax>
                    <Parallax
                        style={{
                            height: "100vh",
                        }}
                        className="vertical-section"
                        speed={20}
                    >
                        <span style={{ fontSize: "3rem", fontFamily: "inter", fontWeight: "normal", textAlign: "center", color: "#bbbbbb" }}>And more to come...</span>
                        <a href="/docs/faq">FAQ</a>
                    </Parallax>
                    <div
                        style={{
                            height: "100vh",
                        }}
                        className="section"
                    >
                        <Parallax speed={-20}>
                            <a className="donate-button" href="https://ko-fi.com/Nadwey" target="_blank">
                                <IconHeartFilled
                                    style={{
                                        verticalAlign: "middle",
                                        display: "inline-block",
                                        color: "#ff0000",
                                    }}
                                    size={80}
                                    color="#ff0000"
                                />
                                Donate
                            </a>
                        </Parallax>
                    </div>
                    <div
                        style={{
                            height: "100vh",
                        }}
                        className="section"
                    >
                        warning: this page is just a placeholder, things WILL change
                    </div>
                </div>
            </Layout>
        </ParallaxProvider>
    );
}
