import GradientWaves from "./components/GradientWaves";
import DepthText from "./components/DepthText";
import BorderGlow from "./components/BorderGlow";

function App() {
  return (
    <div className="relative m-0 h-screen flex justify-center items-center bg-[#0d0d0d] text-white font-sans text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <GradientWaves
          horizonColor="#0b1530"
          waveColor="#8c1f2b"
          crestColor="#f2e2c9"
          speed={0.35}
          amplitude={3.2}
          waveScale={0.6}
          waveRatio={0.9}
          swell={30}
          turbulence={18}
          tilt={1.35}
          zoom={1}
          height={3.5}
          fogDepth={40}
          detail="medium"
          brightness={1.4}
          opacity={1}
          mouseInteraction={false}
          parallaxStrength={0.4}
          grain
          grainIntensity={0.04}
        />
      </div>

      <BorderGlow
        className="card-enter relative z-10 w-80"
        edgeSensitivity={30}
        glowColor="355 70% 45%"
        backgroundColor="rgba(21, 21, 21, 0.85)"
        borderRadius={16}
        glowRadius={40}
        glowIntensity={1}
        coneSpread={25}
        animated
        colors={["#5c1220", "#8c1f2b", "#e0483f"]}
      >
        <div className="p-10 text-center backdrop-blur-sm rounded-2xl">
          <img
            src="/shanks.gif"
            className="logo w-32 h-32 rounded-full object-cover mx-auto mb-5 ring-2 ring-[#8c1f2b]/70 ring-offset-4 ring-offset-[#151515]"
            alt="Logo"
          />

          <DepthText
            text="cy2valid"
            layers={34}
            depth={2.4}
            faceColor="#f8fafc"
            depthColor="#8c1f2b"
            tilt={7.5}
            pointerTracking={false}
            smoothing={0.14}
            perspective={900}
            autoOrbit={false}
            orbitSpeed={0.35}
            fontSize="2.25rem"
            fontWeight={900}
            shadow
            className="mb-2"
          />

          <p className="text-gray-400">Roblox Animator & Developer</p>

          <a
            href="https://discord.com/users/707671248271966258"
            className="inline-flex items-center justify-center gap-2 mt-6 px-6 py-3 text-base font-medium text-white no-underline rounded-full border border-blue-600 bg-linear-to-b from-blue-500 to-blue-700 shadow-lg transition-all duration-200 hover:from-blue-600 hover:to-blue-800 hover:border-blue-700 hover:shadow-xl"
          >
            Add me on Discord
            <span aria-hidden="true">&rarr;</span>
          </a>

          <p className="mt-4 text-xs text-gray-500">
            For business enquiries contact{" "}
            <a
              href="mailto:cy@anims.dev"
              className="text-gray-400 underline hover:text-gray-300"
            >
              cy@anims.dev
            </a>
          </p>
        </div>
      </BorderGlow>

      <a
        href="https://eele14.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-3 inset-x-0 text-center text-xs text-gray-600 underline hover:text-gray-400 transition-colors"
      >
        Made by eele14
      </a>
    </div>
  );
}

export default App;
