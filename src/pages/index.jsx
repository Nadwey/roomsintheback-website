import React from "react";
import Layout from "@theme/Layout";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function Index() {
    return (
        <ParallaxProvider>
            <Layout title="Index page" description="Index page of Rooms In The Back website">
                <div style={{ backgroundColor: "#000000", fontWeight: "bold", fontFamily: "inter", display: "flex", flexDirection: "column" }}>
                    <div
                        style={{
                            height: "calc(100vh - 120px)",
                        }}
                        className="section"
                    >
                        warning: this page is just a placeholder, things WILL change
                    </div>
                    <div
                        style={{
                            height: "100vh",
                        }}
                        className="section"
                    >
                        <Parallax speed={-15}>
                            <img
                                style={{
                                    width: "60vw",
                                    height: "80vh",
                                }}
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
                            Your new favourite <span className="backrooms-gradient">Backrooms</span> game
                        </span>
                    </div>
                    <div
                        style={{
                            height: "100vh",
                        }}
                        className="section"
                    >
                        <img src="/img/friend.png" />
                        <Parallax speed={20}>
                            <span style={{ fontSize: "4rem", fontFamily: "inter", textAlign: "center" }}>Play with friends</span>
                        </Parallax>
                    </div>
                    <div
                        style={{
                            height: "100vh",
                        }}
                        className="section"
                    >
                        <div>
                            And there's not much more content currently in the game, but while you're here, you can check out the <a href="/blog">Blog</a> for updates on the game.
                        </div>
                    </div>
                </div>
            </Layout>
        </ParallaxProvider>
    );
}
