import React from "react";
import Layout from "@theme/Layout";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { IconHeartFilled } from "@tabler/icons-react";

export default function Index() {
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
                    <div className="section">
                        <Parallax easing="easeInOutSine" translateX={["-2%", "2%"]}>
                            <img alt="Level 1 in Rooms In The Back" className="section-image" src="/img/screenshots/level1-1.webp" />
                        </Parallax>
                    </div>
                    <div className="section">
                        <Parallax easing="easeInOutSine" translateX={["2%", "-2%"]}>
                            <img alt="Poolrooms in Rooms In The Back" className="section-image" src="/img/screenshots/poolrooms-1.webp" />
                        </Parallax>
                    </div>
                    <div className="section">
                        <Parallax easing="easeInOutSine" translateX={["-2%", "2%"]}>
                            <img alt="Level 1 in Rooms In The Back" className="section-image" src="/img/screenshots/level1-2.webp" />
                        </Parallax>
                    </div>
                    <div className="section">
                        <Parallax easing="easeInOutSine" translateX={["2%", "-2%"]}>
                            <img alt="Poolrooms in Rooms In The Back" className="section-image" src="/img/screenshots/poolrooms-2.webp" />
                        </Parallax>
                    </div>
                    <div className="section">
                        <Parallax easing="easeInOutSine" translateX={["-2%", "2%"]}>
                            <img alt="Level 1 in Rooms In The Back" className="section-image" src="/img/screenshots/level1-3.webp" />
                        </Parallax>
                    </div>
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
